<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText type="text" v-model="search" placeholder="Search for user" />
  </span>
  <Dropdown
    v-model="typeFilter"
    :options="profileTypes"
    optionLabel="label"
    placeholder="Select a City"
  />

  <div>User List</div>
  <div v-for="user in filteredUsers" :key="user.username">
    <router-link :to="`/users/${user.username}`">
      <Chip :label="user.username" class="mr-2 mb-2" />
    </router-link>
  </div>
</template>

<script>
import Chip from 'primevue/Chip'
import InputText from 'primevue/InputText'
import Dropdown from 'primevue/dropdown'

export default {
  components: {
    Chip,
    InputText,
    Dropdown,
  },
  data() {
    return {
      users: [],
      search: '',
      typeFilter: {},
      profileTypes: [
        { label: 'personal', code: 'personal' },
        { label: 'community', code: 'community' },
      ],
    }
  },
  computed: {
    filteredUsers() {
      const users = this.users.filter((user) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase())
      }).filter((user) => {
        if (typeFilter.code === 'personal') {
        } else if (typeFilter.code === 'community') {

        }
        return true
      })

      return users
    },
  },
  async mounted() {
    const res = await fetch('/data/list.json')
    const users = await res.json()
    this.users = users
  }
}
</script>
