<template>
  <div>
      <vue-particles
        color="#222831"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#30475e"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      
      </vue-particles>
        <div id="main">
        <Main/>
      </div>
  </div>
</template>

<script>

export default {
    components:{
        Main: () => import("@/components/play/Main.vue")
    },
    methods:{
    }
};
</script>

<style scoped>
div {
  height: 100%;
  width: 100%;
  position: fixed;
}
#main{
    position: absolute;
    right: 0.5%;
}
</style>