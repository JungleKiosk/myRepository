<script>
import Footer from '../components/FooterVue.vue'

export default {
    name: "Home",
    data() {
        return {
        }
    },
    components: {
        Footer
    }
}


</script>


<template>
    <main>
        <section class="jumbotron">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-12 text-center mt-5">
                        <img src="../assets/img/fw_logo.svg" class="text-center" alt="">
                    </div>
                    <div class="col-12 col-lg-8 bg_row_img py-5 my-2 align-content-center introduce">

                        <h1>Home</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima aliquid tempora,
                            dicta a officia, maiores nam beatae dolore, quos officiis libero. Tempora eligendi deleniti
                            similique quibusdam excepturi minima natus.</p>

                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer></Footer>
</template>

<style>
.img_card {
    width: 50%;
}

.eurostat_logo {
    width: 50%;
}

.icon_social {
    width: 10%;
}


@media (max-width: 786px) {
    .icon_social {
        width: 20%;
    }
}
</style>