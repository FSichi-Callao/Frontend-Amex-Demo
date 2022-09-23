import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { sidebarRoutes } from '../../routes/sidebar';
import './styles.css'

export const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleOpenSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className={isSidebarOpen ? 'sidebar' : 'sidebar active'}>
            <div className="logo_content">
                <div className="logo">
                    <i className='bx bxl-c-plus-plus'></i>
                    <div className="logo_name">ElCallao</div>
                </div>
                <i className='bx bx-menu menu' id="btn" onClick={handleOpenSidebar}></i>
            </div>
            <ul className="nav_list">

                <li>
                    <i className='bx bx-search' ></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li>

                {sidebarRoutes.map((route) => (
                    <li>
                        <Link to={`${route.path}`}>
                            <i className={route.icon} ></i>
                            <span className="links_name">{route.name}</span>
                        </Link>
                        <span className="tooltip">{route.name}</span>
                    </li>
                ))}

            </ul>

            <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                        <img src={require("./img/profile.jpg")} alt="" />
                        <div className="name_job">
                            <div className="name">Facundo Sichi</div>
                            <div className="job">Web Designer</div>
                        </div>
                    </div>
                    <button className='bx bx-log-out exit' id="log_out" ></button>
                </div>
            </div>
        </div>
    )
}