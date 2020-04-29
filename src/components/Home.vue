<template>
  <div class="view">
    <div class="wrapper">
      <div class="progress">
        <el-progress :percentage="$store.state.percent" ></el-progress>
      </div>
      <div class="setting">
        <el-button class="btn" type="primary" icon="el-icon-setting">settings</el-button>
      </div>
      <div class="main"></div>
      <div class="control">
        <el-button class="btn" circle size="medium" @click="_play">
          <i class="iconfont icon-bofang"></i>
        </el-button>
        <el-button class="btn" circle size="medium">
          <i class="iconfont icon-zanting"></i>
        </el-button>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      testNum: 10,
    }
  },
  methods: {
    _play() {
      console.log("ok")    
    },
  }
}
</script>

<style scoped>
  @import url("https://at.alicdn.com/t/font_1791024_xgqtkfmw2i.css");
  .view {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    width: 80%;
    height: 80%;
    display: grid;
    grid: 1fr 5fr 1fr / 1fr 5fr 1fr;
    grid-template-areas: ". progress setting"
                         ". main ."
                         ". control ."
  }
  .wrapper>div {
    /* border: 1px solid rgb(0, 0, 0, 0.3); */
  }
  .progress {
    grid-area: progress;
    /* background-color: pink; */
    align-self: end;
    text-align: center;
  }
  .setting {
    grid-area: setting;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .setting>.btn {
    width: 8rem;
    height: 3rem;
    font-size: 1.2rem;
    text-align: center;
  }
  .main {
    grid-area: main;
    background-color: skyblue;
    background: url("~assets/image/fftq.jpg");
    background-size: cover;
    border-radius: 1rem;
  }
  .control {
    grid-area: control;
    text-align: center;
  }
  .control>.btn {
    margin-top: 1.5rem;
    width: 5rem;
    height: 5rem;
    
    /* background-color: red; */
  }
  .iconfont {
    font-size: 2rem;
  }
</style>