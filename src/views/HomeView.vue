<script>
import Slider from "../components/partials/SliderVue.vue";
import Cards from "../components/Cards.vue";
import Tools from "./Tools.vue";


export default {
    name: "Home",
    data() {
        return {
        }
    },
    components: {
        Slider, Cards, Tools
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`../assets/img/cards/${name}`, import.meta.url).href;
        },
    },
}
</script>

<template>
    <main class="mt-5">
        <Cards></Cards>
        <Slider></Slider>
        <Tools></Tools>
    </main>
</template>

<style scoped>


.icon_social {
    width: 10%;
}

.card {
    border-radius: 15px;
}


.project-card .card-body {
    display: flex;
    flex-direction: column;
}

/* Stile di default per display-1 */
#intro-title {
    font-size: calc(1.375rem + 1.5vw);
}

/* Modifica a display-4 per dispositivi mobili */
@media (max-width: 786px) {
    #intro-title {
        font-size: calc(1rem + 8vw);
    }
}

/* Modifica a display-3 per laptop */
@media (min-width: 787px) and (max-width: 1199px) {
    #intro-title {
        font-size: calc(1.25rem + 3vw);
    }
}

/* Modifica a display-1 per schermi grandi */
@media (min-width: 1200px) {
    #intro-title {
        font-size: calc(1.375rem + 3vw);
    }
}
</style>