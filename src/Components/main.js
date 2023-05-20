import React from 'react';

let Main=(props)=>{

console.log(props);
    let ShowProducts = props.Prod.map((data,i)=>{
        
        return(
            <>
                <div className='card' key={data.price}>
                    <div  className='img-container'>
                        <img src={data.image} alt="" />
                    </div>
                    <div className='card-info'>
                        <span className=''>
                            {data.name}
                        </span>
                        <button className=''><a href=""></a>Buy</button>
                    </div>
                </div>  
            </>
        );
    });
    console.log(ShowProducts)
    return(
        <>  
            <div className='card-container' > {ShowProducts} </div>
            {/* {console.log('inside rendirng the Data')} */}
        </>
    );
};

export default Main;