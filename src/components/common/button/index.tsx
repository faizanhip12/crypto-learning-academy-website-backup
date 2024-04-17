import Link from 'next/link'
import React from 'react'
import styles from './style.module.css'

interface IMainbutton {
    url?: string | any;
    text: string;
    icon?: any;
    variant: 'white' | 'brown';
}
const Mainbutton = ({variant='brown', ...props}:IMainbutton) => {
  return (
    <Link href={props.url} className={`${styles.mainbtn} ${styles[variant]}`}>{props.text} <span><props.icon /></span></Link>
  )
}

export default Mainbutton