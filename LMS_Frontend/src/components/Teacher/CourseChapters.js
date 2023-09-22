import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl='http://localhost:8000/api';

function AllChapters() {
    const [chapterData,setchaptereData]=useState([]);
    const [totalResult,settotalResult]=useState([0]);
    const{course_id}=useParams();

    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course-chapters/'+course_id)
            .then((res)=>{
                settotalResult(res.data.length)
                setchaptereData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);
    //Delete Data
    const Swal = require('sweetalert2')
    const handleDeleteClick=(chapter_id)=>{
        Swal.fire({
            title: 'Confirm!',
            text: 'Are you sure you want to delete this data?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton:true
          }).then((result)=>{
            if(result.isConfirmed){
                try{
                    axios.delete(baseUrl+'/chapter/'+chapter_id)
                    .then((res)=>{
                        Swal.fire('success','Data has been deleted.');
                            try{
                                axios.get(baseUrl+'/course-chapters/'+course_id)
                                .then((res)=>{
                                    settotalResult(res.data.length)
                                    setchaptereData(res.data)
                                });
                            }catch(error){
                                console.log(error);
                            }
                        // console.log(res);
                        // settotalResult(res.data.length);
                        // setchaptereData(res.data);
                     }); 
                }catch(error){
                    Swal.fire('error','Data has not been deleted!!');
                }
            }else{
                Swal.fire('error','Data has not been deleted!!');
            }
          });
    }
    useEffect(()=>{
        document.title='All Chapters';
    })
    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <TeacherSidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                                <h5 className="card-header">All Chapters - [{totalResult}]</h5>
                                    <div className="card-body">
                                        <table className='table table-bordered'>
                                                <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Video</th>
                                                        <th>Remarks</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        {chapterData.map((chapter,index)=>
                                                            <tr> 
                                                                <td> 
                                                                    <Link to={`delete-chapter`+chapter.id}>{chapter.title}</Link>
                                                                </td>
                                                                   
                                                                    <td>
                                                                        <video controls width="250">
                                                                            <source src={chapter.video} type="video/webm" />
                                                                            <source src={chapter.video} type="video/mp4" />
                                                                            
                                                                            Sorry, your browser doesn't suport embadded video.
                                                                        </video>
                                                                    </td>

                                                                <td>{chapter.remarks}</td>

                                                                <td>
                                                                    <Link  to={`/edit-chapter/`+chapter.id} className='btn btn-success btn-sm text-white'><i class="bi bi-pencil-square"></i></Link>
                                                                    <button onClick={()=>handleDeleteClick(chapter.id)} to={`delete-chapter`+chapter.id} className='btn btn-danger btn-sm ms-1'><i class="bi bi-trash"></i></button>
                                                                    
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
    
export default AllChapters;


        
        