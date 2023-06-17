Vue.component("habito-agradecer", {
  data: function () {
    return {
      agradecimiento: "",
      vacio: true,
      gracias: [],
      editGracias: null,
    };
  },
  
  mounted() {
    // Cargar los datos desde el local storage al iniciar el componente
    const storedGracias = localStorage.getItem("gracias");
    if (storedGracias) {
      this.gracias = JSON.parse(storedGracias);
      this.vacio = false;
    }
  },

  template: `
    <div class="container">
    
    <div class="d-flex">
        <input v-model="agradecimiento" class="form-control me-2" type="text" placeholder="Hoy agradezco por..."
          aria-label="Aprender a decir gracias">
        <button type="button" class="btn" @click="nuevoGracias"><img src="./images/agregar-boton.png" alt="agregar gracias"></button>
      </div>
  
      <div>
        <p class="emphasized">Por favor escriba aqui sus agradecimientos diarios</p>
      </div>
  
      <table class="table mt-4 ">
        <thead>
          <tr>
            <th scope="col">Agradecimientos</th>
         
          </tr>
        </thead>
  
        <template v-if="vacio">
          <p>Agregue sus afirmaciones de hoy</p>
        </template>
      <template v-else>
        <tbody>
  
        
          <tr v-for="(agradecimiento, escrito) in gracias" :key="escrito" class="mb-3">
            <th scope="row">{{agradecimiento.escritura}}</th>
  
            <td>
              <button type="button" class="btn " @click="eliminar">
                <img src="./images/eliminar.png" alt="Eliminar"></img>
              </button>
            </td>
  
            <td>
              <button type="button" class="btn" @click="editar(escrito)">
                <img src="./images/lapiz.png"  alt="Editar"></img>
              </button>
            </td>
  
          </tr>
        </tbody>
      </template>
    </table>
  </div>    
 
          `,

  methods: {
    nuevoGracias: function () {
      if (this.agradecimiento.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'O nooooo...',
          text: 'Debes agregar algo que le guste para agradecer.',
        });
        return;
      }

      if (this.editGracias == null) {
        this.si = true;
        this.vacio = false;
        this.gracias.push({
          escritura: this.agradecimiento,
        });
        this.agradecimiento = "";
      } else {
        this.gracias[this.editGracias].escritura = this.agradecimiento;
        this.editGracias = null;
        this.agradecimiento = "";
      }

      // Guardar los datos en el local storage
      localStorage.setItem("gracias", JSON.stringify(this.gracias));

      // Mostrar el mensaje de agradecimiento y preguntar si desea agregar algo más
      Swal.fire({
        icon: 'success',
        title: '¡Gracias por agregar algo lindo a la pagina!',
        text: '¿Desea agregar algo más?',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          // El cliente desea agregar algo más
        } else {
          // El cliente no desea agregar más
        }
      });
    },

    eliminar: function (escrito) {
      this.gracias.splice(escrito, 1);

      // Actualizar los datos en el local storage
      localStorage.setItem("gracias", JSON.stringify(this.gracias));
    },

    editar: function (escrito) {
      this.agradecimiento = this.gracias[escrito].escritura;
      this.editGracias = escrito;
    },
  },
});