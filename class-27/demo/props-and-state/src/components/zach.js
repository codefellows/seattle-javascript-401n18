function Zach(props) {

  function withdrawMoney() {
    props.useAtmCard(25);
  }

  return (
    <div>
      Thanks for the {props.food}
      <button onClick={withdrawMoney}>Take Money From Dad</button>
    </div>
  )

}

export default Zach;
