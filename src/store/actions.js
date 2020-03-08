import Vue from 'vue';

export const loadData = ({ commit }) => {
   Vue.http.get('data.json')
      .then(response => response.json())
      .then(extractedData => {
         if(extractedData){
            const stocks = extractedData.stocks
            const funds = extractedData.funds
            const stockPortfolio = extractedData.stockPortfolio
            
            const portfolio = {
               stockPortfolio,
               funds
            }

            commit('SET_STOCKS', stocks)
            commit('SET_PORTFOLIO', portfolio)
         }
      })
}  