import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import styles from "./Crousel.module.css"

const Item = styled.div`

  align-items: center;
  height: 250px;
  width: 100%;
  margin: 15px;
  font-size: 4em;
`;


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function Crousel() {
  const [items, setItems] = useState(["https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jliczpbud8q6hsbi49x2","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zqlzlzfnpynceovhiutm","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/q8b9pmlvl1xqross8rzg","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/yuvbejxy2hx2ljv8dbuo","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rxxqptjyn7us3fftljcu","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qbgqgmu7qbnu4ejc2v5o","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/wpqkgirkowpnjzzhfmoq","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/kq27hdq2ywxof2hkpfyd","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/k7xunqkohzfzczqlqprn"]);

//   const addItem = () => {
//     const nextItem = Math.max(1, items.length + 1);
//     setItems([...items, nextItem]);
//   };

//   const removeItem = () => {
//     const endRange = Math.max(0, items.length - 1);
//     setItems(items.slice(0, endRange));
//   };

  return (
    <div className={styles.App}>
      {/* <div className="controls-wrapper">
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div> */}
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>
               <img height="300" width="300"  src={item} alt="" />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}


