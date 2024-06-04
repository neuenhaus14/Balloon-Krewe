
<script setup>
import { ref, onMounted } from 'vue'
import EventService from '../EventService'

const props = defineProps({
  id:{
    required: true,
  },
  title:{
    required: true,
  },
  description:{
    required: true,
  },
  src:{
    required: true,
  }
})

// const event = ref(null)
// // const id = ref(123)

// onMounted(() => {
//   EventService.getEvent(props.id)
//   .then((response) => {
//     event.value= response.data
//   })
//   .catch((err) => console.error(err))
// })

</script>


<template >
  <!-- <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div> -->
  <div id="event-detials">
    <img :src="src" alt="Balloon Arches" width="200" height="300"/>
    <!-- <h1> {{v-bind= "title"}}</h1>
    <p>{{ description }}</p> -->
  </div>
</template>

<style scoped>
  #event-details{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }

</style>