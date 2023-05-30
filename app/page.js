import Image from 'next/image'
import styles from './page.module.css'
import image1 from './images/image 1.png'
export default function Home() {
  return (<><Image id={styles.pageimg} src={image1}></Image>
  <div id={styles.pagetxt}>
   <p>I am Kateryna Khudoyarova, I am 17 years old and I work in UIUX design. I want to work in this field in the future.I am also a first-year student at DUIKT University.</p>
  
  </div>
</>)
}
