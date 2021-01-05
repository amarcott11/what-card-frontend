<template>
  <card class="card" title="Edit Profile">
    <div>
      <form @submit.prevent>
        <div class="text-center">
          <p>Are you looking to earn points/miles?</p>
          <toggle-button :value="true"
               :labels="{checked: 'Yes', unchecked: 'No'}"/>
        </div>
        <div class="text-center">
          <p>Are you looking to earn cashback?</p>
          <toggle-button :value="true"
               :labels="{checked: 'Yes', unchecked: 'No'}"/>
        </div>
        <div class="text-center">
          <p>Are you looking for business credit cards?</p>
          <toggle-button :value="true"
               :labels="{checked: 'Yes', unchecked: 'No'}"/>
        </div>
        <div class="text-center">
          <p>Are cards with annual fees acceptable to you?</p>
          <toggle-button :value="true"
               :labels="{checked: 'Yes', unchecked: 'No'}"/>
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
