import { Avatar, Image, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Logo from '../assets/Logo1.png'
import {UserOutlined,PieChartOutlined,LaptopOutlined,} from '@ant-design/icons';
import { Routes,Route, Link } from "react-router-dom";
function MainLayout(){
    return(
        <Layout style={{height:"100vh"}}>
            <Header style={{background:"white",display:"flex",justifyContent:"space-between"}}>
            <Image width="180px" height="42"
             src={Logo} preview={false}
             />
             <Avatar size={48} icon={<UserOutlined/>} style={{margin:"8px"}}/>
            </Header>
            <Layout>
            <Sider collapsible={true}>
                <Menu theme="dark">
                    <Menu.Item><PieChartOutlined/><Link to="/">Dashboard</Link></Menu.Item>
                    <Menu.Item><LaptopOutlined/><Link to="/courses">Courses</Link></Menu.Item>
                    <Menu.Item><UserOutlined/><Link to="/assignments">Assignments</Link></Menu.Item>
                </Menu>
            </Sider>
            <Content>
               <Routes>
                  <Route path="/" element={<p>Dashboard</p>}/>
                  <Route path="/courses"element={<p>Courses</p>}/>
                  <Route path="/assignments" element={<p>Assignments</p>}/>
               </Routes>   
            </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
}
export default MainLayout;