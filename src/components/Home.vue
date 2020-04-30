<template>
  <div class="view">
    <div class="wrapper">
      <div class="progress">
        <el-progress :percentage="$store.state.percent" :format="format"></el-progress>
      </div>
      <div class="setting">
        <el-button class="btn" type="primary" icon="el-icon-setting" @click="_goSettings">settings</el-button>
      </div>
      <div class="main"></div>
      <div class="control">
        <el-button v-if="isPlay" class="btn" circle size="medium" @click="_pause" :disabled="!$store.state.percent">
          <i class="iconfont icon-zanting"></i>
        </el-button>
        <el-button v-else class="btn" circle size="medium" @click="_play">
          <i class="iconfont icon-bofang"></i>
        </el-button>
        <el-button class="btn" circle size="medium" @click="_refresh">
          <i class="iconfont icon-huanyuan-shuaxin"></i>
        </el-button>
        <audio v-if="!$store.state.percent" src="~assets/audio/xch.mp3" autoplay></audio>
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
      isPlay: false,
    }
  },
  methods: {
    format(percentage) {
      return `${parseInt(percentage)}%`;
    },
    _play() {
      console.log("play ok")
      this.isPlay = !this.isPlay    
      this.$store.dispatch("_playA")
      this.$store.state.testNum --
      console.log("--------", this.$store.state.testNum)
    },
    _pause() {
      console.log("pause ok")
      this.isPlay = !this.isPlay    
      clearInterval(this.$store.state.timerIdP)
    },
    _refresh() {
      console.log("refresh ok")
      this.isPlay = false
      clearInterval(this.$store.state.timerIdP)
      this.$store.commit("_freshM")
    },
    _goSettings() {
      this.$router.push("/settings")
    }
  },
  mounted() {
    // this.audio = new Audio()
    // this.audio.src = "~assets/audio/xch.wav"
    // console.log(this.audio)
    // this.audio = audio
  }
}
</script>

<style scoped>
  @import url("https://at.alicdn.com/t/font_1791024_xgqtkfmw2i.css");
  @import url("~assets/css/Home.css");
</style>