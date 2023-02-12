import Navbar from 'react-bootstrap/Navbar';
import Marquee from "react-fast-marquee";

function ColorSchemesExample() {
  return (
    <>
      <Marquee>
        สวัสดีครับ รายการคืนพุธมุดผ้าห่ม เป็นรายการที่นำเอาเรื่องราว สยองขวัญ ไม่ว่าจะเป็นเรื่องเกี่ยวกับผี เกี่ยวกับคน ภูติผีปีศาจ เอามาเล่า เพื่อ Entertainment โปรดใช้วิจารณญาณในการรับชมรับฟัง
      </Marquee>
      <Navbar bg="dark" variant="dark">
              <img src="https://yt3.googleusercontent.com/tEZJ-Uk1VzxIO_CDeOHZWKOFyC7yXQ6ZIAvgmdwZlMj-Ujl5eJEINWxcK_x_aq-2rapq9s8oGA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="youtube logo" style={{ width: '100%', }}/>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;