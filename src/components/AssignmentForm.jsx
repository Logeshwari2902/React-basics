import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addAssignment } from "../redux/AssignmentTableReducer";

function AssignmentForm(){
    const dispatch=useDispatch();
    const handleSubmit =(values)=>{
       console.log(values.assignmentTitle,values.assignmentDescription,values.courseDueDate)
        alert(`Assignment Title: ${values.assignmentTitle} Assignment Description:${values.assignmentDescription} Assignment DueDate:${values.assignmentDueDate}`)
        dispatch(addAssignment(values))
    } 
 return <Form onFinish={handleSubmit}>
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
}
export default AssignmentForm;