import React, { useState } from "react";



export default function Statebtn() {
  const [stateS, setstateS] = useState("");
  const [classA, setClassA] = useState("Animation")
  const [newClass, setNewClass] = useState("");
  function enableBtn() {
    const btt = document.querySelectorAll('.btns');
    for (var i = 0; i < btt.length; i++) {
      btt[i].disabled = false;
    }
  }


  function OpenModal(btns) {
    setstateS(btns);
    modal();
    setNewClass(btns);
    console.log(newClass);
    console.log(classA);
  }
  function changeAnimation() {
    const arrayA = document.querySelectorAll("." + classA + "")
    for (var i = 0; i < arrayA.length; i++) {
      arrayA[i].className = "Animation " + newClass;
      console.log(arrayA);
    }
  }
  function confirm() {
    if (stateS === "avaA") {
      close();
      enableBtn();
      document.getElementById("demo").innerHTML = "Available";
      document.getElementById("ava").disabled = "true";
      changeAnimation();
      setClassA("avaA");
    } else if (stateS === "personalA") {
      close();
      enableBtn()
      document.getElementById("demo").innerHTML = "Personal";
      document.getElementById("unav").disabled = "true";
      changeAnimation();
      setClassA("personalA");
    } else if (stateS === "breakA") {
      close();
      enableBtn()
      document.getElementById("demo").innerHTML = "Break";
      document.getElementById("break").disabled = "true";
      changeAnimation();
      setClassA("breakA");
    } else if (stateS === "lunchA") {
      close();
      enableBtn()
      document.getElementById("demo").innerHTML = "Lunch";
      document.getElementById("lunch").disabled = "true";
      changeAnimation();
      setClassA("lunchA");
    } else if (stateS === "meetA") {
      close();
      enableBtn()
      document.getElementById("demo").innerHTML = "Meeting";
      document.getElementById("meet").disabled = "true";
      changeAnimation();
      setClassA("meetA");
    } else if (stateS === "coachA") {
      close();
      enableBtn()
      document.getElementById("demo").innerHTML = "Coaching";
      document.getElementById("coach").disabled = "true";
      changeAnimation();
      setClassA("coachA");
    }
  }


  function modal() {
    var modal = document.getElementById("Mymodal");
    var body = document.getElementsByTagName("body")[0];
    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }
  function close() {
    var modal = document.getElementById("Mymodal");
    var body = document.getElementsByTagName("body")[0];
    modal.style.display = "none";
    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  }
  return (
    <>
      <div id="Mymodal" className="modalcont">
        <div id="modal-cont">
          <div id="contm">
            <div className="infomodal">
              <h2>¿Desea Cambiar de estado?</h2>
            </div>
            <div className="btnmodal">
              <button className="conf" id="confirm" onClick={confirm}>Confirmar</button>
              <button className="conf" id="cancel" onClick={close}>cancelar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="layoutBtn">
        <div id="btn1" className="btn"><button className="btns" id="ava" onClick={() => OpenModal("avaA")} ></button></div>
        <div id="btn2" className="btn"><button className="btns" id="unav" onClick={() => OpenModal("personalA")}>PERSONAL</button></div>
        <div id='btn3' className="btn"><button className="btns" id="lunch" onClick={() => OpenModal("lunchA")}>LUNCH</button></div>
        <div id="btn4" className="btn"><button className="btns" id="break" onClick={() => OpenModal("breakA")}>BREAK</button></div>
        <div id="btn5" className="btn"><button className="btns" id="meet" onClick={() => OpenModal("meetA")}>MEETING</button></div>
        <div id="btn6" className="btn"><button className="btns" id="coach" onClick={() => OpenModal("coachA")}>COACHING</button></div>
      </div>
    </>

  )
}
