export const state = () => ({
    
  });
  
  export const mutations = {};
  
  export const actions = {
    async nuxtServerInit({dispatch}) {
      await dispatch('user/load');
     // await dispatch('packs/load');
    }
  };
  
  export const getters = {};
  