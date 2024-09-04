import { render } from "@testing-library/react";
import { Button, Modal, Table } from "antd";
import { useState } from "react";
import AssignmentForm from "./AssignmentForm";
import { useSelector } from "react-redux";
function AssignmentTable(){
  const tableData=useSelector(state=>state.AssignmentTable)
  const [isModalOpen,setIsModalOpen]=useState(false)
  
//   const data=[
//     {
//     Sno: 1,
//     assignmentTitle: 'Assignment 1',
//     assignmentDescription:'This is the first assignment',
//     assignmentDueDate:'2024-08-12'
//   },

//   {
//     Sno: 2,
//     assignmentTitle: 'Assignment 2',
//     assignmentDescription:'This is the first assignment',
//     assignmentDueDate:'2024-08-12'
//   },
//   {
//     Sno: 3,
//     assignmentTitle: 'Assignment 3',
//     assignmentDescription:'This is the first assignment',
//     assignmentDueDate:'2024-08-12'
//   }
// ]


// const[tableData,setTableData]=useState([data])
 const columns=[
    {
        key:'Sno',
        title:'S.No',
        dataIndex:'Sno'
    },

    {
        key:'assignmentTitle',
        title:'AssignmentTitle',
        dataIndex: 'assignmentTitle'
    },
    {
        key:'assignmentDescription',
        title:'AssignmentDescription',
        dataIndex: 'assignmentDescription'
    },
    {
        key:'assignmentDueDate',
        title:'AssignmentDueDate',
        dataIndex: 'assignmentDueDate'
    },
    {
        key:'actions',
        title:'Actions',
        dataIndex:'actions',

        render : (_,record)=>{
            return(<div style={{display:"flex",gap:"10px"}}>
                    <Button type="primary" onClick={handleEdit}>Edit</Button>
                    <Button type="primary"danger onClick={()=>handleDelete(record)}>Delete</Button>
                  </div>
            )
            }
    }
   ]
   const handleEdit=()=>{
    setIsModalOpen(true)
   }
   const handleCancel=()=>{
    setIsModalOpen(false)
   }
  
  const handleDelete=(record)=> {
  const resultAfterDelete= tableData.filter((item)=>item.sno !== record.sno);
  // setTableData(resultAfterDelete)
 }
 
const modal = <Modal title="update assignment" open={isModalOpen}  onCancel={handleCancel}><AssignmentForm/></Modal>
 return(<div>{modal}<Table columns={columns} dataSource={tableData} style={{marginTop:"10px"}}></Table></div>
 )
}
export default AssignmentTable;