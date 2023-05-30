import Image from 'next/image'
import styles from './footer.module.css'
import image from './logo.png'
const Footer=()=>{
    return  <footer id={styles.footer}>
        <div id={styles.logoFooter}>
        <Image src={image} alt='logo'></Image>
        </div>

        <div id={styles.contacts}>
            <a>Contacts</a>
            <p>+380504879212</p>
            <p>katahudoarova330@gmail.com</p>
        </div>
        </footer>
        
}
export default Footer