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
            <draggable class="a_circle" v-model="food2Ans"
            v-bind:options="{ group: { name: 'Orders', put: true }, animation: 250 }" :move="allow">
              <div class="hiden_cicle" :style="food2Ans.length > 0 ? {backgroundImage: 'url(/static/food/' + food2Ans[0].name + '.png)'} : ''"></div>
            </draggable>
          </div>
          <div class="ansBlock" style="top: 20%;left:45%">
            <div class="ansTitle">
              中秋節
            </div>
            <draggable class="a_circle" v-model="food3Ans"
            v-bind:options="{ group: { name: 'Orders', put: true }, animation: 250 }" :move="allow">
              <div class="hiden_cicle" :style="food3Ans.length > 0 ? {backgroundImage: 'url(/static/food/' + food3Ans[0].name + '.png)'} : ''"></div>
            </draggable>
          </div>
          <div class="ansBlock" style="top: 0%;left:70%">
            <div class="ansTitle">
              端午節
            </div>
            <draggable class="a_circle" v-model="food4Ans"
            v-bind:options="{ group: { name: 'Orders', put: true }, animation: 250 }" :move="allow">
              <div class="hiden_cicle" :style="food4Ans.length > 0 ? {backgroundImage: 'url(/static/food/' + food4Ans[0].name + '.png)'} : ''"></div>
            </draggable>
          </div>
          <div class="ansBlock" style="top: 40%;left:20%">
            <div class="ansTitle">
              天穿日
            </div>
            <draggable class="a_circle" v-model="food5Ans"
            v-bind:options="{ group: { name: 'Orders', put: true }, animation: 250 }" :move="allow">
              <div class="hiden_cicle" :style="food5Ans.length > 0 ? {backgroundImage: 'url(/static/food/' + food5Ans[0].name + '.png)'} : ''"></div>
            </draggable>
          </div>
          <div class="ansBlock" style="top: 40%;left:70%">
            <div class="ansTitle">
              元宵節
            </div>
            <draggable class="a_circle" v-model="food6Ans"
            v-bind:options="{ group: { name: 'Orders', put: true }, animation: 250 }" :move="allow">
              <div class="hiden_cicle" :style="food6Ans.length > 0 ? {backgroundImage: 'url(/static/food/' + food6Ans[0].name + '.png)'} : ''"></div>
            </draggable>
        </div>
      </div>

      <div class="right-div">
        <draggable v-model="foodItems" v-bind:options="{ group: { name: 'Orders', pull: true } }" :move="allow">
          <div v-for="o in foodItems"
          v-bind:key="o.ans"
          class="q_circle"
          :style="{backgroundImage: 'url(/static/food/' + o.name + '.png)'}">
          </div>
        </draggable>
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
    <modal v-if="endVideo" :width="'100%'" :bgColor="'black'" @maskClick="backIndex">
      <div slot="body" class="video" style="height: 100%;text-align:center" >
        <iframe id="ytplayer" type="text/html" width="720" height="405" :src='videoSrc'
        frameborder="0" allowfullscreen ></iframe>
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
      dom: '',
      foodItems: [{
        name: '01',
        ans: 2,
        done: false
      }, {
        name: '02',
        ans: 3,
        done: false
      }, {
        name: '03',
        ans: 4,
        done: false
      }, {
        name: '04',
        ans: 5,
        done: false
      }, {
        name: '05',
        ans: 6,
        done: false
      }, {
        name: '06',
        ans: 7,
        done: false
      }, {
        name: '07',
        ans: 8,
        done: false
      }, {
        name: '08',
        ans: 9,
        done: false
      }, {
        name: '',
        ans: '',
        done: false
      }, {
        name: '09',
        ans: 10,
        done: false
      }, {
        name: '10',
        ans: 11,
        done: false
      }],
      food2Ans: [],
      food3Ans: [],
      food4Ans: [],
      food5Ans: [],
      food6Ans: [],
      check: {
        ym: '01',
        tc: '06',
        zq: '10',
        dw: '04',
        yx: '05'
      },
      corrected: false,
      endVideo: false,
      videoSrc: 'https://www.youtube.com/embed/M7lc1UVf-VE'
    }
  },
  watch: {
    foodItems () {
      if (this.foodItems.length === 6) {
        this.corrected = true
      }
    }
  },
  filters: {

  },
  methods: {
    showEndVideo () {
      this.corrected = false
      this.endVideo = true
    },
    backIndex () {
      const backIs = confirm('回到首頁?')
      if (backIs) {
        location.href = '/'
      }
    },
    // getdata (evt) {
    //   console.log(evt.draggedContext.element.id)
    // },
    // datadragEnd (evt) {
    //   console.log('拖动前的索引 :' + evt.oldIndex)
    //   console.log('拖动后的索引 :' + evt.newIndex)
    //   console.log(this.foodItems)
    // },
    allow (evt) {
      console.log(evt.draggedContext.index)
      console.log(evt.draggedContext.element)
      console.log(evt.draggedContext.futureIndex)
      console.log(evt.relatedContext.index)
      console.log(evt.relatedContext.element)
      console.log(evt.relatedContext.list)
      console.log(evt.relatedContext.component)
      // return (evt.draggedContext.element.name!== 'ziba')
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
.q_circle {
  height: 100px;
  width: 100px;
  border-radius: 99em;
  background-repeat: no-repeat;
  display: inline-block;
  margin: 3px;
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

</style>
