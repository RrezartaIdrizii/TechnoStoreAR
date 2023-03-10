<template>
	<div class="section no-pad-bot" id="index-banner">
		<div class="container-fluid">
			<br><br>
			<h1 class="header center orange-text">About Us</h1>
			<div class="row center">
				<h5 class="header col s12 light">We offer the best items in trade!</h5>
			</div>
			<br><br>

			</div>
        </div>
</template>

<script>
	import axios from "axios"
    import swal from "sweetalert2"
    import store from "../vuex/store"

	export default {
		data() {
            return {
                page: 1,
                products: [],
                sortBy: "",
                categories: [],
                category: "",
                isLoading: false
            }
        },

        computed: {
        	search: function () {
        		return store.getters.getSearch
        	}
        },

        methods: {
        	onchangeSortBy: function () {
        		this.page = 1
        		this.sortBy = event.target.value
        		this.getData()
        	},

        	onclickCategory: function () {
        		this.page = 1
        		this.category = event.target.innerHTML
        		this.getData()
        	},

        	loadMore: function () {
        		this.$refs.btnLoadMore.setAttribute("disabled", "disabled")

        		this.page++
        		this.getData()
        	},

        	getConfigurations: async function () {
        		const response = await axios.post(
                    this.$apiURL + "/getConfigurations",
                    null
                )

                if (response.data.status == "success") {
                    const configurations = response.data.configurations
                    this.categories = configurations.categories || []
                }
        	},

            getData: async function () {
            	this.isLoading = true

                const formData = new FormData()
                formData.append("page", this.page)
                formData.append("sortBy", this.sortBy)
                formData.append("category", this.category)
                formData.append("search", this.search)

                const response = await axios.post(
                    this.$apiURL + "/products/fetch",
                    formData
                )

                this.isLoading = false
                this.$refs.btnLoadMore.removeAttribute("disabled")

                if (response.data.status == "success") {
                	this.products = response.data.products
                } else {
                    swal.fire("Error", response.data.message, "error")
                }
            }
        },

        mounted: function () {
        	this.getConfigurations()
            this.getData()

        	var elems = document.querySelectorAll('select')
		    var instances = M.FormSelect.init(elems, {})
        },

        watch: {
        	search: function (to, from) {
        		this.getData()
        	}
        }
	}
</script>