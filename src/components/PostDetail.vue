<template>
  <h1>Post Detail</h1>
  <div class="post-container">
    <div class="post-card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <router-link to="/">Volver atras</router-link>
  </div>
</template>

<script setup>
import MiServicio from "src/services/MiServicio";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const servicio = new MiServicio();
const post = servicio.getPost();

onMounted(async () => {
  const route = useRoute();
  let id = route.params.id;
  await servicio.fetchById(id);
});
</script>
