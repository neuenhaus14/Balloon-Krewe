<script setup>
defineProps({
  // event: {
  //   type: Object,
  //   required: true,
  // },
  partyPic: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <!-- <RouterLink :to="{name: 'event-details', params:{id: partyPic.id}}"> -->
  <RouterLink :to="{name: 'event-details', params:{id: partyPic.id, title: partyPic.title, description:partyPic.description, src: partyPic.src}}">
  <div class="event-card">
    <!-- <h2>{{ event.title }}</h2>
    <span>@{{ event.time }} on {{ event.date }}</span> -->
    <img :src="partyPic.src" alt="Balloon Arches" width="200" height="300"/>
  </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  /* width: 250px; */
  cursor: pointer;
  border: 1px solid #39495c;
  margin: 10px;
  /* margin-bottom: 18px; */
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
