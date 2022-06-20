<template>
    <h1>Agendamentos</h1>
    <section>
        <ul class="container">
            <li>
                <img src="../assets/icon/alimentacao.png" alt="">
                <p>{{ agenda.alimentacao }}</p>
            </li>
            <li>
                <img src="../assets/icon/banho.png" alt="">
                <p>{{ agenda.banhoTosa }}</p>
            </li>
            <li>
                <img src="../assets/icon/passeio.png" alt="">
                <p>{{ agenda.passeio }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    setup() {

    },
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Agendamentos",
    props: ['agenda']
}
</script>

<style scoped>
h1 {
    font-size: 24px;
    color: #057F68;
    text-align: center;
    padding: 3rem 0 0 0;
}

.container {
    display: flex;
    justify-content: space-around;
    padding-left: 0;
}
</style>