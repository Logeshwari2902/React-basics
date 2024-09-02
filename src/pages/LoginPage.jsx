import Login from "../components/Login";
import Signup from "../components/Signup";
import Logo from '../assets/Logo1.png';
import { Image, Tabs } from "antd";

function LoginPage(){
  const loginContainerStyle={
    display:"flex",
    justifyContent:"Center",
    alignItems:"center",
    height:"100vh",
    width:"100vw",
    flexDirection:"column",
    backgroundColor:"#f0f2f5"
  }
    return(
      <div style={loginContainerStyle}>
        <Image src={Logo} preview={false}></Image>
        <Tabs>
           <Tabs.TabPane tab="Login" key="1">
           <Login/>
           </Tabs.TabPane>
           <Tabs.TabPane tab="Signup" key="2">
           <Signup/>
           </Tabs.TabPane>
        </Tabs>
    </div>
    );

}
export default LoginPage;