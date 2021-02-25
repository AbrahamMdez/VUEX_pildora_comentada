import { createStore } from 'vuex'

export default createStore({
  //Desde aquí crearemos los state, que podrán ser llamados desde cualquier componenete o vista de nuestro proyecto.
  state: {
    contador: 80
  },
  //Un state solo podra ser cambiado por el action, mediante una mutración, 
  //un action no puede alterar el stado de un state directamente
  //SE HACE ASÍ PARA TENER LA LOGICA EN ESTE ARCHIVO COMUN, QUE PUEDA SER ACCESIBLE DESDE CUALQUIER COMPONENTE DE NUESTRO PROYECTO
  mutations: {
    //En las mutaciones se pasa como parametro el STATE y despues decimos que state queremos modificar
    //RECORDAR VER ESTE EJEMPLO PARA VER COMO FUNCIONA, PERO QUE SE DEBE DE HACER UNA MUTACION DESDE LAS ACCIONES,
    //LAS MUTACIONES SOLO TIENEN LA FUNCIONALIDAD, SON LAS ACCIONES LAS QUE ACCIONAN LAS MUTACIONES
    incrementar(state) {
      state.contador = state.contador + 10
    },
    //ESTA ACCION LA VEMOS CUANDO CREAMOS UN NUEVO COMPONENTE LLAMADO BTNDISMINUIR Y LA ACTIVAMOS
    //DESDE LA ACCIONDISMINUIR. IR A VER ACCION DISMINUIR EN EL ACTION
    disminuir(state) {
      state.contador = state.contador - 10
    }
    /* ESTO ES PARA EL EJEMPLO DEL COMPONENETE BTNDISMINUIR */
    /* disminuir(state, payload) {
      state.contador = state.contador - payload
    } */
  },
  //Las acciones son las que ejecutan las mutaciones, para poder modificar un estado, y se hace pasandole en los paremtros el COMMIT
  //UN COMMIT LO QUE HACE ES EJECUTAR LAS MUTACIONES
  actions: {
    //Llamamos a la funcion accionincrementar, que mediante el commit ejecutará la mutacion incrementar
    accionIncrementar({ commit }) {
      //Aqui le pasamos la mutacion incrementar
      commit('incrementar')
    },

    //Llamamos a la mutacion disminuir, que se ejecutará mediante el commit IR A VER EL COMPONENETE BTNDISMINUIR
    accionDisminuir({ commit }) {
      commit('disminuir')
    }

    /* ESTO ES UN EJEMPLO PARA EL COMPONENETE BTNDISMINUIR */
    /* accionDisminuir({ commit }, numero) {
      commit('disminuir', numero)
    } */
  },
  modules: {
  }
})
