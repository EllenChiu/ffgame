<template>
  <!-- 元宵節｜新丁粄
天穿日｜炸年糕
義民節｜粢粑
中秋節｜南瓜
五月節｜粄粽

咖啡色色碼： #663F38
字型：思源明體 -->
  <div class="wrapper">
    <top-banner></top-banner>
    <div class="put-center title">
      <!-- <h4>請配對正確的美食</h4> -->
    </div>
    <div class=" row ans-area-div">
      <div class="left-div" style="position: relative;">
          <div class="ansBlock" style="top: 0%;left:20%">
            <div class=" ansTitle">
              義民祭
            </div>
            <draggable class="a_circle" v-model="answer.ym"
            v-bind:options="{ group: { name: 'Orders', put: true, pull: false }, animation: 250, }">
              <!-- {{answer.ym[]}} -->
              <div class="hiden_cicle" id="ym" :style="answer.ym.length > 0 ? {backgroundImage: 'url(static/img/' + answer.ym[0].name + '.png)'} : ''"></div>
              <!-- <div class="hiden_cicle" :style="{backgroundImage: 'url(static/img/' + answer.ym[0].name + '.png)'}"></div> -->
            </draggable>
          </div>
          <div class="ansBlock" style="top: 25%;left:45%">
            <div class="ansTitle">
              中秋節
            </div>
            <draggable class="a_circle" v-model="answer.moon"
            v-bind:options="{ group: { name: 'Orders', put: true, pull: false }, animation: 250 }">
              <div class="hiden_cicle" id="moon" :style="answer.moon.length > 0 ? {backgroundImage: 'url(static/img/' + answer.moon[0].name + '.png)'} : ''"></div>
            </draggable>
          </div>
          <div class="ansBlock" style="top: 0%;left:70%">
            <div class="ansTitle">
              端午節
            </div>
            <draggable class="a_circle" v-model="answer.dw"
            v-bind:options="{ group: { name: 'Orders', put: true, pull: false }, animation: 250 }">
              <div class="hiden_cicle"  id="dw" :style="answer.dw.length > 0 ? {backgroundImage: 'url(static/img/' + answer.dw[0].name + '.png)'} : ''"></div>
            </draggable>
          </div>
          <div class="ansBlock" style="top: 48%;left:20%">
            <div class="ansTitle">
              天穿日
            </div>
            <draggable class="a_circle" v-model="answer.tc"
            v-bind:options="{ group: { name: 'Orders', put: true, pull: false }, animation: 250 }">
              <div class="hiden_cicle" id="tc" :style="answer.tc.length > 0 ? {backgroundImage: 'url(static/img/' + answer.tc[0].name + '.png)'} : ''"></div>
            </draggable>
          </div>
          <div class="ansBlock" style="top: 48%;left:70%">
            <div class="ansTitle">
              元宵節
            </div>
            <draggable class="a_circle" v-model="answer.yx"
            v-bind:options="{ group: { name: 'Orders', put: true, pull: false }, animation: 250 }">
              <div class="hiden_cicle" id="yx" :style="answer.yx.length > 0 ? {backgroundImage: 'url(static/img/' + answer.yx[0].name + '.png)'} : ''"></div>
            </draggable>
        </div>
      </div>

      <div class="right-div">
        <div class="q_div">
          <draggable v-model="foodItems1" v-bind:options="{ group: { name: 'Orders', pull: true } }" :move="allow" >
            <div v-for="o in foodItems1"
            v-bind:key="o.ans"
            class="q_circle"
            :style="{backgroundImage: 'url(static/img/' + o.name + '.png)'}">
            </div>
          </draggable>
        </div>
        <div class="q_div">
          <draggable v-model="foodItems2" v-bind:options="{ group: { name: 'Orders', pull: true } }" :move="allow">
            <div v-for="o in foodItems2"
            v-bind:key="o.ans"
            class="q_circle"
            :style="{backgroundImage: 'url(static/img/' + o.name + '.png)'}">
            </div>
          </draggable>
        </div>
        <div class="q_div mrleft">
          <draggable v-model="foodItems3" v-bind:options="{ group: { name: 'Orders', pull: true } }" :move="allow">
            <div v-for="o in foodItems3"
            v-bind:key="o.ans"
            class="q_circle"
            :style="{backgroundImage: 'url(static/img/' + o.name + '.png)'}">
            </div>
          </draggable>
        </div>

      </div>
    </div>
    <modal v-if="corrected" :width="'800px'">
      <div slot="body" >
        <div class="end-modal-area">
          <div class="row">
            <div class="col-md-7 end-text">
              <img src="static/img/popup-text.png" alt="">
            </div>
            <div class="col-md-5 put-right end-pic">
              <img src="static/img/popup-grandpa.png"/>
            </div>
          </div>
          <div class="put-center">
            <a @click="showEndVideo">
              <img class="back-btn-img" src="static/img/btn-story.png" alt="看故事">
            </a>
          </div>
        </div>
      </div>
    </modal>
    <modal v-if="endVideo" :width="'100%'" :height="'100%'">
      <div slot="body" class="video" style="height: 100%;text-align:center">
        <div class="row" style="text-align: left;margin-bottom: 25px;">
          <div class="col-md-4">
            <a class=" btn-link" @click="backIndex">
              <img class="back-btn-img" src="static/img/back-index.png" alt="回首頁" style="width: 50%;">
            </a>
          </div>
        </div>
        <iframe :src="videoSrc" frameborder="0" allowfullscreen style="height: 85%"></iframe>
        <div style="margin-bottom: 100px;">

        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import topBanner from './comps/topBanner'
import draggable from 'vuedraggable'
import Modal from './Modal/Modal'

export default {
  name: 'do-answer-page',
  components: {
    topBanner,
    draggable,
    Modal
  },
  data () {
    return {
      foodItems1: [{
        name: '01',
        text: '粢粑',
        ans: 'ym',
        done: false
      }, {
        name: '02',
        text: '湯圓',
        ans: null,
        done: false
      }, {
        name: '03',
        text: '柿餅',
        ans: null,
        done: false
      }, {
        name: '04',
        text: '粄粽',
        ans: 'dw',
        done: false
      }],
      foodItems2: [{
        name: '05',
        text: '新丁粄',
        ans: 'yx',
        done: false
      }, {
        name: '06',
        text: '炸年糕',
        ans: 'tc',
        done: false
      }, {
        name: '07',
        text: '封肉',
        ans: '',
        done: false
      }, {
        name: '08',
        text: '粄條',
        ans: null,
        done: false
      }],
      foodItems3: [{
        name: '09',
        text: '擂茶',
        ans: null,
        done: false
      }, {
        name: '10',
        text: '南瓜',
        ans: 'moon',
        done: false
      }],
      answer: {
        ym: [],
        tc: [],
        moon: [],
        zq: [],
        dw: [],
        yx: []
      },
      corrected: false,
      endVideo: false,
      videoSrc: 'https://www.youtube.com/embed/M7lc1UVf-VE',
      score: 0
    }
  },
  watch: {
    score () {
      if (this.score === 5) {
        this.corrected = true
      }
    },
    answer: {
      handler (ansArr) {
        // console.dir(ansArr)
        let nowScore = 0
        Object.keys(ansArr).map((key) => {
          const foodAns = ansArr[key].length > 0 ? ansArr[key][0].ans : ''
          if (foodAns === key) {
            nowScore += 1
          }
        })
        this.score = nowScore
      },
      deep: true
    }
  },
  filters: {

  },
  methods: {
    showEndVideo () {
      this.corrected = false
      this.endVideo = true
      if (this.endVideo) {
        this.videoSrc = this.videoSrc + '?autoplay=1'
      }
    },
    backIndex () {
      this.$router.push('/')
    },
    checked (target) {
      if (target.length > 1) {
        target.pop()
      }
    },
    allow (evt, tObj) {
      if (evt.draggedContext.element.ans !== tObj.target.id) {
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../assets/scss/main.scss';

.pd50 {
  padding: 50px;
  // margin: 0px 10px;
}
.game-items {
  min-width: 100px;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  padding: 5%;

  &.pick {
    border: 1px solid #ccc;
    background-color: #d8d0d0;
  }
  &.answer {
    border: 1px solid #ccc;
    margin: 10px;
  }
}
.area > div {
  border: 1px solid #ccc;
  padding: 5px;
}
.q_div {
  // width: 90%;
  &.mrleft {
    margin-left: 105px;
  }
}
.q_circle {
  height: 95px;
  width: 95px;
  margin: 5px;
  border-radius: 99em;
  background-repeat: no-repeat;
  display: inline-block;
  background-size: 100%;
  background-position: center center;
}
.a_circle {
  border: 2px solid #663F38;
  border-radius: 99em;
  height: 100px;
  width: 100px;
  display: inline-block;
}
.hiden_cicle {
  height: 95px;
  width: 95px;
  border-radius: 99em;
  background-repeat: no-repeat;
  background-size: 105%;
  background-position: center center;
}
.ansBlock {
  display: inline-block;
  position:absolute;
}
.ansTitle {
  text-align: center;
}
.ans-area-div {
  padding: 40px 0px;
}
.left-div {
  display:inline-block;
  border-right: 1px solid #663F38;
  width: 50%;
  margin-right:1px;
  // height: 600px;
  padding-left: 3%;
  position: relative;
  padding: 30% 0% 10% 0%;
}
.right-div {
  display: inline-block;
  // height: 600px;
  border-left: 1px solid #663F38;
  width: 48%;
  margin-left: 10px;
  padding-left: 3%;
}
.end-text {
  padding: 13% 2%;
  img {
    width: 100%;
  }
}
.end-pic {
  img {
    width: 80%;
  }
}
.end-modal-area {
  padding: 2%;
  background: #f9f1d6;
}
iframe {
  /* optional */
  width: 100%;
  height: 100%;
}
</style>
