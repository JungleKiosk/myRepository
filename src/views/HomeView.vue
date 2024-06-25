<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Footer from '../components/FooterVue.vue'

import projectsData from "../data/data_projects.json";

export default {
    name: "Home",
    data() {
        return {
        }
    },
    components: {
        Footer
    },
    setup() {
        const projects = ref(projectsData);
        const router = useRouter();
        return {
            projects,
            router,
        };
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href;
        },
    },
}
</script>

<template>
    <main>
        <section class="jumbotron">
            <div class="container">
                <div class="row justify-content-center mb-3">
                    <div class="col-12 text-center">
                        <img src="../assets/img/fw_logo.svg" class="text-center" alt="">
                    </div>
                    <div class="col-12 col-lg-12 align-content-center introduce">
                        <div class="jumbotron p-5 mb-4 rounded-3">
                            <div class="container py-5">
                                <h1 id="intro-title" class="display-1">My Repository
                                </h1>
                                <p class="lead">
                                    Welcome to the collection of my projects dedicated to environmental, agronomic,
                                    forestry and hydrogeological analysis. <br> Using tools such as QGIS, GRASS, Python,
                                    RStudio, and Google Earth Engine, these projects aim to provide innovative solutions
                                    for land and natural resource management analysis.
                                </p>
                                <hr class="my-4">
                                <p>Explore the projects to discover how geospatial technologies can be applied to
                                    address environmental challenges and improve the sustainability of natural
                                    resources.</p>
                                <a class="btn btn-primary btn-lg" href="#projects" role="button">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center text-center">
                    <div :to="`/project/${project.id}`" class="col-12 col-lg-8" v-for="project in projects"
                        :key="project.id" @click="router.push(`/project/${project.id}`)">
                        <div class="card rounded-5 my-4 bg-dark shadow_cards text-white">
                            <div class="card-body">
                                <h5 class="text-center">{{ project.num_tutorial }}</h5>
                                <h1 class="card-title">{{ project.name }}</h1>
                                <p class="card-text">{{ project.desc_card }}</p>
                            </div>
                            <!-- <img :src="getImagePath(project.image)" alt="project image" class="img_cards rounded-bottom-5" /> -->
                        </div>

                    </div>
                </div>


            </div>
        </section>
    </main>
    <Footer></Footer>
</template>

<style scoped>
.img_card {
    width: 50%;
}

.eurostat_logo {
    width: 50%;
}

.icon_social {
    width: 10%;
}

/* Stile di default per display-1 */
#intro-title {
    font-size: calc(1.375rem + 1.5vw);
    /* display-1 */
}

@media (max-width: 786px) {

    /* Modifica a display-4 per dispositivi mobili */
    #intro-title {
        font-size: calc(1rem + 1.2vw);
        /* display-4 */
    }
}

@media (min-width: 787px) and (max-width: 1199px) {

    /* Modifica a display-3 per laptop */
    #intro-title {
        font-size: calc(1.25rem + 3vw);
        /* display-3 */
    }
}

@media (min-width: 1200px) {

    /* Modifica a display-1 per schermi grandi */
    #intro-title {
        font-size: calc(1.375rem + 3vw);
        /* display-1 */
    }
}
</style>
