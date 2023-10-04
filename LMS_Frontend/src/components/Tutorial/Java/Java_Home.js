
import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';

import JavaSidebar from './JavaSidebar';
import ContentJava from './ContentJava';
import Java_Compiler from './Java_Compiler';


function Java_Home(){

    
// title
useEffect(()=>{
    document.title='Java Programming';
});
    return(
       <div className="container-fluid mt-4">
            <div className="row">
                <aside className='col-md-2'>
                    <JavaSidebar />
                </aside>
                <section className='col-md-6'>
                    <ContentJava/>
                </section>
                <section className='col-md-4'>
                    <Java_Compiler/>
                </section>
            </div>
       </div>
    )
}
export default Java_Home;