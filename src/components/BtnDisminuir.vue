AQUI VAMOS A VER COMO PASAR LAS FUNCIONES COMO PARAMETROS
COMO VEMOS, ESTAMOS PASANDOLE A LA ACCIONDISMINUIR UN PARAMETRO CON UN NUMERO 50
VAMOS A VER EL STORE, EN LA PARTE DE ACTIONS

<template>
  <button @click="accionDisminuir(50)">Disminuir</button>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    methods: {
        ...mapActions(['accionDisminuir'])
    }
}
</script>
