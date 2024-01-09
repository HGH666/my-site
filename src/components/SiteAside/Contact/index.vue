<template>
  <div class="contact-container">
    <ul>
      <li>
        <a>
          <Icon type="github" />
          <span>不觉南风</span>
        </a>
        <div class="qrcode">
          <img
            src="http://mdrs.yuanjin.tech/img/20201130165641.gif"
            style="zoom: 40%"
          />
        </div>
      </li>
      <li>
        <a href="mailto:23423424234@qq.com">
          <Icon type="mail" />
          <span>739041588@qq.com</span>
        </a>
        <div class="qrcode">
          <img src="http://mdrs.yuanjin.tech/img/20201130165641.gif" />
        </div>
      </li>
      <li>
        <a
          href="tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
        >
          <Icon type="qq" />
          <span>739041588</span>
        </a>
        <div class="qrcode">
          <img src="http://mdrs.yuanjin.tech/img/20201130165641.gif" />
        </div>
      </li>
      <li>
        <a class="weixin">
          <Icon type="weixin" />
          <span>739041588</span>
        </a>
        <div class="qrcode">
          <img src="http://mdrs.yuanjin.tech/img/20201130165641.gif" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  name: "Contact",
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@height: 30px;
ul {
  padding: 20px 30px;
  color: @gray;
  li {
    position: relative;
    margin: 25px 0;
    a {
      display: block;
      height: @height;
      line-height: @height;
      cursor: pointer;
      font-size: 14px;
      .icon-container {
        font-size: 26px;
        vertical-align: sub;
      }
      span {
        padding-left: 10px;
      }
    }
    &:hover {
      .qrcode {
        transform: scaleY(1);
      }
    }
    .qrcode {
      position: absolute;
      left: 5px;
      bottom: @height + 10px;
      background-color: #fff;
      padding: 12px;
      border-radius: 5px;
      transform-origin: bottom center;
      transition: 0.2s;
      transform: scaleY(0);
      img {
        display: block;
        width: 150px;
        height: 150px;
      }
      &::before {
        position: absolute;
        height: 10px;
        width: 10px;
        background-color: #fff;
        bottom: -5px;
        display: block;
        content: "";
        transform: rotate(45deg);
        left: 50%;
        margin-left: -5px;
      }
    }
  }
}
</style>
