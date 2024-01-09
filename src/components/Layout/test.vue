<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">left</div>
      </template>
      <template #main>
        <div class="main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          accusamus, quae dolor, eveniet accusantium illum, nisi distinctio
          ullam eligendi quidem dolorem odit cumque nam! Libero deleniti culpa
          assumenda animi architecto. Incidunt dignissimos soluta omnis dolorum
          aliquam, quod nihil dolores in molestias voluptate vero maxime alias
          autem impedit est? Magnam expedita eligendi odit eos quos nostrum
          eaque numquam nobis maiores autem. Asperiores dicta consequatur
          obcaecati nesciunt quibusdam quisquam sint quod repellat ducimus? Iure
          natus fugiat asperiores magnam cumque eligendi facilis reiciendis
          porro modi blanditiis, repellendus unde non beatae nobis delectus
          eius! Nesciunt, sed quod! Itaque obcaecati inventore, excepturi eum
          corrupti magni voluptatem, sequi natus saepe praesentium, quaerat cum
          quod perferendis aliquam illum voluptatibus reprehenderit facilis
          ipsa? Blanditiis iure atque veritatis porro? Illo dignissimos
          voluptates ut assumenda id eaque quam velit error sequi ea, porro,
          consectetur quisquam deserunt voluptate necessitatibus impedit
          suscipit fuga doloribus molestias qui laudantium corrupti natus
          cumque. Laudantium, perspiciatis.
        </div>
      </template>
      <template #right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less">
@import "~@/styles/global.less";
.test-container {
  width: 100vw;
  height: 100vh;
  .right {
    width: 250px;
    background-color: red;
  }
  .left {
    width: 250px;

    background-color: aqua;
  }
  .main {
    background-color: bisque;
    text-wrap: nowrap;
  }
}
</style>
