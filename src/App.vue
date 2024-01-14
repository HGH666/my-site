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
    <ScrollTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ScrollTop from '@/components/ScrollTop';
export default {
  name: "App",
  components: { Layout, SiteAside,ScrollTop },
};
</script>

<style lang="less" scoped>
.app-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.aside {
  width: 250px;
  height: 100vh;
}
</style>
