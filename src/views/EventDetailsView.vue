
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
  <div id="event-details">
  <div id="event-img">
    <img :src="src" alt="Balloon Arches" width="500" height="600"/>
  </div>
  <div id="event-img-details">
    <h2> {{props.title}} </h2>
    {{ props.description }}
  </div>
</div>
</template>

<style scoped>
#event-details{
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-evenly;
}

  #event-img{
    display: flex;
    flex-direction: column;
  }

  #event-img-details{
    display: flex;
    flex-direction: column;
    align-items: top;
    justify-content: center;
  }

</style>