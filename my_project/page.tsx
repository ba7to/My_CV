import  Styles  from "./page.module.css"
import type { Metadata } from "next";
import facebook from "./img/تنزيل.png"
import google from "./img/تنزيل (1).png"
import Image from "next/image";
export const metadata: Metadata = {
  title: "Sign in",
  description: "",
};
function Home() {
    return(
    <>
    <div className={Styles["container"]} id="big_box">
        <h1>Sign In</h1>
        <div id="buttons">
            <a href="/my_project/Facebook"><button className={Styles["container_b1"]}><Image className={Styles["container_f1"]} alt="facebook_logo" src={facebook}/></button></a> 
            <a href="/my_project/Google"><button className={Styles["container_b2"]}><Image className={Styles["container_f2"]} alt="google_logo" src={google}/></button></a>
        </div>
            <h4>or use your email password</h4>
            <div id="form">
                <form>
                    <input required id="email" type="email" placeholder="Email"/>
                    <br/>
                    <br/>
                    <input required id="password" type="password" placeholder="password"/>
                    <br/>
                    <br/>
                    <button className={Styles["container_sign_in"]} id="button_sign_in">Sign in</button>
                </form>
                    <br/>
                    <br/>
                    <a href="/my_project/Forget_password"><button className={Styles["container_a"]} id="button_forget">Forget Your password?</button></a>
            </div>
            <div id="box2">
                <h1 className={Styles["container_hello"]}>Hello, Friends!</h1>
                <h3 className={Styles["container_register"]}>Register with your personal details to use all of site features</h3>
                <a href="/my_project/Sign_up"><button id="button_sign_up">Sign up</button></a>
            </div>
        </div>
    </>
    )
 }
export default Home