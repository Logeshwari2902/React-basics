import { Avatar, Button, Image, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Logo from '../assets/Logo1.png'
import {UserOutlined,PieChartOutlined,LaptopOutlined,} from '@ant-design/icons';
import { Routes,Route, Link } from "react-router-dom";
import Counter from "../components/counter";
import AdminPage from "../components/AdminPage";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import AssignmentTable from "../components/AssignmentTable";
import CourseTable from "../components/courseTable";
import LoginPage from "./LoginPage";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const FallbackComponent = ({error}) =>{
    return(
        <div>
             <h1>Something went Wrong</h1>
             <p>{error.message}</p>
        </div>
        
     )
 }

function MainLayout(){
    const {isLoggedIn,logout} = useContext(AuthContext)   
     return(
        isLoggedIn?
        <Layout style={{height:"100vh"}}>
            <Header style={{background:"white",display:"flex",justifyContent:"space-between"}}>
            <Image width="180px" height="42"
             src={Logo} preview={false}
             />
             <div>
             <Avatar size={48} icon={<UserOutlined/>} style={{margin:"8px"}}/>
             <Button type="primary"danger onClick={()=>logout()}>Logout</Button>
             </div>
            </Header>
            <Layout>
            <Sider collapsible={true}>
                <Menu theme="dark">
                    <Menu.Item><PieChartOutlined/><Link to="/">Dashboard</Link></Menu.Item>
                    <Menu.Item><LaptopOutlined/><Link to="/courses">Courses</Link></Menu.Item>
                    <Menu.Item><UserOutlined/><Link to="/assignments">Assignments</Link></Menu.Item>
                    <Menu.Item><UserOutlined/><Link to="/admin">Admin</Link></Menu.Item>
                </Menu>
            </Sider>
            <Content>
               <Routes>
                  <Route path="/" element={<p>Dashboard</p>}/>
                  <Route path="/courses"element={
                    <ErrorBoundary FallbackComponent={FallbackComponent}><Counter/></ErrorBoundary>}/>
                  <Route path="/assignments" element={<p>Assignments</p>}/>
                  <Route path="/admin" element={<AdminPage/>}>
                  <Route path="assignments" element={<AssignmentTable/>}></Route>
                  <Route path="courses" element={<CourseTable/>}></Route>
                  </Route>
                   
               </Routes>   
            </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>:<LoginPage/>
    );
}
export default MainLayout;