import { Button, Form,Input, Select} from "antd";
import { useState } from "react";
import AssignmentTable from "./AssignmentTable";
import { Outlet, useNavigate } from "react-router-dom";
import AssignmentForm from "./AssignmentForm";
function AdminPage(){

    const navigate = useNavigate();
    const [selected, setSelected] = useState("")
    const handleChange = (value) =>{
        console.log("value is",value)
        setSelected(value)
        console.log(selected)
        navigate("/admin/"+value)
    }
     const handleSubmit =(values)=>{
         console.log(values.assignmentTitle,values.assignmentDescription,values.courseDueDate)
         alert(`Assignment Title: ${values.assignmentTitle} Assignment Description:${values.assignmentDescription} Assignment DueDate:${values.assignmentDueDate}`)
    
      }
        // This is the code to send this data to backend and insert in database
    
    const courseform = <Form onFinish={handleSubmit}>
    <Form.Item label="Course title:" name="courseTitle">
        <Input placeholder="please enter your course title"/>
    </Form.Item>
    <Form.Item label="Course description:" name="courseDescription">
        <Input placeholder="please enter your course description"/>
    </Form.Item>
    <Form.Item label="Course starting date:" name="courseStartingDate">
        <Input type="date" placeholder="please enter your course starting date"/>
    </Form.Item>
    <Form.Item  label="Course ending date:" name="courseEndingDate">
        <Input type="date" placeholder="please enter your course ending date"/>
    </Form.Item>
    <Form.Item>
        <Button type="primary" htmlType="submit">Create Course</Button>
    </Form.Item>
    </Form>;
    
    const assignmentform = <Form onFinish={handleSubmit}>
       <Form.Item label="Assignment title:">
           <Input placeholder="please enter your assignment title" name="assignmentTitle"/>
       </Form.Item>
       <Form.Item label="Assignment description:">
           <Input placeholder="please enter your assignment description" name="assignmentDescription"/>
       </Form.Item>
       <Form.Item label="Assignment due date:">
           <Input type="date" placeholder="please enter your assignment due date" name="assignmentDueDate"/>
       </Form.Item>
       <Form.Item>
           <Button type="primary">Create Assignment</Button>
       </Form.Item>
       </Form>;
    
    return(
        <div style={{display:"flex",gap:"20px"}}>
        <div style={{width:"30%",
         margin:"50px",
         backgroundColor:"white",
         marginLeft:"50px",
         padding:"16px",
         marginTop:"10px"}}>
        <h1>AdminPage</h1> 


        <Select style={{minWidth:"100px",paddingBottom:"10px"}} onChange={handleChange} value={selected}>
            <Select.Option value="courses">Course</Select.Option>
            <Select.Option value="assignments">Assignment</Select.Option>
        </Select>
        {selected==="courses"? courseform : selected==="assignments"? <AssignmentForm/> :<p>please select any above option to continue</p>}
        </div>
         {/* <AssignmentTable/>   */}
         <Outlet></Outlet>
         </div>
        
    )
}
export default AdminPage;