import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from "axios";
import { BrowserView, MobileView } from 'react-device-detect';

function ColorSchemesExample() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://api.npoint.io/4cd4b20f53778c149e7d`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link style={{cursor:"default"}}>
            เว็บไซต์นี้ จัดทำเพื่อรวบรวมข้อมูลเนื้อหาเรื่องเล่าต่างๆภายในคืนพุธมุดผ้าห่ม ให้เป็นหมวดหมู่และแบ่งเป็นแท็กต่างๆ สะดวกแก่การตามหาเรื่อง หรือแนวเรื่อง รวมถึงตามหาเรื่องเล่าเก่าๆ ที่อยากย้อนฟังอีกครั้งแต่จำได้เรื่องได้แค่คร่าวๆ
            <br />
            <br />
            Lastest Update
            <br />{ data.map((ud) => ud.date + ". " + ud.story + " Stories. " + ud.day + " Days. Create by JS.") }
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link style={{cursor:"default"}}>Credit</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
        <BrowserView>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="https://www.twitch.tv/rubsarb">
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9b59dba2e1d2a11f-profile_image-70x70.png" alt="twitch logo" style={{ width: '48px', }}/>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link target={'_blank'} href="https://www.youtube.com/@wednesdaynight">[ไลฟ์] Twitch Rubsarb</Nav.Link>
              </Nav>
              <Navbar.Brand href="https://youtube.com/@wednesdaynight">
                <img src="https://yt3.googleusercontent.com/ytc/AL5GRJUWvH3s50r8O8zUPvi6nVr1ZKw7FoBowb4BCEVx=s176-c-k-c0x00ffffff-no-rj" alt="youtube logo" style={{ width: '48px', }}/>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link target={'_blank'} href="https://www.youtube.com/@wednesdaynight">[ย้อนหลัง] Youtube คืนพุธมุดผ้าห่ม [Official]</Nav.Link>
              </Nav>
              <Navbar.Brand href="https://www.instagram.com/tk.tonkla/?hl=th">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png" alt="youtube logo" style={{ width: '48px', }}/>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link target={'_blank'} href="https://www.instagram.com/tk.tonkla/?hl=th">@tk.tonkla</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
        </BrowserView>
        <MobileView>
        <Navbar bg="dark" variant="dark">
          <Container style={{display:"grid"}}>
            <Navbar.Brand href="https://www.twitch.tv/rubsarb">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9b59dba2e1d2a11f-profile_image-70x70.png" alt="twitch logo" style={{ width: '48px', }}/>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link target={'_blank'} href="https://www.youtube.com/@wednesdaynight">[ไลฟ์] Twitch Rubsarb</Nav.Link>
            </Nav>
            <Navbar.Brand href="https://youtube.com/@wednesdaynight">
              <img src="https://yt3.googleusercontent.com/ytc/AL5GRJUWvH3s50r8O8zUPvi6nVr1ZKw7FoBowb4BCEVx=s176-c-k-c0x00ffffff-no-rj" alt="youtube logo" style={{ width: '48px', }}/>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link target={'_blank'} href="https://www.youtube.com/@wednesdaynight">[ย้อนหลัง] Youtube คืนพุธมุดผ้าห่ม [Official]</Nav.Link>
            </Nav>
            <Navbar.Brand href="https://www.instagram.com/tk.tonkla/?hl=th">
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png" alt="youtube logo" style={{ width: '48px', }}/>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link target={'_blank'} href="https://www.instagram.com/tk.tonkla/?hl=th">@tk.tonkla</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </MobileView>
    </>
  );
}

export default ColorSchemesExample;