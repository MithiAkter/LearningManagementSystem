
import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import PythonSidebar from './PythonSidebar';
import ContentPython from './ContentPython';
import PythonInterpreter from './PythonInterpreter';




function PythonHome(){

    
// title
useEffect(()=>{
    document.title='Python';
});
    return(
       <div className="container-fluid mt-4">
            <div className="row">
                <aside className='col-md-2'>
                    <PythonSidebar />
                </aside>
                <section className='col-md-6'>
                    <ContentPython />
                </section>
                <section className='col-md-4'>
                    <PythonInterpreter />
                </section>
            </div>
       </div>
    )
}
export default PythonHome;