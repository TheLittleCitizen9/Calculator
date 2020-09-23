import React from 'react';

function KeyPad() {
  return (
    <div>
        <div className="row">
            <button className="col-3" name="1">1</button>
            <button className="col-3" name="2">2</button>
            <button className="col-3" name="3">3</button>
        </div>
        <div className="row">
            <button className="col-3" name="4">4</button>
            <button className="col-3" name="5">5</button>
            <button className="col-3" name="6">6</button>
        </div>
        <div className="row">
            <button className="col-3" name="7">7</button>
            <button className="col-3" name="8">8</button>
            <button className="col-3" name="9">9</button>
        </div>
        <div className="row">
            <button className="col-3" name="0">0</button>
            <button className="col-3" name="+">+</button>
            <button className="col-3" name="-">-</button>
        </div>
        <div className="row">
            <button className="col-3" name="%">%</button >
            <button className="col-3" name="*">*</button>
            <button className="col-3" name="CE">CE</button>
        </div>
    </div>
  );
}

export default KeyPad;
