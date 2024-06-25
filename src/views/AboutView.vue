<script setup>
import { ref, onMounted } from 'vue';
import Footer from '../components/FooterVue.vue';

const introVisible = ref(false);
const textToShow = ref('');
const introText = "Hi, I'm FRA";
const typingDelay = 80; // Milliseconds between each character

onMounted(() => {
    setTimeout(() => {
        introVisible.value = true;
        startTyping();
    }, 300);
    setTimeout(() => {
        borderVisible.value = true;
    }, 300 + introText.length * typingDelay);
});

function startTyping() {
    let index = 0;
    const typingInterval = setInterval(() => {
        textToShow.value += introText[index];
        index++;
        if (index >= introText.length) {
            clearInterval(typingInterval);
        }
    }, typingDelay);
}
</script>


<template>
    <main>
        <section id="about">
            <div class="container my-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-12 col-lg-8 bg_intro rounded-4 py-5 my-2 align-content-center">
                        <h1 class="txt_initial" :class="{ 'typing': introVisible }">
                            <strong><span class="colored-yellow">{{ textToShow.slice(0, 7) }}</span></strong><span
                                class="txt_fra">{{ textToShow.slice(7) }}</span>
                        </h1>
                        <br>
                        <p class="fade-in" v-if="introVisible">
                            I have a master's degree in Planning and Management of Agro-Territorial, Forest and Landscape:

                            <a href="https://corsi.unibo.it/2cycle/LandscapePlanningManagement" class=""
                                target="_blank"><span class="txt_thin">
                                    PROGESA</span></a>
                            <br>
                            The study program contributes to the pursuit of the <br>
                            UN 2030 Agenda for
                            <a href="https://www.un.org/sustainabledevelopment/" class="" target="_blank"><span
                                    class="txt_thin" target="_blank">Sustainable
                                    Development Goals.</span> </a> <br>
                        </p>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="circle">
                            <div class="inner-circle">
                                <div class="border_rotate_over1"></div>
                                <img class="fade-in" src="../assets/img/me-no-bkg.png" alt="">
                            </div>
                            <div class="border_rotate_2"></div>
                            <div class="border_rotate_3"></div>
                            <div class="border_rotate_4"></div>
                            <div class="border_rotate_5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
</template>


<style scoped>
img {
    width: 100%;
}

</style>