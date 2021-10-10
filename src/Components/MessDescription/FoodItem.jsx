import React from 'react'
import styles from "./FoodItem.module.css"
const FoodItem = () => {
    return (
        <>
           <div className={styles.fooditem_main}>
               <div>
                   <h1>1174 restaurants</h1>
               </div>
              
              <div className={styles.fooditem_filter}>
              <h2 style={{marginTop:"25px"}}>Filter By</h2>
              <div className={styles.sort_buttons}>
                  
                  <button>Relevance</button>
                  <button>Delivery Time</button>
                  <button>Rating</button>
                  <button>Cost:Low To High</button>
              </div>

              </div>
              
           </div> 
           <hr />
        </>
    )
}

export default FoodItem
