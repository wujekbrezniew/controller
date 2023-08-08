import React, { createRef, RefObject, useState } from 'react';
import './Main.css';
import Switch from './Switch';
import RotationPanel from '../rotationPanel/RotationPanel';
import CultivationPanel from '../cultivationPanel/CultivationPanel';
import { InitWs } from '../tools/Websocket';
import config from '../config.json';

InitWs(config.backend_addr);

const Main = () => {
    
    const [showRotation, setShowRotation] = useState(false);
    const [showCultivation, setShowCultivation] = useState(false);
    
    return (
        <div id="MainGrid">
            <div id="Switches">
                <Switch config={{name: "RotationPanel", 
                                icon: "icon_rotation", 
                                a: showRotation,
                                onclick: () => {
                                    if (showRotation === false) {
                                        setShowRotation(true);
                                    } else {
                                        setShowRotation(false);
                                    }
                                }
                }}></Switch>
                <Switch config={{name: "CultivationPanel", 
                                icon: "icon_cultivation", 
                                a: showCultivation,
                                onclick: () => {
                                    if (showCultivation === false) {
                                        setShowCultivation(true);
                                    } else {    
                                        setShowCultivation(false);
                                    }
                                }
                }}></Switch>
                <Switch config={{name: "a", a: false, onclick: () => {console.log("a")}}}></Switch>
            </div>
            <div id="Panels">
                { showRotation && <RotationPanel></RotationPanel> }
                { showCultivation && <CultivationPanel></CultivationPanel> }
            </div>
        </div>
    )
}

export default Main;