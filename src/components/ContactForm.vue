<script setup>
import { ref, watchEffect } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import EventService from '../EventService';

const firstName = ref();
const lastName = ref();
const email = ref();
const message = ref();
const date = ref();

// watchEffect(() => 
//   console.log(firstName.value, lastName.value, email.value, message.value, date.value )
// )

const onSubmit = (() => {
  console.log('hit onSubmit function')
  EventService.postContactForm(firstName.value, lastName.value, email.value, message.value, date.value)
  .then((response) => {
    console.log(response, 'postContactForm done')
  })
  .catch((err) => console.error("error", err))
})

</script>

<template>
  <div class="contact-form">
    <label for="firstName">First Name:</label>
    <input type="text" id="firstName" v-model="firstName"><br/>
    <label for="lastName">Last Name:</label>
    <input type="text" id="lastName" v-model="lastName"><br/>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email"><br/>
    <label for="message">Message:</label>
    <input type="text" id="message" v-model="message"><br/>
    <label for="date">Select a date and time:</label>
    <Datepicker id="date" v-model="date"/>
    <button type="submit" @click="onSubmit">
    Submit
    </button>
  </div>
</template>

