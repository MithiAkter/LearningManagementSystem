import {useParams} from "react-router-dom";


function CourseDetail(){
    let {course_id} = useParams();
    return(
        <h2>Course Detail {course_id} </h2>
    );
}
export default CourseDetail;