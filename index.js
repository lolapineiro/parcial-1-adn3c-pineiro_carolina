Vue.component('header-component', {
    template: `
    <div
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border border-ligh">

            <nav class="nav justify-content-center d-flex align-items-center">
                <img class="logo" src="./images/logo.jpeg " alt="logo tejiendo ideas">
                <a class="nav-link link-dark" href="./index.html" aria-current="page">Habitos</a>
                <a class="nav-link link-dark" href="./consejos.html">Consejos</a>

            </nav>
        </div>
    `
  })

  Vue.component('footer-component', {
    template: `
    <div 
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border border-ligh">
    <p class="text-center">Carolina Piñeiro <strong>
        Parcial I - ADM N3C
    </strong></p>
    </div > 
    `
  })



Vue.component ('crear-tareas', {
    template:`
    <div id="application">

    <section class="tareas">
      <input type="text" id="taskTitle" placeholder="Tarea">
      <input type="number" id="taskTime" placeholder="Horas" min="1" step="1">
      <button @click="addTask" class="addTask button">
        <img class="icon" src="./assets/mas.png" alt="Agregar tarea">
      </button>
    </section>

    <section v-if="tasks.length > 0" class="section_tareas">
      <div class="listaTareas">
        <ul>
          <li v-for="(task, key) in tasks" :key="key">
            {{ task.title }} -> {{ task.time }} horas
            <button @click="deleteTask" class="deleteTask button">
              <img class="icon" src="./assets/borrar.png" alt="Borrar tarea">
            </button>
          </li>
        </ul>
      </div>
    `
})




  

const app = new Vue ({
    el: "#contenedor",
    data: {
        titulo: 'Creando hábitos épicos',
        titulo2: 'Consejos de hoy y de siempre',
        message: 'Recuerda que incorporar buenos hábitos lleva tiempo y esfuerzo, pero los beneficios para tu salud y bienestar valen la pena. ¡Empieza hoy mismo a cuidar de ti mismo/a y a cultivar una vida más saludable y equilibrada!'
    }
}); 

