<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Details from './components/Details.vue'
import data from './assets/data.json'

import { reactive, ref } from 'vue'

const productInfo = reactive(data)
const selectedVariant = ref(data.variants[0])
</script>

<template>
  <div>
    <Header />
    <main>
      <!-- wrapper -->
      <div class="container">
        <!-- 1ère colonne -->
        <div>
          <img
            :src="selectedVariant.image.url"
            :alt="selectedVariant.image.alt"
          />
        </div>
        <!-- 2ème colonne -->

        <Details
          :productInfo="productInfo"
          :selectedVariant="selectedVariant"
        />
        <!-- le composant Details remplace l'ancienne structure qui a été transféré dans Details -->
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  display: flex;
  height: calc(
    100vh - var(--header-top-heigth) - var(--header-bottom-heigth) -
      var(--footer-heigth)
  );
}
.container > div {
  width: 50%;
  border: 1px solid green;
}
.container > div:last-child {
  padding: 25px 0 25px 100px;
}
.container > div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 25px;
  /* border: 1px solid red; */
}
/* la suite du CSS a été tranféré dans le composant Details */
</style>
