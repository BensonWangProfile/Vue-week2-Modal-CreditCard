<script>
// SweetAlert
import swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  methods: {
    basic() {
      swal.fire('click')
    },
    toast(content) {
      swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        title: content
      })
    }
  }
}
</script>

<template>
  <main>
    <button type="button" @click="basic">click</button>
    <button type="button" @click="toast('success')">Toast</button>
  </main>
</template>
