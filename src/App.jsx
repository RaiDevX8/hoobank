import React from 'react'
import styles from './style.js'
import {Navbar,Billing,Stats,Business,Hero,Button,CardDeal,Clients,Feadback,Getstarted
} from "./components";

const App = () =>  (
    <div className='bg-black font-bold'> 
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar/>
      </div>
      </div>
   <div className={`bg-black ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
    <Hero/>
    </div>
   </div>

   <div className={`bg-black ${styles.paddingX}${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
    <Billing/>
    <Stats/>
    <Business/>
    <Button/>
    <CardDeal/>
    <Clients/>
    <Feadback/>
    <Getstarted/>

    </div>
   </div>

    </div>
  );


export default App
