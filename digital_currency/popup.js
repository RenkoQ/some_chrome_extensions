document.addEventListener('DOMContentLoaded', function () {

  /**
   *
 fetch(location.herf, {
      method: "get"
  }).then(function(response) {
      return response.text()
  }).then(function(body) {
      console.log(body)
  })
   * 
   */
  function getAllPriceInfo() {

    fetch('https://www.jubi.com/coin/allcoin')
      .then(response => response.json())
      .then(response => {

        btc.innerHTML = response.btc[1].toFixed(2);
        bcc.innerHTML = response.bcc[1].toFixed(2);
        eth.innerHTML = response.eth[1].toFixed(2);
        lsk.innerHTML = response.lsk[1].toFixed(2);
        ltc.innerHTML = response.ltc[1].toFixed(2);
      })
      .catch(response => {
        btc.innerHTML = 'null';
      })
  }

  getAllPriceInfo();
  setInterval(getAllPriceInfo, 1000 * 10);
});