<template type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask"
         :class="classObj"
         @click.self="$emit('maskClick')">
      <div class="modal-wrapper" @click.self="$emit('maskClick')">
        <div class="modal-container" :style="styleObj">
          <slot name="container-top">

          </slot>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <!-- <div class="modal-footer" :class="hideClass">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">關閉</button>
            </slot>
          </div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    scroll: {
      type: Boolean,
      default: () => false
    },
    width: {
      type: String,
      default: () => '400px'
    },
    height: {
      type: String,
      default: () => ''
    },
    bgColor: {
      type: String,
      default: () => '#fff'
    },
    maxWidth: {
      type: String,
      default: () => ''
    },
    addClass: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    styleObj () {
      const custStyle = {
        width: this.width,
        height: this.height,
        'background-color': this.bgColor
      }

      if (this.maxWidth) {
        Object.assign(custStyle, { 'maxWidth': this.maxWidth })
      }

      return custStyle
    },
    classObj () {
      const addClass = []

      if (this.scroll) {
        addClass.push('scroll')
      }

      return [...addClass, ...this.addClass]
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  &.scroll {
    display: block;
    overflow-y: scroll;

    .modal-container {
      margin: 4em auto;
    }
    .modal-wrapper {
      display: block;
      width: 100%;
    }
  }

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 400px;
  margin: 0px auto;
  padding: 10px;
  // background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 3px 0;
  height: 100%;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
