import Styles1 from"./page.module.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign up",
  description: "It is a sign up site to get to 7ity web for crack games",
};
function Home1() {
    return(
    <>
    <div className={Styles1["container_box1"]}>
                    <h1>Sign_up</h1>
                    <br/>
                    <br/>
                    <form>
                    <input required  type="Email" placeholder="Email"/>
                    <br/>
                    <br/>
                    <input required id="password" type="password" placeholder="password"/>
                    <br/>
                    <br/>
                    <input required id="password" type="password" placeholder="Confirm_password"/>
                    <br/>
                    <br/>
                    <button>Sign_up</button>
                    </form>
      </div>
    </>
    )
 }
export default Home1