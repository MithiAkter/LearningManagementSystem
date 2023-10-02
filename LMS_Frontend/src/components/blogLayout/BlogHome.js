
import React from 'react';
import {useEffect} from 'react';
import BlogLayout from './BlogLayout';
import BlogPost from './Blogpost';




function BlogHome(){
    useEffect(()=>{
        document.title='My Blog';
    });
    return(
       <div className="container-fluid mt-4">
            <div className="row">
                <aside className='col-md-7'>
                    <BlogLayout />
                </aside>
                <section className='col-md-5'>
                    <BlogPost />
                </section>
            </div>
       </div>
    )
}
export default BlogHome;