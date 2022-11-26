import { Button, Alert, Modal } from "antd";
import { useState } from "react";



function App() {
  const [btns, setBtns] = useState(Array(9).fill(""));
  const [xval,setXval]=useState(true)
  const [gameowerr, setGameower] = useState(false)
 


// massage //////////////
  
  let masage = <Alert message="Success Tips" type="success" showIcon />;
// massage //////////////
     const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const cancel = () => {
    setOpen(false);
    setBtns(Array(9).fill(""));
  };


  // btnClick; ////////////////
  const btnclick = (i) => {
    // x va o almashinuvi //////
    if (xval) {
      btns[i] = "X"
      setXval(false)
    } else {
      btns[i] = "O"
      setXval(true);
    }
    ////g'olib aniqlash ////
  
    if (btns[0] === btns[1] && btns[2] === btns[1]) {
      showModal()
      
    }
  }
  // btnClick; ////////////////
  // restart; /////////////////
  const restart = () => {
     setBtns(Array(9).fill(""))
  }
  // restart; /////////////////

  return (
    <div className="App">
      <div className="card">
        <h1 className="title">
          X va O uyini <img src="./wow.png" alt="" className="img" />
        </h1>
        <h1 className="kursatmaTile">
          Navbat
          {xval ? (
            <img src="./x.png" alt="" className="img" />
          ) : (
            <img src="./o.png" alt="" className="img" />
          )}
          uyinchiniki !
        </h1>
        <div className="btnlar">
          {btns.map((a, i) => (
            <Button
              disabled={gameowerr ? true : false}
              className="btn"
              onClick={() => btnclick(i)}
            >
              {a}
            </Button>
          ))}
        </div>
        <Button className="restart " onClick={restart}>
          Restart
        </Button>
      </div>
      <Modal title="Title" open={open} onOk={cancel} onCancel={cancel}>
        <p>{masage}</p>
      </Modal>
    </div>
  );
}

export default App;
