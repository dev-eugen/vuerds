<template>
    <li :class="color" @click="click">
      {{ text }}
    </li>
</template>

<script>
export default {
  props: {
    color: String,
    text: String,
  },
  methods:{
    click(){
      this.$emit('next', this.text)
    }
  }
};
</script>

<style lang="css" scoped>
.primary {
  background: rgb(2, 117, 216) !important;
  box-shadow: 0px 15px 40px -10px rgba(2, 117, 216, 0.9);
}
.success {
  background: rgb(92, 184, 92) !important;
  box-shadow: 0px 15px 40px -10px rgba(rgb(92, 184, 92), 0.9);
}
.danger {
  background: rgb(217, 83, 79) !important;
  box-shadow: 0px 15px 40px -10px rgba(217, 83, 79, 0.9);
}
.warning {
  background: rgb(240, 173, 78) !important;
  box-shadow: 0px 15px 40px -10px rgba(240, 173, 78);
}
.dark {
  background: rgb(41, 43, 44) !important;
  box-shadow: 0px 15px 40px -10px rgb(41, 43, 44, 0.9);
}
</style>