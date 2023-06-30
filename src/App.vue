<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { autoSize } from "@/util/autoSize";
export default {
  name: "App",
  // 监听resize事件
  data() {
    return {
      innerWidth: window.innerWidth
    }
  },
  created() {
    document.title = 'OLYEX';
  },
  mounted() {
    this.$nextTick(function () {
      window.dispatchEvent(new Event('resize'));
    });
  },
  watch: {
    innerWidth: {
      handler(newVal, oldVal) {
        // console.log(111, newVal, oldVal, window.innerWidth);
        window.addEventListener("resize", () => {
          autoSize();
        });

      },
      immediate: true,  // handler will be called immediately upon the watcher being created
      deep: true  // watch nested data changes
    }
  }

};
</script>
<style lang="less">
body,
p,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  list-style: none;
}

body {
  position: relative;
  width: 120rem;
  background: #101124;
  color: #fff;
  background-image: url("./assets/webBackground.png") ;
}

* {
  font-family: "roman";
}

a {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 768px) {
  body{
    background-image: url("./assets/移动端-背景图.png") !important;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
</style>
