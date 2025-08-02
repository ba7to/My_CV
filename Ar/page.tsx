import Style from "./page.module.css"
import Image from "next/image"
import my_img from "./img/WhatsApp Image 2025-06-30 at 00.45.32_bd20a6f8.jpg"
function Home2(){
    return(
        <>
        <div className={Style["the_body"]}>
        <a href="./"><button className={Style["m_b"]}>en</button></a>
         <h1 className={Style["Cv logo"]}>My CV</h1>
         <Image className={Style["my_img"]} alt="my_img" src={my_img}/>
        <h2 className={Style["m_information"]}>معلومات رئيسية:</h2>
        <p className={Style["m_information_words"]}>اسمي:عبدالرحمن جمال محمد ابراهيم<br/>تاريخ ملادي:8/10/2010<br/>دولتي: مصر/الشرقية/ابوكبير<br/>عمري:15 سنة</p>
        <h2 className={Style["m_information"]}>معلومات تعلمية:</h2>
        <p className={Style["m_information_words"]}>اسم مدرستي:ابومليحة للغات<br/>الصف:الاول الثانوي<br/>لغت التعلم:الانجليزية<br/>المكان:في الشرقية</p>
        <h2 className={Style["m_information"]}>هواياتي:</h2>
        <p className={Style["m_information_words"]}>1:البرمجة<br/>2:كرة القدم<br/>3:العاب الفديو<br/>4:التجارة</p>
        <h2 className={Style["m_information"]}>مشاريعي:</h2>
        <a href="my_project"><p className={Style["m_information_words"]}>1:مشروع تسجيل الدخول</p></a>
        </div>
        </> 
        ) 

}
export default Home2