export default function (defalutData) {
  return {
    data() {
      return {
        datas: defalutData,
        loading: true,
      };
    },
    async created() {
      this.datas = await this.fatchData();
      this.loading = false;
    },
  };
}
