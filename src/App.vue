<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
export default {
  name: "App",
  components: { Layout, SiteAside },
};
</script>

<style lang="less" scoped>
.aside {
  width: 250px;
  height: 100vh;
}
</style>
