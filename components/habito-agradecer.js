Vue.component("habito-agradecer", {
  data: function () {
    return {
      agradecimiento: "",
      vacio: true,
      gracias: [],
      editGracias: null,
    };
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
        this.si = false;
        return;
      }

      if (this.edit == null) {
        this.si = true;
        this.vacio = false;
        this.gracias.push({
          escritura: this.agradecimiento,
        });
        this.agradecimiento = "";
      } else {
        this.gracias[this.edit].info = this.agradecimiento;
        this.edit = null;
        this.agradecimiento = "";
      }
    },

    //Eliminar nota de agradecimiento
    eliminar: function (escrito) {
      this.gracias.splice(escrito, 1);
    },

    //Editar nota de agradecimiento
    editar: function (escrito) {
      this.agradecimiento = this.gracias[escrito].escritura;
      this.edit = escrito;
    },
  },
});
