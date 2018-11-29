<template >
  <div class="wrapper">
    <div class="main" style="text-align: center;">
      <img src="static/img/banner.png"/>
    </div>
    <div class="row btn-area">
      <div class="col-lg-6 put-right">
        <a @click="showVideo = true"><img src="static/img/btn-start.png" alt="開始遊戲"></a>
      </div>
      <div class="col-lg-6 ">
        <a  href="/doanswer"><img src="static/img/btn-finish.png" alt="解謎完成"></a>
      </div>
    </div>
    <modal v-if="showVideo" :width="'100%'" :height="'80%'" :bgColor="'black'" @maskClick="showVideo = false">
      <!-- <div slot="container-top">
        <button type="button" class="close"
                @click="showVideo = false">
          <span aria-hidden="true" style="font-size: 40px;">&times;</span>
        </button>
      </div> -->
      <div slot="body" class="video" style="height: 100%;text-align:center">
        <!-- <iframe id="ytplayer" type="text/html" width="720" height="405" :src="videoSrc"
        frameborder="0" allowfullscreen ></iframe> -->
        <video width="100%" height="100%" controls autoplay>
          <source src="https://www.dropbox.com/s/l6a0gpy3fl3l2q9/2013-03-26%2010.00.52.mp4" type="video/mp4">
        </video>
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
      videoSrc: 'https://www.youtube.com/embed/M7lc1UVf-VE'
    }
  },
  watch: {
    showVideo () {
      if (this.showVideo) {
        this.videoSrc = this.videoSrc + 'autoplay=1&mute=1'
      }
    }
  },
  filters: {

  },
  methods: {
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
