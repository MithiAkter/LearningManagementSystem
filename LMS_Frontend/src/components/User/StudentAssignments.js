import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl='http://localhost:8000/api';



function StudentAssignments() {
    const [assignmentData,setassignmentData]=useState([]);
    const [assignmentStatus,setassignmentStatus]=useState('');
    const studentId=localStorage.getItem('studentId');
    
    //Fetch all assignments when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/my-assignments/'+studentId)
            .then((res)=>{
                console.log(res.data)
                setassignmentData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);

    // Enroll Course Funtionality
    const markAsDone = (assignment_id,title,detail,student,teacher) =>{
        const _formData = new FormData();
        _formData.append('student_status',true);
        _formData.append('title',title);
        _formData.append('detail',detail);
        _formData.append('student',student);
        _formData.append('teacher',teacher);
        try{
            axios.put(baseUrl+'/update-assignment/'+assignment_id,_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Assignment Completed',
                        icon: 'success',
                        toast:true,
                        timer:10000,
                        position:'top-right',
                        timerProgressBar:true,
                        showConfirmButton:false
                    });
                    // setassignmentStatus('success');
                    window.location.reload();
                }
            });
        }catch(error){
            console.log(error);
        }        
}






    //page title
    useEffect(()=>{
        document.title='My Assignments';
    })
    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                            <h5 className="card-header">My Assignments</h5>
                                    <div className="card-body">
                                            <table className='table table-bordered'>
                                                <thead>
                                                    <tr style={{ textAlign: 'center', fontSize: '18px', }}>
                                                        <th>Title</th>
                                                        <th>Detail</th>
                                                        <th>Teacher</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {assignmentData.map((row,index)=> 
                                                    <tr style={{ textAlign: 'center'}}>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'green' }}>{row.title}</td>
                                                        <td style={{fontSize: '17px', textDecoration: 'none', color: 'green' }}>{row.detail}</td>
                                                        <td><Link  style={{fontSize: '17px', textDecoration: 'none', color: 'blue' }} to={`/teacher-detail/`+row.teacher.id}>{row.teacher.full_name}</Link></td>
                                                        <td>
                                                            {row.student_status == false &&
                                                                <button onClick={()=>markAsDone(row.id,row.title,row.detail,row.student.id,row.teacher.id)} className='btn btn-success btn-sm' 
                                                                style={{ width: '110px',  backgroundColor: 'rgb(31, 174, 91)', color: 'white',border: 'none' }} >Mark as done</button>
                                                            } 
                                                            {row.student_status == true &&
                                                                // <span className='badge bg-primary' style={{ width: '200px', borderRadius: '7px', padding: '8px' }}>Completed</span>
                                                                <span className='badge bg-primary' style={{ width: '110px', padding: '8px', borderRadius: '7px'}}>Completed</span>
                                                            } 
                                                        </td>
                                                    </tr>
                                                )}
                                                </tbody>
                                            </table>
                                    </div>
                            </div>
                    </section>
                </div>
        </div>
        )
    }
    
export default StudentAssignments;

