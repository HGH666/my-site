<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar src="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" />
    </div>
    <h1 class="title">不觉南风</h1>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
export default {
  name: "SiteAside",
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>

<style lang="less" scoped>
.site-aside-container {
  background-color: #000;
  padding: 50px 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .avatar {
    text-align: center;
  }
  .title {
    color: #fff;
    margin: 20px 0;
    text-align: center;
  }
}
</style>
