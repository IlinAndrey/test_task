import "./style.scss";
import logo from './logo.svg';
import downArrow from './down-arrow.svg';
document.querySelector('.logo_svg').src = logo;

document.querySelector('.arrow').src = downArrow;

window.onload = function () {
    setTimeout(function () {
      document.querySelector(".left_card").style.opacity = 1;
    }, 500);

    setTimeout(function () {
      document.querySelector(".right_card").style.opacity = 1;
    }, 750);

    setTimeout(function () {
      document.querySelector(".center_card").style.opacity = 1;
    }, 1000);
  };
  var rates = {
    usd: 1,
    rub: 89,
    eur: 0.92,
  };

  var currency = "usd";
  var period = "month";

  function updatePrices() {
    var symbols = {
      usd: "$",
      rub: "₽",
      eur: "€",
    };

    var costs = document.querySelectorAll(".cost");
    var dollars = document.querySelectorAll(".dollars");
    var months = document.querySelectorAll(".month");

    for (var i = 0; i < costs.length; i++) {
      var monthlyPrice = parseFloat(costs[i].getAttribute("data-usd"));
      var newPrice = Math.round(
        (monthlyPrice * rates[currency]) / (period === "month" ? 1 : 30)
      );
      costs[i].textContent = newPrice;
      dollars[i].textContent = symbols[currency];
      months[i].textContent =
        " /" + period.charAt(0).toUpperCase() + period.slice(1);
    }
  }

  var dollars = document.querySelectorAll(".dollars");
  for (var i = 0; i < dollars.length; i++) {
    dollars[i].addEventListener("click", function () {
      if (currency === "usd") {
        currency = "rub";
      } else if (currency === "rub") {
        currency = "eur";
      } else {
        currency = "usd";
      }

      updatePrices();
    });
  }

  var months = document.querySelectorAll(".month");
  for (var i = 0; i < months.length; i++) {
    months[i].addEventListener("click", function () {
      period = period === "month" ? "day" : "month";
      updatePrices();
    });
  }

  document
    .getElementById("menuButton")
    .addEventListener("click", function () {
      var menu = document.getElementById("menu");
      menu.classList.toggle("open");

      var arrow = document.querySelector(".arrow");
      arrow.classList.toggle("rotate");
    });