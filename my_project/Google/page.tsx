import  Styles1 from "./page.module.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Google Sign in",
  description: "",
};
function Home1() {
    return(
    <>
    <div className={Styles1["container_box1"]}>
                    <h1>Google</h1>
                    <br/>
                    <br/>
                    <form>
                    <input required  type="Email" placeholder="Email"/>
                    <br/>
                    <br/>
                    <input required id="password" type="password" placeholder="password"/>
                    <br/>
                    <br/>
                    <button>Sign_in</button>
                    </form>
      </div>
    </>
    )
 }
export default Home1