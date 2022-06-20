<template>
    <section class="templete-meupet">
        <p class="dados-pet">{{pet.nomePet}} - {{pet.idade}} anos</p>
        <ul class="container">
            <li class="info-pet-item">
                <img src="../assets/icon/gps.png" alt="">
                <p>{{pet.peso}} kgs</p>
            </li>
            <li class="info-pet-item">
                <img src="../assets/icon/Vector.png" alt="">
                <p>{{pet.raca}}</p>
            </li>
            <li class="info-pet-item">
                <img src="../assets/icon/Union.png" alt="">
                <p>{{pet.cor}}</p>
            </li>
        </ul>
        <div class="agendamentos">
            <Agendamentos :agenda="pet.agenda" />
        </div>
    </section>
</template>

<script>
import Agendamentos from './Agendamentos.vue'

export default {
    data() {
        return {};
    },
    name: "InformcacaoMeuPet",
    components: { Agendamentos },
    props: ['pet']
}
</script>

<style scoped>
.templete-meupet {
    background: #30C6A9;
    padding-top: 5rem;
}

.container {
    display: flex;
    padding-left: 0px;
    justify-content: space-around;
}

.dados-pet {
    color: white;
    width: 100%;
    font-size: 32px;
}

.info-pet-item {
    font-family: 'Roboto';
    font-style: normal;
    font-size: 20px;
    color: #FFFFFF;
}

.agendamentos {
    background: #FFFFFF;
    width: 90%;
    margin-left: 5%;
}
</style>