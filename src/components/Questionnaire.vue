<template>
  <card title="Questionnaire"
        sub-title="Answer these questions for more targeted results.">
    <survey :survey="survey" />
  </card>
</template>
<script>
import * as Survey from "survey-vue";
import { mapState } from 'vuex'
import "survey-vue/survey.css";

export default {
  name: 'questionnaire',
  data() {
    const json = { questions: [
      {
        "type": "boolean",
        "name": "q1",
        "title": "Please answer the question",
        "label": "Are you interested in points/miles instead of cashback?",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "q2",
        "title": "Please answer the question",
        "label": "Are you interested in business credit cards?",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "q3",
        "title": "Please answer the question",
        "label": "Is your credit score over 720?",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "q4",
        "title": "Please answer the question",
        "label": "Have you opened more than 5 cards in the last 2 years?",
        "isRequired": true
      },
      {
        "type": "boolean",
        "name": "q5",
        "title": "Please answer the question",
        "label": "Are you okay with applying for credit cards that have annual fees?",
        "isRequired": true
      },
    ]};
    const survey = new Survey.Model(json);
    return {
      survey: survey,
    };
  },
  computed: {
  ...mapState({
      user: 'user'
    })
  },
  mounted () {
    this.survey.onComplete.add(function(survey, user) {
      console.log(survey.data);
      console.log(user.data);
    });
  }
};
</script>
<style>
</style>
