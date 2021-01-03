<template>
    <div class="row">
      <div class="col-12">
        <card class="col-md-4 mx-auto">
          <h4 class="card-title ">Login or Create Account</h4>
          <p class="card-category">Get personalized results based on the cards in your wallet.
          </p>
          <br>
          <div class="card-body">
            <form @submit.prevent>
              <div class="form-group">
                <label for="email">Email address:</label>
                <fg-input type="email"
                          id="email"
                          v-model="email"
                          @keyup.enter.native="login">
                </fg-input>
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <fg-input type="password"
                          id="password"
                          v-model="password"
                          @keyup.enter.native="login">
                </fg-input>
              </div>
              <p-button type="info"
                        block
                        @click.native.prevent="login">
                Login
              </p-button>
            </form>
            <div class="col-md-12">
              <br>
              <a target="_blank" href="https://themify.me/">Forgot Password</a>
            </div>
            <hr/>
            <p-button type="success"
                      block
                      @click.native.prevent="create_account">
              Create Account
            </p-button>
            <br>
          </div>
        </card>
      </div>
    </div>
</template>

<style lang="scss">
</style>

<script>
import {Button as PButton} from '@/components'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  components: {
  PButton
},

  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .catch(err => {
          console.log(err)
        })
    },
    create_account () {
      this.$router.push({ name: 'register' });
    }
  }
}
</script>
