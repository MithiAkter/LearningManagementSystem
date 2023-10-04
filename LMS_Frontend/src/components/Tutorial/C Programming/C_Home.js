
import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import CSidebar from './CSidebar';
import ContentC from './ContentC';
import C_Compiler from './C_Compiler';




function C_Home(){

    
// title
useEffect(()=>{
    document.title='C Programming';
});
    return(
       <div className="container-fluid mt-4">
            <div className="row">
                <aside className='col-md-2'>
                    <CSidebar />
                </aside>
                <section className='col-md-6'>
                    <ContentC/>
                </section>
                <section className='col-md-4'>
                    <C_Compiler/>
                </section>
            </div>
       </div>
    )
}
export default C_Home;