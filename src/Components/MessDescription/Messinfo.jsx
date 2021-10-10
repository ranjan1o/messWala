import React from "react";
import Navbar from "./Navbar";
import styles from "./Messinfo.module.css";
import { AiOutlineStar } from "react-icons/ai";
import FoodCard from "./FoodCard"
const Messinfo = () => {
  return (
    <>
      <Navbar />
      <div className={styles.messinfo_main}>
        <div className={styles.messinfo_image}>
          <img
            height="200"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y7ywapcvtgxxsnr7gefn"
            alt="restro_food_image"
          />
        </div>

        <div className={styles.messinfo_description}>
          <h1>RAAHI</h1>
          <p>Indian</p>
          <p>Central Banglore,Ashok Nagar</p>

          <div className={styles.information}>
            <div className={styles.star_rating}>
              <AiOutlineStar />
              <p style={{ marginTop: "-1px" }}>4.9</p>
            </div>

            <div>
              <p>35 MINS</p>
            </div>

            <div>
              <p>₹500 FOR TWO</p>
            </div>
          </div>
        </div>

        <div className={styles.messinfo_offers}>
          <h3>OFFER</h3>
          <div className={styles.off_offer}>
            <div>
              <p>30% off up to ₹150 on orders above ₹400 | Use code JUMBO</p>
            </div>

            <div>
              <p>50% off up to ₹100 | Use code TRYNEW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
         <h1 style={{textAlign: 'center'}}>Recommended </h1>
         <hr />
         <FoodCard/>
      </div>
    </>
  );
};

export default Messinfo;
