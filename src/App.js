import { Container, Col, Row } from "react-bootstrap";
import Fade from 'react-reveal';
import SpaceGray from "./components/spaceGray";
import Footer from "./components/footer";
import Code from "./components/codeCard";
import Primary from "./components/primaryBtn";

function App() {

  const cardData = [
    {
      id:1,
      title:"JavaScript",
      code:'console.log("Hello, World!")',
      link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id:2,
      title:"PHP",
      code:'<?php echo "Hello, World!" ?>',
      link:"https://www.php.net/",
    },
    {
      id:3,
      title:"Python",      
      code:'print("Hello, World!")',
      link:"https://www.python.org/",
    },
    {
      id:4,
      title:"Ruby",
      code:'puts "Hello, World!"',
      link:"https://www.ruby-lang.org/en/"
    },
    {
      id:5,
      title:"Java",
      code:'public class Main {public static void main(String[] args) {System.out.println("Hello, World!")}}',
      link:"https://www.oracle.com/java/technologies/",
    },
    {
      id:6,
      title:"C#",
      code:'using System; namespace Program { public class Program { public static void Main(string[] args) {Console.WriteLine("Hello, World!");}}}',
      link:"https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
  ]

  return (
    <>
    <Container id="intro-container">    
    <SpaceGray></SpaceGray>
      <Row>
        <Col>
        <Fade>                         
          <h1 className="serif green">Hello, World!</h1> 
            <p className="large">What is <span className="serif">"Hello, World!"</span> and why is it important?</p>
            <p className="large">Nearly all programming languages use some sort of <span className="serif">"Hello, World!"</span> program that they use as an introduction to their respective language<span className="green">.</span></p>
            <p className="large">Here are some popular examples:</p>
        </Fade>
        </Col>
      </Row>
      <Fade>
        <Row>        
              {cardData.map((value)=>{
                  return(
                    <Code key={value.id} tag={value.id} title={value.title} code={value.code} link={value.link}></Code>
                  )
              })}   
        </Row>
      </Fade>
      <Row>
        <Col>
              <Fade>
              <p className="large">Today you'll learn how to write your first program that will do the same (and probably a little more!)<span className="green">.</span></p>
              </Fade>
        </Col>
      </Row>
    </Container>
    <div id="green-wrapper">     
      <div className="green-gradient"></div>
        <Container id="green-container">
          <Row>
            <Col>
            <Fade>
            <p className="large space-gray"><span className="serif">Today you are going to learn how to code.</span></p>   
            </Fade>
            </Col>
          </Row>      
        </Container> 
    </div>

    <Container id="standard-container">    
    <SpaceGray></SpaceGray>
      <Row>
        <Col>
        <Fade>                                   
            <p className="large">Let's get started<span className="green">.</span></p>            
            <Primary title={"Start Here"} link={"https://codepen.io/"}></Primary>
        </Fade>
        </Col>
      </Row>

    </Container>

    <Fade>
      <Footer></Footer>
    </Fade>
    </>
  );
}

export default App;
