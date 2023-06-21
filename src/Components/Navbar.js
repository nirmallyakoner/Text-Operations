import React from "react";


export default function Navbar(props){
   
    return(
        
        <>       
        <nav >

        <section className='leftSection'>
          <ul className='navItems'>
            <li className="navItems1">{props.navItems1}</li>
            <li className="navItems2">{props.navItems2}</li>
            <li className="navItems3">{props.navItems3}</li>
          </ul>
        </section>

        <section className='rightSection'>
          <ul  className='navItems'>
            <li className="navItems4">{props.navItems4}</li>
          </ul>   
        </section>
        </nav>
        <hr />
        </>

    )
}

