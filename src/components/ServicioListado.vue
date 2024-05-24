<template>
  <h1>listado del servicio</h1>
  <ul class="servicio-listado">
    <li v-for="post1 in posts1" :key="post1.id">{{ post1.title }}</li>
  </ul>
  <h1>listado de posts</h1>
  <ul class="post-list">
    <li v-for="post2 in posts2" :key="post2.id">
      <router-link :to="{ name: 'PostDetail', params: { id: post2.id } }">{{
        post2.title
      }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import { onMounted } from "vue";
import MiServicio from "src/services/MiServicio";
const servicio = new MiServicio();
const posts1 = servicio.getServicio();
onMounted(() => {
  servicio.fetchAll();
  servicio.fetchById(6);
});
const posts2 = servicio.getPost();
</script>
