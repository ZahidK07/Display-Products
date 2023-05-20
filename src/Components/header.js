import React from 'react';

let Header=({logo,home,menu,about,social})=>{
    return(
        <>  
            <nav>
                <div className='nav-container'>
                        <a href="" className='logo'>{logo}
                            <div ></div>
                        </a>
                    <ul className='links'>
                        <li>
                            <a href="">{home}</a>
                        </li>

                        <li>
                            <a href="">{menu}</a>
                        </li>

                        <li>
                            <a href="">{about}</a>
                        </li>

                        <li>
                            <a href="">{social}</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header>
                <h1>Top Whey Protien Brands</h1>
            </header>

            <div className='search'>
                <input type='text' placeholder='Search Your Product here!' className='input'/>
            </div>
            
        </>
    );
};

export default Header;