<template>
  <main>
      <div class="flex flex-col items-center gap-2 relative max-w-6xl h-fit">
          <h1 class="text-foreground pb-2">Your ip</h1>
          <p class="text-foreground">{{ip}}</p>
      </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  components: { },
  data() {
    return {
      ip: ''
    }
  },
  methods: {

  },
  mounted() {
    axios.get('https://api.ipify.org?format=json').then(res => {
      this.ip = res.data.ip
    })
  }
}
</script>