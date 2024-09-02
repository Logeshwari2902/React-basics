import { render } from "@testing-library/react";
import { Button, Table } from "antd";

function CourseTable(){
    const colums=[
    {
        key:'S.No',
        title:'S.No',
        dataIndex:'sno'
    },

    {
        key:'CourseTitle',
        title:'CourseTitle',
        dataIndex: 'CourseTitle'
    },
    {
        key:'CourseDescription',
        title:'CourseDescription',
        dataIndex: 'CourseDescription'
    },
    {
        key:'CourseStartingDate',
        title:'CourseStartingDate',
        dataIndex: 'CourseStartingDate'
    },
    {
        key:'CourseEndingDate',
        title:'CourseEndingDate',
        dataIndex: 'CourseEndingDate'
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
     sno:1,
     CourseTitle:"course1",
     CourseDescription:"This is the first course",
     CourseStartingDate:"12-08-2024",
     CourseEndingDate:"12-31-2024"
    },
    {
        sno:2,
        CourseTitle:"course2",
        CourseDescription:"This is the second course",
        CourseStartingDate:"12-08-2024",
        CourseEndingDate:"12-31-2024"
       },
       {
        sno:3,
        CourseTitle:"course3",
        CourseDescription:"This is the third course",
        CourseStartingDate:"12-08-2024",
        CourseEndingDate:"12-31-2024"
       }

  
]
    return( <Table columns={colums} dataSource={data} style={{marginTop:"10px"}}></Table>)
}
export default CourseTable;