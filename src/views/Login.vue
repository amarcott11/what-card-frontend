<template>
  <div>
    <h1>Login</h1>
      <input type="email" name="email" v-model="email">
      <input type="password" name="password" v-model="password">
      <button type="submit">Login</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'profile' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
