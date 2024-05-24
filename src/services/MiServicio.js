import { ref } from "vue";
class MiServicio {
  constructor() {
    this.servicio = ref([]);
    this.post = ref([]);
  }
  getServicio() {
    return this.servicio;
  }
  getPost() {
    return this.post;
  }

  //definiremos una funcion asincrona
  async fetchAll() {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      //sirve para esperar await
      const response = await fetch(url);
      //ya tenemos los datos en formato json
      const json = await response.json();
      this.servicio.value = await json;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchById(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    //const url = "https://jsonplaceholder.typicode.com/posts" + id;
    const response = await fetch(url);
    const json = await response.json();
    this.post.value = await [json];
  }
  catch(error) {
    console.log(error);
  }
}
export default MiServicio;
