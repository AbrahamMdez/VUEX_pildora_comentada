<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- ESTA NO ES LA MEJOR FORMA, LA FORMA ADECUADA DE HACERLO ES MAPEANDO LA TIENDA -->
    <!-- <h1>Mi contador: {{ $store.state.contador }}</h1> -->




    <!-- Vamos a realizar una operación, que nos diga si contador es mayor a 100, se pinte en verde y si es mejor en rojo -->
    <!-- Recordar decir que si le ponemos al style los :, se convierte en una etiqueta dinamica v-bind -->
    <!-- ESTA ES OTRA FORMA MAS TEDIOSA, MEJOR HACERLO DESDE LA PROPIEDAD COMPUTADA -->
    <!-- VER COLORCONTADOR() -->
    <!-- <h1
      :style="[contador > 100 ? {'color': 'green'} : {'color': 'red'}]"
    >Mi contador: {{ contador }}</h1>
  </div>
 -->
  <h1
      :style="colorContador"
    >Mi contador: {{ contador }}</h1>

    <!-- VER COMO FUNCIONA E IR DESPUES A LA TIENDA A ENSEÑAR COMO SE DEBE DE HACER LA OPERACIÓN DESDE LA TIENDA, DESDE LAS ACCIONES -->
    <!-- <button @click="incrementar">AUMENTAR</button> -->

    <!-- METODO CORRECTO -->
    <button @click="accionIncrementar">AUMENTAR</button>

    <BtnDisminuir />
  </div>
</template>

<script>
import BtnDisminuir from '../components/BtnDisminuir'
//Importamos el estado que nos viene de STORE y el state SIEMPRE se mapea desde una propiedad computada, IR A COMPUTED
//importamis mutations, que nos viene de STORE. Las mutaciones se mapean en los metodos VER METHODS. IR A METHODS
//Importamos las Acciones, que nos vienen del STORE. Las acciones tambien se mapean desde los metodos VER METHODS. IR A METHODS
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    BtnDisminuir
  },

  computed: {
    //AQUÍ MAPEAMOS LA PROPIEDAD COMPUTADA CON EL SPREAD OPERATOR Y SE PONE ARRAY, 
    //PORQUE EN TEORIA SIEMPRE VAMOS A TENER MUCHOS ESTADOS EN UN PROYECTO
    ...mapState(['contador']),
    colorContador() {
      return [this.contador > 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },

  //Llamamos a metodo incrementar de nuestra tienda y vamos al boton que creamos en nuestro template con 
  //la accion @click y le pasamos el metodo incrementar. DESPUES VAMOS A VER NAVEGADOR PARA VER LA FUNCION
  methods: {
    ...mapMutations(['incrementar']),

    //Llamas a metodo accionIncrementar que nos viene de la tienda y se lo pasamos al boton.VAMOS AL BOTON A VER COMO SE COMPORTA
    ...mapActions(['accionIncrementar'])
  }
}
</script>
