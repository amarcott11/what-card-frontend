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
                <span class="text-danger" v-if="errors.email">
                  {{ errors.email[0] }}
                </span>
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <fg-input type="password"
                          id="password"
                          v-model="password"
                          @keyup.enter.native="login">
                </fg-input>
                <span class="text-danger" v-if="errors.password">
                  {{ errors.password[0] }}
                </span>
                <span class="text-danger" v-if="incorrect">
                  {{ 'Incorrect email or password combination.' }}
                </span>
              </div>
              <p-button type="info"
                        block
                        @click.native.prevent="login">
                Login
              </p-button>
            </form>
            <div class="col-md-12">
              <br>
              <a target="_blank" href="/password-reset">Forgot Password</a>
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
      password: '',
      incorrect: false,
      errors: []
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
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          if (error.response.status === 404) {
            this.incorrect = true;
            this.errors = []
          }
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            this.incorrect = false;
          }
          if (error.response.status === 500) {
            this.errors = error.response.data.errors;
            this.incorrect = false;
          }
        })
    },
    create_account () {
      this.$router.push({ name: 'register' });
    }
  }
}
</script>
