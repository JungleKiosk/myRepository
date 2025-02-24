<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import projectsData from "../data/data_projects.json";

export default {
    name: "Home",
    data() {
        return {
        }
    },
    setup() {
        const projects = ref(projectsData);
        const router = useRouter();
        return {
            projects,
            router,
        };
    }
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
                                <h1 id="intro-title" class="display-1 txt_glow text-center">{{ $t('home.title') }}</h1>
                                <hr class="mt-4">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- test dist -->
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-3 text-center m-3" v-for="project in projects" :key="project.id">
                        <div class="card txt_glow cardlink project-card shadow-sm h-100">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">{{ project.num_tutorial }}</h5>
                                <p class="card-text">{{ project.description }}</p>
                                <a :href="project.link" target="_blank" class="btn btn_link mt-auto txt_glow">View project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider></Slider>
                
            </div>
        </section>
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