<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns">

            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
import axios from 'axios';
const tableColumns = ["id", "name"];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      table1: {
        title: "All Credit Cards",
        subTitle: "Full list of business and personal credit cards.",
        columns: [...tableColumns],
        data: null
      }
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/bank")
      .then(response => {
        this.table1.data = response.data;
      }).catch(error => {console.log(error);});
  }
};
</script>
<style>
</style>
