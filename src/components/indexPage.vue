<template >
  <div class="wrapper">
    <div class="main" style="text-align: center;">
      <img src="static/img/banner.png"/>
    </div>
    <div class="row btn-area">
      <div class="col-lg-6 put-right">
        <a class="btn-link" @click="showVideo = true"><img src="static/img/btn-start.png" alt="開始遊戲"></a>
      </div>
      <div class="col-lg-6 ">
        <a class="btn-link" @click="goAnswer"><img src="static/img/btn-finish.png" alt="解謎完成"></a>
      </div>
    </div>
    <modal v-if="showVideo" :width="'100%'" :height="'100%'" @maskClick="showVideo = false">
      <div slot="body" class="video" style="height: 100%;text-align:center">
        <div class="row " style="text-align: left;margin-bottom: 25px;margin-top:15px;">
          <div class="col-md-4">
            <a class=" btn-link" @click="showVideo = false"><img class="back-btn-img" src="static/img/back-index.png" alt="回首頁" style="width: 50%;"></a>
          </div>
        </div>
        <iframe :src="videoSrc" frameborder="0" allowfullscreen style="height: 85%"></iframe>
        <div style="margin-bottom: 150px;">

        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import topBanner from './comps/topBanner'
import Modal from './Modal/Modal'

export default {
  name: 'index-page',
  components: {
    topBanner,
    Modal
  },
  data () {
    return {
      showVideo: false,
      videoSrc: 'https://www.youtube.com/embed/QZgadYdWAmc'
    }
  },
  watch: {
    showVideo () {
      if (this.showVideo) {
        this.videoSrc = this.videoSrc + '?autoplay=1&rel=0'
      }
    }
  },
  filters: {

  },
  methods: {
    goAnswer () {
      this.$router.push('doanswer')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/main.scss';
.main {
  padding: 8% 0% 5% 0%;
  img {
    width: 70%;
  }
}
.btn-area {
  // background-color: red;
  padding-bottom: 5%;
  img {
    max-width: 50%;
  }
}
iframe {
  /* optional */
  width: 100%;
  height: 100%;
}
</style>
