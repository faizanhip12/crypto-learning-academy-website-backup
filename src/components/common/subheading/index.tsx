import React from 'react'
import styles from './style.module.css';


interface ISubheading {
  
  title?: string;
  paragraph?: string;
  image?: string;
}
const Subheading = (props: ISubheading) => {


  return (


        <div className={`text-center ${styles.padding_tb}`}>
            <h3 className={styles.subheading}>{props.title}</h3> 
            <p className={styles.para}>{props.paragraph}</p>
        </div>
 
  
  )
}

export default Subheading