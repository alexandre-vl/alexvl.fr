<template>
    <main>
        <NavBar />
        <RouterView />
        <Footer />
    </main>
</template>

<script>
import NavBar from '@/components/landing/NavBar.vue'
import Footer from '@/components/landing/Footer.vue'
export default {
    components: {
        NavBar, Footer
    }
}
</script>