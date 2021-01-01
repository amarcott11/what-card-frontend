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
const tableColumns = ["", "Card", "Bank", "Type", "Category", "Business/Personal"];
const tableData = [
  {
    id: 1,
    card: "Sapphire Preferred",
    bank: "Chase",
    type: "",
    category: "Oud-Turnhout"
  },
  {
    id: 2,
    card: "Minerva Hooper",
    bank: "$23,789",
    type: "Curaçao",
    category: "Sinaai-Waas"
  },
  {
    id: 3,
    card: "Sage Rodriguez",
    bank: "$56,142",
    type: "Netherlands",
    category: "Baileux"
  },
  {
    id: 4,
    card: "Philip Chaney",
    bank: "$38,735",
    type: "Korea, South",
    category: "Overland Park"
  },
  {
    id: 5,
    card: "Doris Greene",
    bank: "$63,542",
    type: "Malawi",
    category: "Feldkirchen in Kärnten"
  }
];

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
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>
