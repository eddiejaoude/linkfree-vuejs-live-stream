<template>
  <router-link :to="{ name: 'userList' }">Go Back</router-link>
  <h2>{{ user.name }}</h2>
  <p>{{ user.bio }}</p>

  <a v-for="link in user.links" :href="link.url" :key="link.icon">
    <Chip
      :label="link.name"
      :icon="`pi pi-${link.icon}`"
      class="mr-2 mb-2"
      :style="{ 'backgroundColor': getLinkColor(link.icon.toLowerCase()) }"
    />
  </a>

  <Timeline :value="user.milestones" align="alternate" class="customized-timeline">
    <template #marker="slotProps">
      <span class="custom-marker shadow-2">
        <i :class="`pi pi-${slotProps.item.icon.toLowerCase()}`"></i>
      </span>
    </template>
    <template #content="slotProps">
      <Card>
        <template #title>{{ slotProps.item.title }}</template>
        <template #subtitle>{{ slotProps.item.date }}</template>
        <template #content>
          <p>{{ slotProps.item.description }}</p>
        </template>
      </Card>
    </template>
  </Timeline>
</template>

<script>
import Chip from 'primevue/Chip'
import Timeline from 'primevue/Timeline'
import Card from 'primevue/Card'

export default {
  components: {
    Chip,
    Timeline,
    Card,
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getLinkColor(iconName) {
      const colorLookup = {
        github: 'green',
        youtube: 'red',
        twitter: 'lightblue',
      }
      return colorLookup[iconName]
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

<style lang="sass" scoped>
a
  text-decoration: none
</style>
