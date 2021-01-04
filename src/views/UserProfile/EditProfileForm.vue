<template>
  <card class="card" title="Edit Profile">
    <div>
      <form @submit.prevent>
        <div class="text-center">
          <p>What rewards are you looking for?</p>
        </div>
        <div class="text-center">
          <p>What cards do you prefer?</p>
        </div>
        <div class="text-center">
          <p>What is your credit score?</p>
        </div>
        <div class="text-center">
          <p>How many personal credit cards have you opened in the last 2 years?</p>
        </div>
        <div class="text-center">
          <p>Are cards with annual fees acceptable to you?</p>
        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="updateProfile">
            Update Profile
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: "Paper Dashboard",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
