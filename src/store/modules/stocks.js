import stocks from '../../data/stocks';

const state = {
   stocks: []
};

const mutations = {
   'SET_STOCKS'(state, stocks) {
      state.stocks = stocks
   },
   'RND_STOCKS'(state) {
      state.stocks.forEach(stock => {
         stock.price = Math.round(stock.price * (1 + Math.random() - 0.4)) //cijena ide u rangu 60% dole ili gore
      })
   },
};

const actions = {
   buyStock: ({ commit }, order) => {
      commit('BUY_STOCK', order);   //commit-uje iako je drugi module, ali je global namespace
   },
   initStocks: ({ commit }) => {
      commit('SET_STOCKS', stocks)
   },
   randomizeStocks: ({ commit }) => {
      commit('RND_STOCKS');
   },
};

const getters = {
   stocks: state => { return state.stocks; }
}

export default {
   state,
   mutations,
   actions,
   getters
}