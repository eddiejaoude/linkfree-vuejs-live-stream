<template>
  <div>User Profile</div>
  <div>{{ user }}</div>
</template>

<script>
// 
export default {
  data() {
    return {
      user: {}
    }
  },
  async mounted() {
    const username = this.$route.params.username
    const res = await fetch(`/data/${username}.json`)
    const user = await res.json()
    this.user = user
  }
}
</script>
