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
    <div class="game">
      <!-- <div style="display: flex; justify-content: stretch; margin-top: 50px; margin-right: 50px">
        <div style="margin-left: 50px; flex: 1">
          <Container behaviour="copy" group-name="1" :get-child-payload="getChildPayload1">
            <Draggable v-for="item in items1" :key="item.id">
              <div class="draggable-item">
                {{item.data}}
              </div>
            </Draggable>
          </Container>
        </div>
        <div style="margin-left: 50px; flex: 1">
          <Container group-name="1" :get-child-payload="getChildPayload2" @drop="onDrop('items2', $event)">
            <Draggable v-for="item in foodItems1" :key="item.id">
              <div class="draggable-item">
                {{item.text}}
              </div>
            </Draggable>
          </Container>
        </div>
      </div> -->
      <div class=" row ans-area-div">
        <div class="left-div" style="position: relative;">
            <Container  group-name="1" :get-child-payload="getAns" @drag-end="allowDrop('ans', $event)">
              <Draggable  v-for="(item, keys) in ans" :key="keys">

                <div class="ansBlock" :style="{top: item.top, left: item.left}">
                  <div class=" ansTitle">
                    {{item.title}}
                  </div>
                  <div class="a_circle" >
                    <div class="hiden_cicle" id="ym" :style="ans[0].name !== '' ? {backgroundImage: 'url(static/img/' + ans[0].name + '.png)'} : ''"></div>
                  </div>
                </div>

                <!--  -->
              </Draggable>
            </Container>
        </div>
        <!--  right -->
        <div class="right-div">
          <div class="q_div">
            <Container behaviour="move" group-name="1" :get-child-payload="getChildPayload2" @drop="onDrop('foodItems1', $event)">
              <Draggable v-for="item in foodItems1" :key="item.ans">
                <div class="q_circle"
                :style="{backgroundImage: 'url(static/img/' + item.name + '.png)'}">
                </div>
              </Draggable>
            </Container>
          </div>
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
            <div class="col-md-5 end-pic">
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
import { Container, Draggable } from 'vue-smooth-dnd'
import Modal from './Modal/Modal'
import { generateItems } from '../api/helps'

export default {
  name: 'do-answer-page',
  components: {
    topBanner,
    Container,
    Draggable,
    Modal
  },
  data () {
    return {
      nowDrop: null,
      foodItems1: [{
        name: '01',
        text: '粢粑',
        key: '0',
        who: 'foodItems1',
        ans: 'ym',
        done: false
      }, {
        name: '02',
        text: '湯圓',
        who: 'foodItems1',
        ans: null,
        done: false
      }, {
        name: '03',
        text: '柿餅',
        who: 'foodItems1',
        ans: null,
        done: false
      }, {
        name: '04',
        text: '粄粽',
        who: 'foodItems1',
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
      ans: [{
        title: 'ym',
        name: '',
        top: '0%',
        left: '20%'
      }, {
        title: 'dw',
        name: '',
        top: '25%',
        left: '45%'
      }],
      // answer: ['ym', 'tc', 'moon', 'zq', 'dw', '']{
      //   ym: [],
      //   tc: [],
      //   moon: [],
      //   zq: [],
      //   dw: [],
      //   yx: []
      // },
      corrected: false,
      endVideo: false,
      videoSrc: 'https://youtu.be/XSYzXtbdWvw',
      score: 0,
      items1: generateItems(15, i => ({
        id: '1' + i,
        data: `Source Draggable - ${i}`
      })),
      items2: generateItems(15, i => ({
        id: '2' + i,
        data: `Draggable 2 - ${i}`
      })),
      items3: generateItems(15, i => ({
        id: '3' + i,
        data: `Draggable 3 - ${i}`
      }))
    }
  },
  watch: {
    score () {
      if (this.score === 5) {
        this.corrected = true
      }
    }
    // answer: {
    //   handler (ansArr) {
    //     // console.dir(ansArr)
    //     let nowScore = 0
    //     Object.keys(ansArr).map((key) => {
    //       const foodAns = ansArr[key].length > 0 ? ansArr[key][0].ans : ''
    //       if (foodAns === key) {
    //         nowScore += 1
    //       }
    //     })
    //     this.score = nowScore
    //   },
    //   deep: true
    // }
  },
  filters: {

  },
  methods: {
    shouldAcceptDrop (sourceContainerOptions, payload) {
      return true
    },
    allowDrop (collection, dropResult) {
      console.dir(dropResult)

      const res = dropResult.payload;
      // if(this[collection].ym)
      const who = res.who;
      const idx = res.key;
      this[who].splice(idx, 1)[0];
      // delete this[who][index];
      return this[collection][0].name = res.name;
      // const { removedIndex, addedIndex, payload } = dragResult
      // if (removedIndex === null && addedIndex === null) return arr
      // const result = [...arr];
      // let itemToAdd = payload;
      // if(itemToAdd.ans !== shouldANS) return false;
      //
      // if (removedIndex !== null) {
      //   itemToAdd = result.splice(removedIndex, 1)[0]
      // }
      //
      // if (addedIndex !== null) {
      //   result.splice(addedIndex, 0, itemToAdd)
      // }
      // return result
    },
    onDrop (collection, dropResult) {
      console.dir(collection)
      console.log(dropResult)
      // const { removedIndex, addedIndex, payload } = dragResult
      // if (removedIndex === null && addedIndex === null) return arr
      // if(payload.ans !== shouldANS) return false;
      // this[collection] = applyDrag(this[collection], dropResult)
    },
    getChildPayload2 (index) {
      console.log(index)
      console.dir(this.foodItems1[index])
      return this.foodItems1[index]
    },
    getAns (index) {
      return this.ans[index]
    },
    getChildPayload3 (index) {
      console.log(index)
      console.dir(this.foodItems2[index])
      return this.foodItems2[index]
    },
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
.smooth-dnd-container {
  position: initial;
}
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
  padding: 10% 0%;
  img {
    width: 100%;
    margin-left: 8%;
  }
}
.end-pic {
  img {
    width: 65%;
    margin-left: 25%;
    margin-top: 10%;
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
