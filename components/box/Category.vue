<template>
    <div class="center grid">
      <vs-row>
      <vs-col  lg="4" sm="6" xs="12" v-for="(card, i) in list" :key="i">
      <div class="cart">
        <vs-card type="1">
      <template #title>
        <h3>{{card.label}}</h3>
      </template>
      <template #img>
        <img :src=' "@/static/images/" + card.file + ".jpg"' alt="card.label" >
      </template>
      <template #text>
        <p>
          {{card.subtitle}}
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-bookmark-alt'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-book-alt' ></i>
          <span class="span">
            {{card.size}}
          </span>
        </vs-button>
        <vs-button
        primary
        :to="'/play/' + card.file"
      >
        Начать
      </vs-button>
      </template>
    </vs-card>
    </div>
      </vs-col>
    </vs-row>
    </div>
</template>
<script>
    export default {
        props:{
            list: Array
        },
        mounted(){
          //console.log(this.list)
        }
    }
</script>

<style scoped>
.cart{
  margin-bottom: 15px;
}
</style>