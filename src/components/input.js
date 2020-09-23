import React from 'react';

function KeyPad(props) {
    const buttonPressed = e => {props.buttonPressed(e.target.name)}
  return (
    <div>
        <div className="row">
            <button className="col-3" name="1" onClick={buttonPressed}>1</button>
            <button className="col-3" name="2" onClick={buttonPressed}>2</button>
            <button className="col-3" name="3" onClick={buttonPressed}>3</button>
        </div>
        <div className="row">
            <button className="col-3" name="4" onClick={buttonPressed}>4</button>
            <button className="col-3" name="5" onClick={buttonPressed}>5</button>
            <button className="col-3" name="6" onClick={buttonPressed}>6</button>
        </div>
        <div className="row">
            <button className="col-3" name="7" onClick={buttonPressed}>7</button>
            <button className="col-3" name="8" onClick={buttonPressed}>8</button>
            <button className="col-3" name="9" onClick={buttonPressed}>9</button>
        </div>
        <div className="row">
            <button className="col-3" name="0" onClick={buttonPressed}>0</button>
            <button className="col-3" name="." onClick={buttonPressed}>.</button>
            <button className="col-3" name="+" onClick={buttonPressed}>+</button>
        </div>
        <div className="row">
            <button className="col-3" name="-" onClick={buttonPressed}>-</button>
            <button className="col-3" name="%" onClick={buttonPressed}>%</button>
            <button className="col-3" name="*" onClick={buttonPressed}>*</button>
        </div>
        <div className="row">
            <button className="col-3" name="=" onClick={buttonPressed}>=</button>
            <button className="col-3" name="CE" onClick={buttonPressed}>CE</button>
        </div>
    </div>
  );
}

export default KeyPad;
