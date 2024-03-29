const nodemailer = require("nodemailer")
const nodemailerFrom = ""
const nodemailerObject = {
    host: "",
    port: 465,
    secure: true,
    auth: {
        user: "rrezartaidrizi@gmail.com",
        pass: "Rreze2002"
    }
}

global.sendMail = async function (to, subject, message, onSuccess = null) {
	const transporter = nodemailer.createTransport(nodemailerObject)

	transporter.sendMail({
		from: nodemailerFrom,
		to: to,
		subject: subject,
		text: message,
		html: message
	}, function (error, info) {
		if (error) {
			console.error(error);
		} else {
			console.log("Email sent: " + info.response);
		}
		
		if (onSuccess != null) {
			onSuccess()
		}
	})
}

global.decrementItemsInStock = async function (items) {
	for (let a = 0; a < items.length; a++) {
		const product = await global.db.collection("products").findOne({
			_id: items[a]._id
		})
		if (product != null) {
			if (product.itemsInStock > 0 && product.itemsInStock < items[a].units) {
				return {
					status: "error",
					message: "Only " + product.itemsInStock + " items are left in " + product.name
				}
			}

			const remainingUnits = product.itemsInStock - items[a].units
			if (remainingUnits < 0) {
				return {
					status: "error",
					message: "Not enough stock in " + product.name
				}
			}

			await global.db.collection("products").findOneAndUpdate({
				_id: product._id
			}, {
				$set: {
					itemsInStock: remainingUnits
				}
			})
		}
	}

	return {
		status: "success",
		message: "Items in stock has been decremented."
	}
}

global.getStripeObj = async function (result) {
	const STRIPE_SECRET_KEY = ""

	const configurations = await global.db.collection("configurations").findOne({})
	if (configurations == null) {
		result.json({
            status: "error",
            message: "Please enter your stripe keys from admin dashboard."
        })
        return
	}

	const stripe = require("stripe")(configurations.stripeSecretKey)
	return stripe
}