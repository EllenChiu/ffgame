<template>
  <div class="wrapper">
    <div class="row topLine">
      <div class="col-md-4">
        <a class="top-link btn-link" @click="goIndex"><img class="back-btn-img" src="static/img/back-index.png" alt="回首頁"></a>
      </div>
      <div class="col-md-4 title-area">
        <img class="title-img" src="static/img/quest-title.png"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'top-banner',
  props: {
  },
  methods: {
    goIndex () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.top-link {
  margin-left: 20px;
}
.back-btn-img {
  width: 45%;
  margin-bottom: 3%;
}
.title-area {
  text-align: center;
}
.title-img {
  width: 105%;
}
a{
  color: #57595a;
  text-decoration: none;
  &:hover, :active {
    color: #989898;
    text-decoration: none;

  }
}
.btn-a-div {
  // border-radius: 10px;
  border-bottom: 3px solid #333;
  padding: 5px 8px;
}
</style>
