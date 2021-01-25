<template>
  <div>
    <vs-row>
      <vs-col lg="1" sm="2" xs="2">
        <vs-button to="/box" icon relief danger animation-type="tada">
          <i class="bx bx-exit"></i>
          <template #animate>
            <i class="bx bxs-exit"></i>
          </template>
        </vs-button>
      </vs-col>
      <vs-col lg="3" sm="3" xs="3"> </vs-col>
      <vs-col lg="4" sm="2" xs="2">
        <vs-button relief block icon>
          <i class="bx bx-timer"></i>{{time}}
        </vs-button>
      </vs-col>
      <vs-col lg="3" sm="3" xs="3"> </vs-col>
      <vs-col lg="1" sm="2" xs="2">
      <vs-row justify="flex-end">
      <vs-button justify="flex-end" icon relief danger animation-type="burst"  style="margin-right: 9px">
          <i class="bx bx-user-voice"></i>
          <template #animate>
            <i class="bx bxs-user-voice"></i>
          </template>
        </vs-button>
      </vs-row>
        
      </vs-col>
    </vs-row>
  </div>
</template>

<script>

export default {
    props:{
      time: Number
    }
};
</script>

<style scoped>
div {
  height: 60px;
}
</style>