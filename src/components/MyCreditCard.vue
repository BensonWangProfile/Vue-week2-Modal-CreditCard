<script>
export default {
  props: {
    show: Boolean
  }
}
</script>
<template lang="">
  <div class="modal" v-if="show">
    <div class="navbar flex-row">
      <h3>Edit Payment Method</h3>
      <button @click="$emit('close')">X</button>
    </div>
    <form action="">
      <div class="flex-row">
        <label for="number-card">Card number</label>
        <slot name="card-number">
          <!-- <input class="card-input" type="text" id="number-card" /> -->
        </slot>
      </div>
      <div class="flex-row">
        <label for="number-card">Expiration</label>
        <slot name="card-expiration">
          <input class="card-input" type="text" id="number-card" />
        </slot>
      </div>
      <div class="flex-row">
        <label for="number-card">CVC</label>
        <slot name="card-cvc">
          <input class="card-input" type="text" id="number-card" />
        </slot>
      </div>
      <div class="flex-row">
        <label for="number-card">Name</label>
        <slot name="card-name">
          <input class="card-input" type="text" id="number-card" />
        </slot>
      </div>
    </form>
  </div>
</template>
<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
label {
  color: #797d8e;
}
.modal {
  margin: 0 auto;
  margin-top: 30px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 30px;
}
.card-input {
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px 10px;
}
</style>
