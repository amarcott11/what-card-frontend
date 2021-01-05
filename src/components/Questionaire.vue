<template>
  <card title="Questionaire"
        sub-title="Answer these questions for more targeted results.">
    <div class="col-8 mx-auto">
      <card title="Question 1">
        <div class="text-center">
          <p>Are you looking to earn points/miles?</p>
          <div class='row'>
            <div class='col-6 mx-auto'>
              <p-button type="info"
                block
                @click.native.prevent="login">
                Yes
              </p-button>
              <p-button type="info"
                block
                @click.native.prevent="login">
                No
              </p-button>
            </div>
          </div>
        </div>
      </card>
    </div>
  </card>
</template>
<script>
export default {
  name: "questionaire",
  questions: [
    {
      id: 1,
      msg: "Are you interested in points/miles instead of cashback?"
    },
    {
      id: 2,
      msg: "Are you interested in business credit cards?"
    },
    {
      id: 3,
      msg: "Is your credit score over 720?"
    },
    {
      id: 4,
      msg: "Have you opened more than 5 cards in the last 2 years?"
    },
    {
      id: 5,
      msg: "Are you okay with applying for credit cards that have annual fees?"
    },
    {
      id: 6,
      msg: "Thank you! Your card suggestions will change based on your preferences. Would you like to restart the questionaire?"
    },

  ],
  props: {

  },
  computed: {

  },
  methods: {

  }
};
</script>
<style>
</style>
