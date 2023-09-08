import {Link} from 'react-router-dom';

function PopularTeacher() {
    return (
        
        <div className="container mt-3">
            {/* Popular Courses Starts */}
                <h3 className="pb-1 mb-4">Popular Teachers</h3>
            <div className="row"> 
                <div className="col-md-3 mb-4">
                    <div className="card">
                    <Link to="/detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div> 


                <div className="col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="teacher.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div> 


                <div className="col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="teacher.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div> 


                <div className="col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="teacher.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Course title</a></h5>
                        </div>
                    </div>
                </div>   


                <div className="col-md-3 mb-4">
                    <div className="card">
                    <Link to="/detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div> 

                <div className="col-md-3 mb-4">
                    <div className="card">
                    <Link to="/detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div> 

                <div className="col-md-3 mb-4">
                    <div className="card">
                    <Link to="/detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div> 

                <div className="col-md-3 mb-4">
                    <div className="card">
                    <Link to="/detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                        </div>
                    </div>
                </div> 
            </div>
            {/* Popular Courses ends */}
            {/* Pagination Starts */}
            <nav aria-label="Page navigation example">
                <ul class="pagination mt-5 justify-content-center">
                    <li className ="page-item"><a className ="page-link" href="#">Previous</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">1</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">2</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">3</a></li>
                    <li className ="page-item"><a className ="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {/* Pagination Ends */}
        </div>
        
    );
  }
  
  export default PopularTeacher;