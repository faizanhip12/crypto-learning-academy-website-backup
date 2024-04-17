import React from 'react'
import styles from './style.module.css';


interface IProps {

  title?: string;
  gradienttext?: string;
  className?: string;
  
 
}
const Heading = (props: any) => {


  return (
    <section ref={props.trending} className={props.className}>
    <div className='container_1500'>
        <div className={`${styles.padding_tb}`}>
        {/* <h2 className={styles.heading}> {props.title} <span className={styles.gradient_brown}> {props.titleSpan}</span></h2>      */}
        <h2 className={styles.heading}> <span className={styles.gradient_brown}> {props.gradienttext}</span> {props.title} </h2>     
        </div>
     </div>
     </section>
  )
}

export default Heading