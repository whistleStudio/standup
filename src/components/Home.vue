<template>
  <div class="view">
    <div class="wrapper">
      <div class="progress">
        <el-progress :percentage="$store.state.percent" :format="format"></el-progress>
      </div>
      <div class="setting">
        <el-button class="btn" type="primary" icon="el-icon-setting" @click="_set">setting</el-button>
      </div>
      <div class="main" :style="{backgroundImage: 'url('+backgroundImg[idx]+')', backgroundSize: 'cover'}"></div>
      <!-- <div class="main" style="background: url(require('../assets/image/fftq.jpg')); background-size: cover"></div> -->
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
        <!-- !$store.state.percent -->
        <audio v-if="!$store.state.percent" src="~assets/audio/bear.mp3"  autoplay  type="audio/mpeg"></audio>
      </div>
    </div> 
    <el-dialog
      title="设置"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false">	
      <div>
        <el-input placeholder="请输入数字" v-model="countdown" clearable>
          <template slot="prepend">倒计时(min)</template>
        </el-input>
      </div>    
      <span slot="footer" class="dialog-footer">
        <el-button @click="_cancel">取 消</el-button>
        <el-button type="primary" @click="_checkNum">确 定</el-button>
      </span>
    </el-dialog>
    <el-alert v-show="isShow"
      title="错误提示的文案"
      type="error"
      show-icon>
    </el-alert>      
  </div>
</template>

<script>
// const src = require("assets/audio/bear.mp3")
// const music = new Audio(src)
export default {
  name: "Home",
  data() {
    return {
      testNum: 10,
      isPlay: false,
      dialogVisible: false,
      countdown: 45,
      preCd: 0,
      isShow: false,
      imgIdx: 0,
      backgroundImg: [
        require("assets/image/home.png"),
        require("assets/image/fftq.jpg"),
        require("assets/image/rest.png")
      ],
      
    }
  },
  methods: {
    format(percentage) {
      return `${(parseFloat(percentage)/100*parseFloat(this.countdown)).toFixed(1)}m`;
    },
    _play() {
      // console.log("play ok")
      // music.play()
      this.imgIdx = 1
      this.isPlay = !this.isPlay    
      this.$store.dispatch("_playA", parseFloat(this.countdown)*60)
      this.$store.state.testNum --
      // console.log("--------", this.$store.state.testNum)
    },
    _pause() {
      // console.log("pause ok")
      this.isPlay = !this.isPlay    
      clearInterval(this.$store.state.timerIdP)
    },
    _refresh() {
      // console.log("refresh ok")
      this.imgIdx = 0
      this.isPlay = false
      clearInterval(this.$store.state.timerIdP)
      this.$store.commit("_freshM")
    },
    _set() {
      this.pre = this.countdown
      this.dialogVisible = true
    },
    _cancel() {
      this.countdown = this.pre
      this.dialogVisible = false
    },
    _checkNum() {
      var reg = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
      if (!reg.test(this.countdown)) {
         this.$message({
          message: '请输入一个正数',
          type: 'warning'
        });
      }else {
        this.$message({
          message: `设置成功 ${this.countdown} min`,
          type: 'success'
        });
        this.dialogVisible = false
        // this.$store.commit("_changeR", parseFloat(this.countdown))
      }
    }
  },
  computed: {
    idx: function() {
      if(this.$store.state.percent) return this.imgIdx
      else return 2
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
  @import url("https://at.alicdn.com/t/font_1791024_xgqtkfmw2i.css");
  @import url("~assets/css/Home.css");
</style>