export const state = () => ({
    user: []
});

export const mutations = {
    setUser(state, user) {
        state.user = user
      }
};

export const actions = {
  async load({commit}){
     let currentUser
     this.$fireModule.auth().onAuthStateChanged(user => currentUser = user)
     commit('setUser', currentUser);
  }
};

export const getters = {
    user: s => s.user
};
