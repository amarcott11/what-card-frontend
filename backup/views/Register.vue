<template>
  <div class="row">
    <div class="col-12">
      <card class="col-md-4 mx-auto">
        <h4 class="card-title col-md-4">Register</h4>
        <br>
        <div class="card-body">
          <form @submit.prevent>
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                id="name"
              />
              <span class="text-danger" v-if="errors.name">
                {{ errors.name[0] }}
              </span>
            </div>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="email"
              />
              <span class="text-danger" v-if="errors.email">
                {{ errors.email[0] }}
              </span>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="password"
              />
              <span class="text-danger" v-if="errors.password">
                {{ errors.password[0] }}
              </span>
            </div>
            <div class="form-group">
              <label for="password_confirmation">Confirm Password:</label>
              <input
                type="password"
                v-model="password_confirmation"
                class="form-control"
                id="password_confirmation"
              />
              <span class="text-danger" v-if="errors.password_confirmation">
                {{ errors.password_confirmation[0] }}
              </span>
            </div>
            <p-button
              type="success"
              block
              @click.native.prevent="register"
            >
              Create Account
            </p-button>
            <br>
          </form>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: []
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>
