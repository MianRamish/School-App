import React,{useState} from 'react';
import '../Components/leftnavbar.css';

function Leftnavbar() {
    const [clicked, setClicked] = useState(true);

    const toggle = () => setClicked(!clicked);
   
    return (
        <>
         <nav className='leftnav'>
            <ul className='navmenu'>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-gauge"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-user-graduate"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-user-tie"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-file-invoice-dollar"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-address-card"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-file-circle-check"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-certificate"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-gear"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-bullhorn"></i></a>
                </li>
                <li className='navitems'>
                    <a className='navlinks'><i class="fa-solid fa-gears"></i></a>
                </li>
            </ul>
            
           </nav>
        <input type="checkbox" id="menu-toggle" />
<label for="menu-toggle" className="menu-icon"><i class="fa fa-bars"></i></label>


        <div class="slideout-sidebar">
        <ul className="navmenu2">
                <li className='navlist2'>
                <a   href="#" className="navlinks2" > DashBoard </a>
                   </li>
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Students</a></li>
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Staff</a></li>
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Fee</a></li>
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Result</a></li>
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Expenses</a></li>
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Certificates</a></li>
                
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Setting</a></li>
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Announcement</a></li>
                <li className='navlist2'>
                <a href='#' className='navlinks2'>Website Setting</a></li>
            </ul>
</div>
           </>
    )
}

export default Leftnavbar;
