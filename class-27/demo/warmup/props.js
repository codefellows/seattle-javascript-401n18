

function app() {
  let money = 100000000;

  let food = 'cookies';

  function withdraw(amount) {
    if(amount < 50)  {
      money -= amount;
    }
  }

  zach(withdraw);

  console.log(money);
}

function zach(props, card) {
  console.log('Thanks for the', props);
  card(49);
  jodie(card);
}

function jodie(card) {
  card(10);
}

app();


