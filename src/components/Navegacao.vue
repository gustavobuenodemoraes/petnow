<template>
    <nav class="teste">
        <ul class="container">
            <li class="item-navegacao">
                <a href="#/meupet">
                    <img src="../assets/meupet.png" alt="Saúde">
                    <p>Meu Pet</p>
                </a>
            </li>
            <li class="item-navegacao">
                <a href="#">
                    <img src="../assets/saude.png" alt="Saúde">
                    <p>Saúde</p>
                </a>
            </li>
            <li class="item-navegacao">
                <a href="#">
                    <img src="../assets/rotina.png" alt="Rotina">
                    <p>Rotina</p>
                </a>
            </li>
            <li class="item-navegacao">
                <a href="#">
                    <img src="../assets/dicas.png" alt="Dicas">
                    <p>Dicas</p>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navegacao'
}
</script>

<style scoped>
a {
    color: #ffffff;
    text-decoration: none;
}

ul {
    list-style-type: none;
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
}

.item-navegacao {
    text-align: center;
    padding: 2rem;
}

.item-navegacao p {
    justify-items: center;
    font-weight: bold;
    font-size: 32px;
    color: #057F68;
    margin: 10px 0 0 0;
}

.item-navegacao img {
    width: 100%;
}
</style>