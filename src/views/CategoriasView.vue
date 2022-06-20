<template>
    <section class="container">
        <img class="logo" src="../assets/logo.png" alt="Logo do Pet Now">
        <h1 class="titulo">Categorias</h1>
        <Navegacao class="nav" />
    </section>
</template>

<script>
import Navegacao from '@/components/Navegacao.vue'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Categorias',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Navegacao
    },
}
</script>

<style scoped>
.container {
    text-align: center;
}

.logo {
    width: 30%;
}

.nav {
    border-radius: 35px;
    background-color: #30C6A9;
}
</style>