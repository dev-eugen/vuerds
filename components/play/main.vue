<template>
  <div>
    <Navbar :time="time" />
    <div class="con-colors">
      <ul>
        <vs-row :w="12" justify="center">
          <vs-col :w="12">
            <Cart :text="currentBox.ru" color="warning" />
          </vs-col>
          <vs-col id="cart" v-for="(i, index) in currentBox.en" :key="index" :w="12">
            <Cart @next="Next" :text="i" color="primary" />
          </vs-col>
        </vs-row>
      </ul>
    </div>
  </div>
</template>

<script>
import timer from "@/mixins/timer.js";
export default {
  layout: "play",
  components: {
    Navbar: () => import("./Navbar.vue"),
    Cart: () => import("@/components/play/cart.vue"),
  },
  data({ params }) {
    return {
      box: this.$nuxt.$route.params.name,
      currentTab: 1,
      answerArray: [],
    };
  },
  computed: {
    currentIndex(){
      let array = []
      for (let i = 0; i < this.box.length; i++) {
        array.push(i)
      }
      for (let i = 0; i < this.answerArray.length; i++) {
        for (let j = 0; j < array.length; j++) {
         if (array[j] == this.answerArray[i].index) {
           array.splice(1, j)
         }
      }
      }
      return array[this.random(array.length)]
    },
    currentBox() {
      let ruTab = 1;
      let enArr = [
        this.box[this.random(this.box)].en,
        this.box[enTab].en,
        this.box[enTab].en,
        this.box[enTab].en,
      ]

      return {
        ru: this.box[this.currentIndex].ru
      };
    },
  },
  mounted() {
    this.box = require("@/boxes/list/" + this.$nuxt.$route.params.name + ".js");
    this.box = this.box.default.words;
  },
  mixins: [timer],
  methods: {
    returnRuByEn(text) {
      for (let i = 0; i < this.box.length; i++) {
        if (this.box[i].en == text) {
          return this.box[i].ru;
        }
      }
    },
    returnIndexByEn(text) {
      for (let i = 0; i < this.box.length; i++) {
        if (this.box[i].en == text) {
          return i;
        }
      }
    },
    Next(text) {
      this.NextPush(text)
      currentTab++


    },
    NextPush(text){
      let push = 1;
      if(this.answerArray.length){
          for (let i = 0; i < this.answerArray.length; i++) {
        this.returnIndexByEn(text) === this.answerArray[i].index
          ? push = 0
          : push = 1
      }
      }
      
      if (push) {
        this.answerArray.push({
          ask: this.currentBox.ru,
          answer: text,
          success: this.currentBox.ru == this.returnRuByEn(text),
          index: this.returnIndexByEn(text),
        });
      }
    },
    random(x) {
      return Math.floor(Math.random() * Math.floor(x));
    },
  },
};
</script>

<style scoped>
div {
  top: 0px;
}

.con-colors ul {
  margin-left: -40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.con-colors li {
  display: block;
  position: relative;
  width: 70%;
  height: 90px;
  background: rgb(155, 250, 149);
  margin-bottom: 20px;
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  cursor: default;
}
</style>
