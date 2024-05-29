<script setup>
import { onMounted, ref } from 'vue';
import EventService from '../EventService';
import ContactForm from '../components/ContactForm.vue';

const cat = ref(null)

</script>

<template>
  <div class="contact-view">
    <p>Send an inquiry below!</p>
    <ContactForm />
  </div>
</template>