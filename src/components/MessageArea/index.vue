<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" /> 
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list"></DataList>
  </div>
</template>

<script>
import DataForm from "./DataForm"
import DataList from "./DataList"
export default {
  name:"MessageArea",
  props:{
    title: String,
    subTitle: String,
    list: {
      type: Array,
      default: () => [],
    },
    listLoading: Boolean
  },
  components:{
    DataForm,
    DataList
  },

  data(){
    return {

    }
  },
  methods:{
  }
}
</script>

<style>

</style>