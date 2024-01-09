import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './Books.css';

function Books() {
    
// title
useEffect(()=>{
document.title='All Books';
});
    
    return (
        
        <div className="container mt-3">
            
            <h3 className="pb-1 mb-1">All Category of Books which we have:</h3>
            <div className="row mb-4">
                <div className="col-md-4 mb-4">
                    <div className="mycard">
                        <div className="card-body">
                            <h5 className='heading'>C Programming</h5>
                            <iframe className='MyPdf' src="book/CProgramming.pdf"></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="mycard">
                        <div className="card-body">
                            <h5 className='heading'>Beginning Programming with C</h5>
                            <iframe className='MyPdf' src="book/BeginningProgrammingwithCForDummies-Gookin,Dan.pdf"></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="mycard">
                        <div className="card-body">
                            <h5 className='heading'>Artificial Intelligence</h5>
                            <iframe className='MyPdf' src="book/ArtificialIntelligence.pdf"></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="mycard">
                        <div className="card-body">
                            <h5 className='heading'>Hacking Bangla Ebook</h5>
                            <iframe className='MyPdf' src="book/HackingBanglaEbook.pdf"></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="mycard">
                        <div className="card-body">
                            <h5 className='heading'>operating System Concepts 9th Edition</h5>
                            <iframe className='MyPdf' src="book/operating-system-concepts-9th-edition.pdf"></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="mycard">
                        <div className="card-body">
                            <h5 className='heading'>Fundamentals Of Neural Networks</h5>
                            <iframe className='MyPdf' src="book/FundamentalsOfNeuralNetworksbyLaureneFausett.pdf"></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
  }
  
  export default Books;