
import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import CPPSidebar from './CPPSidebar';
import ContentCPP from './ContentCPP';
import CPP_Compiler from './CPP_Compiler';




function CPP_Home(){

    
// title
useEffect(()=>{
    document.title='C++';
});
    return(
       <div className="container-fluid mt-4">
            <div className="row">
                <aside className='col-md-2'>
                    <CPPSidebar />
                </aside>
                <section className='col-md-6'>
                    <ContentCPP/>
                </section>
                <section className='col-md-4'>
                    <CPP_Compiler/>
                </section>
            </div>
       </div>
    )
}
export default CPP_Home;