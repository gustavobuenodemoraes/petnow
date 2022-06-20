<template>
    {{ pets }}
    <a class="" href="/">&lt;</a>
    <section class="container">
        <h1 class="titulo">Meu Pet</h1>
        <img class="avatar-pet" :src="require('@/assets/' + pet.avatarPet)" alt="" />
        <InformcacaoMeuPet :pet="pet"></InformcacaoMeuPet>
    </section>
</template>

<script>
import InformcacaoMeuPet from '@/components/InformcacaoMeuPet.vue'
import dadosPets from '@/mock/mock.json'
export default {
    data() {
        return {

        }
    },
    name: "MeuPet",
    components: {
        InformcacaoMeuPet
    }, computed: {
        pet() {
            return dadosPets.find(pet => pet.id == this.$route.params.id)
        }
    }
} 
</script>

<style scoped>
a {
    color: #30C6A9;
    font-size: 2rem;
    margin-left: 20px;
}

.container {
    text-align: center;
}

.avatar-pet {
    border-radius: 50%;
    width: 30%;
    height: 30%;
    position: relative;
    top: 4rem;
}
</style>