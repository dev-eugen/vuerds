
<template>
  <div id="app">
    <div class="hidden">
      <vs-navbar shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class="bx bx-menu"></i>
          </vs-button>
        </template>
        <vs-navbar-item :active="active == 'vuerds'" id="vuerds">
          Why Vuerds
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'about'" id="about">
          About
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'pricing'" id="pricing">
          Pricins
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'resources'" id="resources">
          Resources
        </vs-navbar-item>
        <template #right>
          <vs-button>Support</vs-button>
        </template>
      </vs-navbar>
      <vs-sidebar absolute v-model="active" :open.sync="activeSidebar">
        <template #logo>
          <vs-avatar size="70" badge badge-color="success" style="float: left">
            <i class="bx bx-user"></i>
          </vs-avatar>
        </template>
        <vs-sidebar-item id="dashboard">
          <template #icon>
            <i class="bx bx-home"></i>
          </template>
          Dashboard
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
            <i class="bx bx-grid-alt"></i>
          </template>
          Market
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <i class="bx bxs-music"></i>
          </template>
          Music
        </vs-sidebar-item>
        <!-- <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class="bx bx-code-alt"></i>
              </template>
              Coding
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="github">
            <template #icon>
              <i class="bx bxl-github"></i>
            </template>
            Github
          </vs-sidebar-item>
          <vs-sidebar-item id="codepen">
            <template #icon>
              <i class="bx bxl-codepen"></i>
            </template>
            Codepen
          </vs-sidebar-item>
          <vs-sidebar-item id="discord">
            <template #icon>
              <i class="bx bxl-discord"></i>
            </template>
            Discord
          </vs-sidebar-item>
          <vs-sidebar-item id="Javascript">
            <template #icon>
              <i class="bx bxl-javascript"></i>
            </template>
            Javascript
          </vs-sidebar-item>
          <vs-sidebar-item id="git">
            <template #icon>
              <i class="bx bxl-git"></i>
            </template>
            Git
          </vs-sidebar-item>
        </vs-sidebar-group> -->
        <vs-sidebar-item id="donate">
          <template #icon>
            <i class="bx bxs-donate-heart"></i>
          </template>
          Donate
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <i class="bx bx-chat"></i>
          </template>
          Chat
        </vs-sidebar-item>
        <vs-sidebar-item id="version">
          <template #icon>
            <i class="bx bx-news"></i>
          </template>
          Version
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar badge-color="danger" badge-position="top-right">
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
export default {
  data: () => ({
    active: "dashboard",
    activeSidebar: false,
  }),
};
</script>
  <style>
#main {
  margin-top: 70px;
  margin-left: 30px;
}
</style>


        

