<script>
import { ref, watchEffect, onMounted } from "vue";
import { imgProj } from "../../data/img_proj";

export default {
    props: {
        getImagePath: Function,
    },
    setup() {
        const currentIndex = ref(0);
        let timer = null;

        const startSlider = () => {
            timer = setInterval(() => {
                currentIndex.value = (currentIndex.value + 1) % imgProj.length;
            }, 2000); // Ogni 4 secondi
        };
        onMounted(() => {
            startSlider();
        });
        watchEffect(() => {
            return () => {
                clearInterval(timer);
            };
        });

        return {
            imgProj,
            currentIndex,
        };
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`../../assets/img/logo/${name}`, import.meta.url).href;
        },
    },
};
</script>

<template>
    <div class="text-center">
        <h1>my Stack</h1>
        <div class="slider-container">
            <div ref="slider" class="slider m-5">
                <div
                    class="slide"
                    v-for="(imgproj, index) in imgProj"
                    :key="imgproj.id"
                    :style="{ transform: `translateX(-${currentIndex * 100}%)`, opacity: currentIndex === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }">

                    <div class="image-container">
                        <img :src="getImagePath(imgproj.img)" alt="stack">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    max-width: 100%;
    height: 200px;
}

.slider-container {
    position: relative;
    overflow: hidden;
    max-width: 100%;
}

.slider {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    flex: 0 0 100%;
}
.image-container {
    background-color: transparent;
}
</style>