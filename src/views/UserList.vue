<template>
  <div>User List</div>
  <div v-for="user in users" :key="user.username">
    <router-link :to="`/users/${user.username}`">
      <Chip :label="user.username" class="mr-2 mb-2" />
    </router-link>
  </div>
</template>

<script>
import Chip from 'primevue/Chip'

export default {
  components: {
    Chip
  },
  data() {
    return {
      users: []
    }
  },
  async mounted() {
    const res = await fetch('/data/list.json')
    const users = await res.json()
    this.users = users
  }
}
</script>
