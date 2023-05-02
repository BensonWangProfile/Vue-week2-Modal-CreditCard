<script>
import MyCreditCard from '../components/MyCreditCard.vue'
export default {
  data() {
    return {
      showModal: false,
      number: '123412341234',
      expiration: '04/24',
      cvc: '231',
      name: 'Benson',
      cardInfo: [
        {
          number: '123412341234',
          expiration: '04/24',
          cvc: '231',
          name: 'Benson'
        },
        {
          number: '43123213412',
          expiration: '04/24',
          cvc: '845',
          name: 'Ben'
        }
      ],
      selectedCardIndex: 0,
      filteredCardInfo: []
    }
  },
  components: { MyCreditCard },
  methods: {
    closeModal() {
      this.showModal = false
    },
    toggleModal(index) {
      this.showModal = !this.showModal
      this.filteredCardInfo = [this.cardInfo[index]]
    }
  }
}
</script>
<template>
  <div class="payment-setting">
    <h3 class="text-white">Payment setting</h3>
    <ul class="card-collection" v-for="(card, index) in cardInfo" :key="index">
      <li class="card-box" @click="toggleModal(index)">
        <div class="card-img">
          <img src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" />
        </div>
        <div class="card-info text-white">
          <p>{{ card.name }}</p>
          <p>{{ card.number }}</p>
        </div>
      </li>
    </ul>

    <!-- 目標：可以彈跳出卡片資訊、同步修改卡片資料 -->
    <MyCreditCard
      :show="showModal"
      @close="closeModal"
      v-for="(card, index) in filteredCardInfo"
      :key="index"
    >
      <template #card-number v-if="selectedCardIndex === index">
        <input type="text" class="card-input" v-model="card.number" />
      </template>
      <template #card-expiration>
        <input type="text" class="card-input" v-model="card.expiration" />
      </template>
      <template #card-cvc>
        <input type="text" class="card-input" v-model="card.cvc" />
      </template>
      <template #card-name>
        <input type="text" class="card-input" v-model="card.name" />
      </template>
    </MyCreditCard>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
}

.text-white {
  color: #fff;
}

.payment-setting {
  max-width: 80%;
  background: #2b2c30;
  border-radius: 20px;
  padding: 30px;
  position: relative;
}
.card-collection {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-box::before {
  content: '';
  background-color: #d1d4d6;
  opacity: 0.2;
  height: 80px;
  border-radius: 10px;
  position: absolute;
  left: -10px;
  right: -10px;
}
.card-box:hover::before {
  background-color: black;
  opacity: 0.5;
}
.card-box {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.card-img {
  max-width: 60px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
}

.card-input {
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px 10px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
