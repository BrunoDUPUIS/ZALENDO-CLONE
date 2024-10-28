<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  productInfo: { type: Object, Required: true },
  selectedVariant: { type: Object, Required: true },
})
const isVariantSoldOut = sizes => {
  for (const key in sizes) {
    if (sizes[key] > 0) {
      return false
    }
  }
  return true
}

const emit = defineEmits({ changeSelectedVariant: null })

const handleEmitNewVariant = variant => {
  const isSoldOut = isVariantSoldOut(variant.sizes)

  if (!isSoldOut) {
    emit('changeSelectedVariant', variant)
  }
}
</script>
<template>
  <div>
    <h2>{{ productInfo.brand }}</h2>
    <h1>{{ productInfo.name }}</h1>
    <p>{{ productInfo.price }} € <span>TVA incluse</span></p>

    <div class="rate">
      <font-awesome-icon :icon="['fas', 'star']" size="lg" />
      <font-awesome-icon :icon="['fas', 'star']" size="lg" />
      <font-awesome-icon :icon="['fas', 'star']" size="lg" />
      <font-awesome-icon :icon="['fas', 'star']" size="lg" />
      <font-awesome-icon :icon="['fas', 'star-half-alt']" size="lg" />
      <span>{{ productInfo.rate }}</span>
    </div>
    <!-- COULEURS -->
    <p>
      Couleur : <span class="selectedColor">{{ selectedVariant.color }}</span>
    </p>
    <!-- PETITES IMAGES -->
    <div class="img-bloc">
      <img
        v-for="variant in productInfo.variants"
        :src="variant.image.url"
        :alt="variant.image.alt"
        :key="variant.id"
        :class="{
          selectedImg: selectedVariant.id === variant.id,
          outOfStock: isVariantSoldOut(variant.sizes),
        }"
        @click="handleEmitNewVariant(variant)"
      />
    </div>
    <!-- ADVISE -->
    <p class="advise">
      Nous vous recommandons de choisir une taille au-dessus de celle
      habituelle.
    </p>
    <!-- SIZE BLOC -->
    <div class="sizes-bloc">
      <div
        v-for="(quantity, size) in selectedVariant.sizes"
        :key="size"
        :class="{ outOfStock: quantity === 0 }"
      >
        {{ size }}
      </div>
    </div>

    <div class="cart-bloc">
      <button>Ajouter au panier</button>
      <div>
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
/* La balise 'p' se trouvant immediatement après la balise 'h1' */
h1 + p {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 25px;
}
h1 + p span {
  color: var(--dark-grey);
  font-size: 14px;
  font-weight: lighter;
}
/* RATE BLOC */
.rate {
  margin-bottom: 40px;
}
.rate svg {
  margin-right: 3px;
}
/* COULEURS */
.selectedColor {
  font-weight: bold;
}
/* PETITES IMAGES */
.img-bloc {
  margin: 10px 0;
  display: flex;
  gap: 10px;
}
.img-bloc > img {
  width: 60px;
  height: 70px;
  object-fit: cover;
}
.selectedImg {
  border: 2px solid black;
}
/* SIZE BLOC */
.sizes-bloc {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.sizes-bloc > div {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  padding-top: 2px;
  cursor: pointer;
}
.outOfStock {
  opacity: 0.5;
}

/* ADVISE */
.advise {
  background-color: var(--light-grey);
  padding: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: lighter;
  margin-bottom: 10px;
}
/* CART BLOC */
.cart-bloc {
  display: flex;
  gap: 10px;
}
.cart-bloc button {
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  background-color: var(--main-black);
  color: #fff;
  flex: 1;
  border: none;
  cursor: pointer;
}
.cart-bloc button:hover {
  opacity: 0.7;
}
.cart-bloc div {
  width: 50px;
  height: 50px;
  border: 1px solid var(--main-black);
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-bloc div:hover {
  border-width: 3px;
}
.cart-bloc svg {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
