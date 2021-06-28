import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

export function Cart({title,price,accessAble,unaccessAble}){
return(
    <div className="cardBox">
        <Card
            className="card"
            style={{width:"fit-content",borderRadius:"1rem",margin:"0"}}>
              <div style={{padding:"1rem"}}>
                  <Container>
                    {/* Title of the decks */}
                      <Row className="text-center">
                      <Col><p className="title">{title}</p></Col>
                      </Row>
                       {/* price and month for the decks */}
                      <Row className="text-center">
                        <Col><h2 className="card-price" >{price}</h2>
                        <span>/month</span>  </Col>
                      </Row>
                      {/* Checked lists in each deck */}
                      <div className="access">
                          <ul style={{marginBottom:"0px"}}>
                              {accessAble.map((ele)=>{
                              return(                                
                              <li><FaCheck className="fontAwesome"/>{ele}</li> 
                              );
                              })}
                          </ul>
                          {/* Crossed lists in each deck */}
                          <ul className="unaccess">
                              {unaccessAble.map((ele)=>{
                                  return(                                      
                                    <li><FaTimes className="fontAwesome" /> {ele}</li>                                      
                                  );
                              })}                              
                          </ul>
                      </div>
                      
            <div className="text-center btnBox ">
              <Button
                style={{
                  borderRadius: "5rem",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  background:"#007bff",
                  letterSpacing: "0.1rem",
                  padding: "1rem",
                }}
                className="btn"
                variant="primary"
                block>              
                BUTTON
              </Button>
               </div></Container></div>
              </Card> 
    </div>
)} 
            
    