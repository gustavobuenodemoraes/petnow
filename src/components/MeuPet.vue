<template>
    <a>&lt;</a>
    <h1 class="titulo">Meu Pet</h1>

    <section class="dados-pet">
        <img src="" alt="">
        <p>Bangela - 7 anos</p>
        <ul class="container">
            <li class="item-dados">peso</li>
            <li class="item-dados">Raça</li>
            <li class="item-dados">Tipo</li>
        </ul>
        <section class="dados-agendamento">
            <h2>Agendamentos</h2>
            <p>Alimentação 13h - 20min</p>
            <p>Banho e Tosa 14/05/2022</p>
            <p>Passeio 19h </p>
        </section>
    </section>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    name: 'MeuPet'
}
</script>

<style scoped>
.dados-pet {
    background: #30C6A9;
    text-align: center;
    align-items: center;
}

.dados-agendamento {
    background: #ffffff;
    width: 90%;
}

.container {
    display: flex;
    justify-content: space-around;
}
</style>