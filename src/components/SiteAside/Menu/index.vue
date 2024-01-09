<template>
  <div class="menu-container">
    <nav>
      <router-link
        :to="{ name: i.name }"
        class="item"
        v-for="i in items"
        :key="i.link"
        :exact="i.exact"
        active-class="selected"
      >
        <Icon :type="i.icon" />
        <span>{{ i.title }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Menu",
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: false,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: false,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
nav {
  color: @gray;
  margin: 24px 0;
  .item {
    display: block;
    padding: 0 30px;
    font-size: 14px;
    height: 40px;

    display: flex;
    align-items: center;
    cursor: pointer;
    .icon-container {
      font-size: 16px;
      width: 25px;
    }
    &.selected {
      background: darken(@words, 3%);
      color: @primary;
    }
  }
}
</style>
