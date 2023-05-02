<template>
  <div>
    <Loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      loader="dots"
      width="30px"
    />

    <label><input type="checkbox" v-model="fullPage" />Full page?</label>
    <button @click.prevent="doAjax">fetch Data</button>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  methods: {
    doAjax() {
      this.isLoading = true
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false
      }, 5000)
      console.log(import.meta.env.VITE_TEST)
    },
    onCancel() {
      console.log('User cancelled the loader.')
    }
  }
}
</script>
