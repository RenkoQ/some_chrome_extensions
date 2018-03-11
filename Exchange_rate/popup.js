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

    var basecoin = localStorage.basecoin;
    console.log(basecoin);
    basecoin = basecoin ? basecoin : 'CNY';
    var url = 'http://api.fixer.io/latest?base=' + basecoin;
    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(res => {

        const coinarry = ['CNY','USD', 'HKD', 'GBP', 'JPY', 'EUR '];
        if (coinarry.includes(basecoin)) {
          basecoinlower = basecoin.toLowerCase();
          var coinselector = document.querySelector('#' + basecoin.toLowerCase());
          coinselector.innerHTML = '1';
        }

        (cny.innerHTML == '1') ? cny.innerHTML: cny.innerHTML = res.rates.CNY.toFixed(5);
        (usd.innerHTML == '1') ? usd.innerHTML: usd.innerHTML = res.rates.USD.toFixed(5);
        (hkd.innerHTML == '1') ? hkd.innerHTML: hkd.innerHTML = res.rates.HKD.toFixed(5);
        (gbp.innerHTML == '1') ? gbp.innerHTML: gbp.innerHTML = res.rates.GBP.toFixed(5);
        (jpy.innerHTML == '1') ? jpy.innerHTML: jpy.innerHTML = res.rates.JPY.toFixed(5);
        (eur.innerHTML == '1') ? eur.innerHTML: eur.innerHTML = res.rates.EUR.toFixed(5);

      })
      .catch(res => {
        usd.innerHTML = 'null';
      })
  }

  getAllPriceInfo();
  setInterval(getAllPriceInfo, 1000 * 10);


  document.getElementById('change').addEventListener('click', changeMoney);

  function changeMoney() {
    var box1 = document.getElementById("box1");
    let coinmount = document.querySelector('#mount').value;
    let name1 = box1.options[box1.selectedIndex].value;
    let rate = document.querySelector('#' + name1).innerHTML;
    let countresult = (rate * coinmount).toFixed(2);
    document.querySelector('#result').innerHTML = countresult;

  }

});

