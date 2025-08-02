import Styles1 from"./page.module.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Change_password",
  description: "",
};
function Home1() {
    return(
    <>
    <div className={Styles1["container_box1"]}>
                    <h1>Change_password</h1>
                    <br/>
                    <br/>
                    <form>
                    <input required id="password" type="password" placeholder="password"/>
                    <br/>
                    <br/>
                    <input required id="password" type="password" placeholder="Confirm_password"/>
                    <br/>
                    <br/>
                    <button>Change</button>
                    </form>
      </div>
    </>
    )
 }
export default Home1