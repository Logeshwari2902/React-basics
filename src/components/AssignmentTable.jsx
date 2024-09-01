import { render } from "@testing-library/react";
import { Button, Table } from "antd";

function AssignmentTable(){
    const colums=[
    {
        key:'S.No',
        title:'S.No',
        dataIndex:'sno'
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
        render : ()=>{
            return(<div style={{display:"flex",gap:"10px"}}>
                    <Button type="primary">Edit</Button>
                    <Button type="primary"danger>Delete</Button>
                  </div>
            )
            }
    }
   ]
  const data=[
    {
    sno: 1,
    assignmentTitle: 'Assignment 1',
    assignmentDescription:'This is the first assignment',
    assignmentDueDate:'2024-08-12'
  },

  {
    sno: 2,
    assignmentTitle: 'Assignment 2',
    assignmentDescription:'This is the first assignment',
    assignmentDueDate:'2024-08-12'
  },
  {
    sno: 3,
    assignmentTitle: 'Assignment 3',
    assignmentDescription:'This is the first assignment',
    assignmentDueDate:'2024-08-12'
  }
]
    return( <Table columns={colums} dataSource={data} style={{marginTop:"10px"}}></Table>)
}
export default AssignmentTable;