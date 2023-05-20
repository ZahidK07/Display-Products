import React from 'react';

let Footer=(props)=>{
    return(
      <>
        <div className='footer'>
            <p> <span>&copy; {props.year}</span> {props.developer}</p>
        </div>
      </>  
    );
};

export default Footer;
