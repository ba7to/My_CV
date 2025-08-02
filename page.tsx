import Style from "./page.module.css"
import Image from "next/image"
import my_img from "./img/WhatsApp Image 2025-06-30 at 00.45.32_bd20a6f8.jpg"
function Home(){
    return(
        <>
        <div className={Style["the_body"]}>
        <a href="/Ar"><button className={Style["m_b"]}>Ar</button></a>
         <h1 className={Style["Cv logo"]}>My CV</h1>
         <Image className={Style["my_img"]} alt="my_img" src={my_img}/>
        <h2 className={Style["m_information"]}>Main_information:</h2>
        <p className={Style["m_information_words"]}>Myname:Abdelrahman Gamal Ibrahim<br/>My birth day:8/10/2010<br/>My country:Egypt/Alsharkia/Abu kabir<br/>My age:15 years</p>
        <h2 className={Style["m_information"]}>Education_information:</h2>
        <p className={Style["m_information_words"]}>My School name:Abu maliha languages<br/>My grade:1.Secondary<br/>My Education language:English<br/>Position:in Alsharkia</p>
        <h2 className={Style["m_information"]}>My hobbies:</h2>
        <p className={Style["m_information_words"]}>1:Programing<br/>2:Football<br/>3:Video games<br/>4:Trading</p>
        <h2 className={Style["m_information"]}>My projects:</h2>
        <a href="my_project"><p className={Style["m_information_words"]}>1:Sign_up_project</p></a>
        </div>
        </> 
        ) 

}
export default Home
