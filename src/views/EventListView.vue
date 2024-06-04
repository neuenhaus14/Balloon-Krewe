<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '../EventService';
import ContactForm from '../components/ContactForm.vue'
import AboutView from './AboutView.vue'

import birthday1 from '../assets/pictures/parties/birthday1.jpg'
import birthday2 from '../assets/pictures/parties/birthday2.jpg'
import birthday3 from '../assets/pictures/parties/birthday3.jpg'
import party1 from '../assets/pictures/parties/party1.jpg'

import { ref, onMounted } from 'vue'

const events = ref(null)

//const parties = ref([birthday1, birthday2, birthday3, party1])
const parties = ref([
//  { id: 0,
//   src: birthday1,
//   title: 'Birthday Party',
//   description: 'Little boy loved this'},
  { id: 1,
  src: birthday2,
  title: 'Birthday Party',
  description: 'Little boy loved this'},
  { id: 2,
  src: birthday3,
  title: 'Birthday Party',
  description: 'Little boy loved this'},
  { id: 3,
  src: party1,
  title: 'Birthday Party',
  description: 'Little boy loved this'},
  

])

onMounted(() => {
  EventService.getEvents()
  .then((response) => {
    events.value= response.data
  })
  .catch((err) => console.error(err))

})

</script>

<template>
  <h1>Events For Good</h1>
  <div id="events" class="container mx-auto">
    <!-- <img v-for="pic in parties" :src="pic" alt="Balloon Arches" width="200" height="300"/> -->
    <!-- <EventCard v-for="event in events" :key="event.id" :event="event" /> -->
    <EventCard v-for="partyPic in parties" :key="partyPic.id" :partyPic="partyPic"/> 
  </div>
    <AboutView />
    <ContactForm />
</template>

<style scoped>
#events {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}
</style>
