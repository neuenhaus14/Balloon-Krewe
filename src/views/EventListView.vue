<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '../EventService';
import ContactForm from '../components/ContactForm.vue'
import AboutView from './AboutView.vue'
import pictureObjs from '../pictureObjs'


import { ref, onMounted } from 'vue'

const events = ref(null)
const parties = ref(pictureObjs.parties)
const celebrations = ref(pictureObjs.celebrations)


onMounted(() => {
  EventService.getEvents()
  .then((response) => {
    events.value= response.data
  })
  .catch((err) => console.error(err))

})

</script>

<template>
  <h1>Birthday Parties</h1>
  <div id="events" class="container mx-auto">
    <EventCard v-for="partyPic in parties" :key="partyPic.id" :partyPic="partyPic"/> <br/>
  </div>
  <h1>Celebrations and Grand Openings!</h1>
  <div id="events" class="container mx-auto">
  <EventCard v-for="partyPic in celebrations" :key="partyPic.id" :partyPic="partyPic"/> 
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
