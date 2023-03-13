<template>
  <div class="background-event">
    <br>
<br>
  <div class="event-planning" >
    <h1>Event Planning</h1>
    <div class="event-form">
      <label for="event-name">Event Name:</label>
      <input id="event-name" v-model="eventName" />

      <label for="event-date">Event Date:</label>
      <input id="event-date" type="date" v-model="eventDate" />

      <label for="event-time">Event Time:</label>
      <input id="event-time" type="time" v-model="eventTime" />

      <label for="event-location">Event Location:</label>
      <input id="event-location" v-model="eventLocation" />

      <button @click="submitEvent" value="submit" type="submit" name="submit">Submit</button>
    </div>
  </div>
  <br>
  <br>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      eventName: '',
      eventDate: '',
      eventTime: '',
      eventLocation: ''
    }
  },
  methods: {
    submitEvent() {
      const eventData = {
        name: this.eventName,
        date: this.eventDate,
        time: this.eventTime,
        location: this.eventLocation
      }

      // Send the data to the server using axios
      axios.post('/api/events', eventData)
        .then(response => {
          console.log(response.data)
          // Reset the form fields
          this.eventName = ''
          this.eventDate = ''
          this.eventTime = ''
          this.eventLocation = ''
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>


<style>
.background-event{
  background-image: url(../assets/event.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.event-planning {
  max-width: 800px;
  margin: 0 auto;
 background-color: aliceblue;
 padding: 10px;
}

.event-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  padding: 30px;
}

label {
  font-weight: bold;
}

input[type="date"],
input[type="time"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
</style>
