<template>
  <div class="telefone">

    <component :is="currentView" />

  </div>
</template>

<script>
import Categorias from './components/Categorias.vue'
import MeuPet from './components/MeuPet.vue'

const routes = {
  '/': Categorias,
  '/meupet': MeuPet
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
@import url(//db.onlinewebfonts.com/c/a1caf164c402a3fc938700d04f021d6d?family=Riffic+Free);

* {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
}

.titulo {
  font-family: 'Riffic Free';
  font-style: normal;
  color: #057F68;
}

.telefone {
  background: #F3F3F3;
  width: 428px;
  height: auto;
}
</style>
