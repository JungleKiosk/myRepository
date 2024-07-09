<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Footer from '../components/FooterVue.vue';
import Slider from "../components/SliderVue.vue";

import projectsData from "../data/data_projects.json";

export default {
    name: "Home",
    data() {
        return {
        }
    },
    components: {
        Footer, Slider
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
            return new URL(`../assets/img/cards/${name}`, import.meta.url).href;
        },
    },
}
</script>

<template>
    <main>
        <section class="jumbotron">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-12 align-content-center introduce">
                        
                        <div class="jumbotron p-5 rounded-3">
                            <div class="container">
                                <h1 id="intro-title" class="display-1 txt_glow">My Repository</h1>
                                <p class="lead">
                                    Welcome to the collection of my projects dedicated to environmental, agronomic,
                                    forestry and hydrogeological analysis. <br> Using tools such as QGIS, GRASS, Python,
                                    RStudio, and Google Earth Engine, these projects aim to provide innovative solutions
                                    for land and natural resource management analysis.
                                </p>
                                <hr class="mt-4">
                                <p>Explore the projects to discover how geospatial technologies can be applied to
                                    address environmental challenges and improve the sustainability of natural
                                    resources.</p>
                               <!-- <a class="btn btn-primary btn-lg" href="#projects" role="button">Read more</a> -->
                                <p class="text-center"> <br> <br>👇 Visit the links below and discover the projects 👇</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-3 col-lg-3 text-center m-3" v-for="project in projects" :key="project.id">
                        <a :href="project.link" target="_blank" class="btn">
                            <strong>{{ project.num_tutorial || project.title }}</strong>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    </main>
    <Slider></Slider>
    <Footer></Footer>
</template>

<style scoped>
.img_card {
    width: 30%;
}

.icon_social {
    width: 10%;
}

a {
    color: #00fbd5;;
    text-decoration:none;
}

a:hover {
    color: #fbff00;
    text-decoration:underline;
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
