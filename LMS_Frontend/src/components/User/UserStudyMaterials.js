import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const baseUrl='http://localhost:8000/api';

function UserStudyMaterials() {
    const [studyData,setstudyData]=useState([]);
    const [totalResult,settotalResult]=useState([0]);
    const{course_id}=useParams();

    //Fetch courses when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/user/study-materials/'+course_id)
            .then((res)=>{
                settotalResult(res.data.length)
                setstudyData(res.data)
             });
        }catch(error){
            console.log(error);
        }

    },[]);

    //for downloading the file
    const downloadFile = (file_url)=>{
        window.location.href=file_url;
    }
    useEffect(()=>{
        document.title='My Study Material';
    })
    return (
            <div className="container mt-4">
                <div className="row">
                    <aside className='col-md-3'>
                        <Sidebar />
                    </aside>
                    <section className='col-md-9'>
                            <div className="card">
                                <h5 className="card-header">All Study Materials - [{totalResult}]</h5>
                                    <div className="card-body">
                                        <table className='table table-bordered'>
                                                <thead style={{ textAlign: 'center' }}>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Detail</th>
                                                        <th>Upload</th>
                                                        <th>Remarks</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{ textAlign: 'center' }}>
                                                        {studyData.map((row,index)=>
                                                            <tr> 
                                                                <td style={{ textDecoration: 'none', color: 'green' }}>{row.title}</td>
                                                                <td style={{ textDecoration: 'none', color: 'green' }}>{row.description}</td>
                                                                <td>
                                                                    {/* <Link to={row.upload}>File</Link> */}
                                                                    <button className='btn btn-outline-primary' onClick={()=>downloadFile(row.upload)}>Download File</button>
                                                                </td>
                                                                <td>{row.remarks}</td>
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
    
export default UserStudyMaterials;


        
        