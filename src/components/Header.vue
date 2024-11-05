<script setup>
const props = defineProps({ cart: { type: Array, required: true } })
</script>
<template>
  <header>
    <div class="header-top">
      <div class="container">
        <p>Essayez d'abord, <span>payez après</span></p>
        <p>LIVRAISON & RETOUR <span>GRATUITS*</span></p>
        <p>Retour et <span>remboursement</span></p>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <nav>
          <a>Femme</a>
          <a>Homme</a>
          <a>Enfant</a>
        </nav>

        <img src="../assets/imgs/logo_zalendo.svg" alt="" />
        <nav>
          <font-awesome-icon :icon="['far', 'user']" />
          <font-awesome-icon :icon="['far', 'heart']" />
          <font-awesome-icon :icon="['fas', 'shopping-bag']" />
          <!-- Pastille affichant le nombre d'article dans le panier -->
          <p class="num-of-product">{{ cart.length }}</p>
        </nav>
      </div>
    </div>
  </header>
</template>
<style scoped>
.header-top {
  background-color: var(--light-grey);
}
.header-top .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-top-heigth);
  color: var(--dark-grey);
  font-size: 12px;
}
span {
  color: var(--main-orange);
}
.header-bottom {
  border-bottom: 3px solid #d0d1d3;
}
.header-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-bottom-heigth);
}
img {
  width: 155px;
  cursor: pointer;
}

nav {
  /* border: 1px solid red; */
  flex: 1;
  gap: 10px;
  display: flex;
}

nav:last-of-type {
  /* border: 1px solid red; */
  justify-content: flex-end;
  position: relative; /* <==== 👈 ICI complément de style existant */
}

nav a {
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
}
nav a:first-child {
  /* border: 1px solid red; */
  background-color: var(--main-black);
  color: white;
}
svg {
  color: var(--main-black);
  padding: 10px;
  border: 2px solid white;
  box-sizing: content-box;
  cursor: pointer;
}
svg:hover {
  border: 2px solid var(--main-black);
}
.num-of-product {
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: var(--main-orange);
  padding-top: 1px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
