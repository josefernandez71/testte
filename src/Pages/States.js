import React, { useCallback } from 'react';
import Statebtn from '../Component/statebtn';
import { useNavigate } from 'react-router-dom';
import '../styles/states.scss';
import '../styles/animate.scss'

export default function States() {

  const Navigate = useNavigate();
  const logOUT = useCallback(() => Navigate('/', { replace: true }), [Navigate]);
  return (
    <div className='background'>
      <div id="contall">
        <div id="PerfilUsers">
          <p id='SolvIcon'></p>
          <h2>Lionel Andres Messi</h2>
          <p id='textCustom'>Time is Money Money Money Money</p>
          <div id='OptionsBTN'>
            <button id='PerfilU'></button>
            <button id='Options'></button>
            <button id='Out' onClick={logOUT}></button>
          </div>
        </div>

        <div id="PanelState">
          <div id="state">
            <h1 id="demo" >Log Out</h1>
            <div id="crono">
              <p>00:00:00</p>
              <div className='animationTest'>
                <div className='Animation'></div>
                <div className='Animation'></div>
                <div className='Animation'></div>
                <div className='Animation'></div>
              </div>
            </div>
          </div>
          <div id='selectorState'>
            <Statebtn />
          </div>
        </div>

      </div>
    </div>
  )
}


