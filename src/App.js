import { Cart } from "./Cart";
import CardDeck from "react-bootstrap/CardDeck";
import {data} from "./Data";
import './App.css';

function OneRowforming(){
  return(
    // React Bootstrap card
    <CardDeck className="cardDeck">
      {data.map((ele)=>{
        const{title,price,accessAble,unaccessAble} = ele;
        return(
          //individually mapped using the data from the Data.js
          <Cart
          title={title}
          price={price}
          accessAble={accessAble}
          unaccessAble={unaccessAble}/>
        );
      })}
    </CardDeck>
  )
}
function App() {
  return (
    <div className="cont">
     < div className="container" style={{ padding: "20px 0" }}>
          {/* Deck Component */}
          <OneRowforming/>
          </div>         
    </div>   
  );
}

export default App;
