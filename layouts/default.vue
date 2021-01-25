
<template>
  <div id="app">
    <div class="hidden">
      <vs-navbar shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button v-if="!user" @click="signInWithGoogle" flat icon relief>
            <i :class=" 'bx bx-log-in bx-' + TargeticonAnimation" :animation="TargeticonAnimation"></i>{{ " " }}Войти
          </vs-button>
          <vs-button v-else @click="activeSidebar = !activeSidebar" flat icon relief>
            <i :class=" 'bx bx-menu bx-' + TargeticonAnimation" :animation="TargeticonAnimation"></i>{{ " " }}Меню
          </vs-button>
        </template>
        <template #right>
          <vs-button upload relief icon
            ><i :class=" 'bx bx-time bx-' + TargeticonAnimation"></i>Премиум бесплатно</vs-button
          >
        </template>
      </vs-navbar>
      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo>
          <vs-avatar size="30" badge badge-color="success">
            <img :src="avatar" />
          </vs-avatar>
        </template>
        <vs-sidebar-item  id="Dashboard" to="/">
          <template #icon>
            <i class="bx bx-home"></i>
          </template>
          Панель управления
        </vs-sidebar-item>
        <vs-sidebar-item   id="Box" to="/box">
          <template #icon>
            <i class="bx bx-grid-alt"></i>
          </template>
          Наборы
        </vs-sidebar-item>
        <vs-sidebar-item id="Music" to="/music">
          <template #icon>
            <i class="bx bx-music"></i>
          </template>
          Музыка
        </vs-sidebar-item>
        <vs-sidebar-item id="Add" to="/add">
          <template #icon>
            <i class="bx bx-plus-circle"></i>
          </template>
          Добавить набор
        </vs-sidebar-item>
        
        <vs-sidebar-item id="User" to="/user">
          <template #icon>
            <i class="bx bx-user"></i>
          </template>
          Аккаунт
        </vs-sidebar-item>
        <vs-sidebar-item id="Chat" to="/chat" >
          <template #icon>
            <i class="bx bx-chat"></i>
          </template>
          Чат
        </vs-sidebar-item>
        <vs-sidebar-item id="Info" to="/info"  >
          <template #icon>
            <i class="bx bx-info-circle"></i>
          </template>
          О приложении
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar
              @click="signOut"
              badge-color="danger"
              badge-position="top-right"
            >
              <i class="bx bx-log-out"></i>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>

      <div id="main">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import loading from "../mixins/startLoading.js";
import iconAnimation from "../mixins/IconAnimation.js";
export default {
  data() {
    return {
    active: "dashboard",
    activeSidebar: false,
    user: null,
    avatar: null,
    }
  },
  mixins: [loading, iconAnimation],
  methods: {
    signOut() {
      this.$fireModule.auth().signOut();
      this.user = null;
      this.activeSidebar = false;
    },
    async loadUser() {
      await this.$fireModule
        .auth()
        .onAuthStateChanged(
          (user) => ((this.user = user), (this.avatar = user.photoURL))
        );
    },
    signInWithGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider();
      this.$fireModule
        .auth()
        .signInWithPopup(provider)
        .then((data) => (this.user = data.user))
        .then((data) => (this.avatar = this.user.photoURL))
        .then(() => (this.activeSidebar = true));
    },
  },
  mounted() {
    this.loadUser();
  },
};
</script>
  <style>
#main {
  margin-top: 70px;
  margin-left: 30px;
}
</style>


        

