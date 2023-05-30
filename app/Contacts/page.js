import Image from "next/image"
import image from './image 6.png'
import icon1 from './iconinst.png'
import icon2 from './iconphone.png'
import icon3 from './iconpost.png'
import style from './page.module.css'
const Contacts=()=>{
    return (<>
    <div id={style.contacts}>
        <Image src={image} alt='contact'></Image>
        <div id={style.medias}>
            <div id={style.inst}>
                <Image src={icon1}></Image>
                chswv
            </div>
            <div id={style.phone}> 
            <Image src={icon2}></Image>
            +380504879212
            </div>
            <div id={style.post}>
                <Image src={icon3}></Image>
                katahudoarova330@gmail.com
                </div>
        </div>
    </div>


    </>)
}
export default Contacts