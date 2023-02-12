import React, { useEffect, useState } from "react";
import axios from "axios";
import { InputGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import { BrowserView, MobileView } from 'react-device-detect';
const About = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://api.npoint.io/0e72ad9e22c8231b03d4`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
  return (
    <div className="text-light bg-dark">
      <div className="container">
        <BrowserView>
          <div className="sticky-top" style={{zIndex:"999999"}} bg="dark" variant="dark">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="https://youtube.com/@wednesdaynight">คืนพุธมุดผ้าห่ม</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="/">หน้าแรก</Nav.Link>
                  </Nav>
                  <Form style={{width:"442px",margin:"0 0 0 10px"}}>
                  <InputGroup>
                    <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='ค้นหา' />
                  </InputGroup>
                </Form>
              </Container>
              <span className="text nav-text mode-text" onClick={() => { setTag(!tag) }}><Button style={{width:"140px"}}>{`${tag ? "ซ่อนรายละเอียด" : "แสดงรายละเอียด"}`}</Button> </span>
            </Navbar>
          </div>
        </BrowserView>
        <MobileView>
          <div style={{zIndex:"999999",position:"fixed",top:"0",left:"0"}} bg="dark" variant="dark">
            <Marquee>
              สวัสดีครับ รายการคืนพุธมุดผ้าห่ม เป็นรายการที่นำเอาเรื่องราว สยองขวัญ ไม่ว่าจะเป็นเรื่องเกี่ยวกับผี เกี่ยวกับคน ภูติผีปีศาจ เอามาเล่า เพื่อ Entertainment โปรดใช้วิจารณญาณในการรับชมรับฟัง
            </Marquee>
            <Navbar bg="dark" variant="dark">
              <img src="https://yt3.googleusercontent.com/tEZJ-Uk1VzxIO_CDeOHZWKOFyC7yXQ6ZIAvgmdwZlMj-Ujl5eJEINWxcK_x_aq-2rapq9s8oGA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="youtube logo" style={{ width: '100%', }}/>
            </Navbar>
            <Navbar bg="dark" variant="dark">
              <Container>
                  <Form style={{display:"grid",gridTemplateColumns:"auto 120px"}}>
                  <InputGroup>
                    <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='ค้นหา' />
                  </InputGroup>
                  <span className="text nav-text mode-text" onClick={() => { setTag(!tag) }}><Button style={{width:" 70px"}}>{`${tag ? "ซ่อน" : "แสดง"}`}</Button> </span>
                </Form>
              </Container>
            </Navbar>
          </div>
          <div style={{height:"100px"}}></div>
        </MobileView>
            <Row xs={1} md={4} className="g-4" style={{minHeight:"600px"}}>
            {
              data.sort((b,a) => a.id > b.id ? 1 : -1).filter((item) => {
              return search.toLowerCase() === '' ? item : item.day.includes(search) || item.story.includes(search) || item.tag.includes(search) || item.num.includes(search)}).map((item) => (
                <Col key={item.id}>
                  <Card className="border border-light text-bg-dark">
                    <Card.Body className="position-relative position-relative-example" style={{padding:"0 0 5px 0"}}>
                      <Card.Title className="position-absolute fixed-top" style={{padding:"3px 0 0 15px"}}>รายการสดวันที่ {item.date.substring(10, 8)+item.date.substring(8, 4)+item.date.substring(0,4)}</Card.Title>
                      <Card.Title className="position-absolute fixed-bottom" style={{padding:"0 0 0 15px"}}>{item.day+" "+item.num}</Card.Title>
                      <Card.Img className=" border border-light" variant="top" src={"https://i.ytimg.com/vi/"+item.link+"/hqdefault.jpg"} />
                    </Card.Body>
                    <Card.Body style={{padding:"0 15px"}}>
                      <Card.Title>{item.story}</Card.Title>
                    </Card.Body>
                    <Card.Body style={{padding:"0 15px"}} >
                      <Card.Text style={{height:`${tag ? "120px" : "0px" }`}}>
                        {`${tag ? item.tag : "" }`}
                      </Card.Text>
                    </Card.Body>
                    <Card.Body style={{padding:"0"}} >
                      <hr/>
                      </Card.Body>
                    <Card.Body style={{padding:"0 0 15px 0"}} >
                      <Card.Text style={{textAlign:"center"}}>
                        <a target={"_blank"} rel="noreferrer" href={"https://youtu.be/" + item.link + "?t=" + item.time}>
                          <Button variant="danger" style={{ backgroundColor: '#dd4b39' }}>รับชม <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg></Button>
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
            </Row>
        &nbsp;
      </div>
    </div>
  );
};
  
export default About;