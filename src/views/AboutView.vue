<script setup>
import { onMounted, ref } from 'vue';
import EventService from '../EventService';

const cat = ref(null)

onMounted(() => {
  EventService.getCat()
  .then((response) => {
    cat.value= response.data
  })
  .catch((err) => console.error(err))
})

</script>

<template>
  <div id="about" class="container px-4">
    <p>Custom balloon arrangements by Morgan Grosz and Natalie Jones.</p>
    <p>This is the response from the server: {{ cat }}</p>
  </div>
</template>

<style>
  #about {
    background-color: aqua;
  }
</style>