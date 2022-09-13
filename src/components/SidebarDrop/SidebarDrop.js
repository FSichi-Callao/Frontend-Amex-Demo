import React, { useState } from 'react'
import { sidebarDropRoutes } from '../../routes/sidebarDrop';
import { LinksWithDropDown, LinksWithoutDropDown } from './LinksComponent';
import { getRoutesOrderForMenu, getRoutesOrderForSubMenu } from './utils';

export const SidebarDrop = ({ valueOpen, handleOpen }) => {

    const [routesValue, setRoutesValue] = useState(sidebarDropRoutes);

    const handleClickMenu = (id) => {
        var updateValue = getRoutesOrderForMenu(id, routesValue);
        setRoutesValue(updateValue);
    }

    const handleClickSubMenu = (idMenu, idSubMenu) => {
        var updatedValue = getRoutesOrderForSubMenu(idMenu, idSubMenu, routesValue);
        setRoutesValue(updatedValue);
    }

    return (
        <div className={valueOpen ? 'sidebar' : 'sidebar close'} >
            <div className="logo-details">
                <i className='bx bxl-c-plus-plus'></i>
                <span className="logo_name">ElCallao</span>
            </div>
            <ul className="nav-links" onClick={() => { handleOpen(2) }}>
                {routesValue.map((route, index) => (
                    (!route.dropdown)
                        ? <LinksWithoutDropDown route={route} />
                        : <LinksWithDropDown route={route} indexMenu={index} onHandleMenu={handleClickMenu} onHandleSubMenu={handleClickSubMenu} />
                ))}
            </ul>

            <div className="profile-details">
                <div className="profile-content">
                    <img src={require("../Sidebar/img/profile.jpg")} alt="" />
                </div>
                <div className="name-job">
                    <div className="profile_name">Facundo Sichi</div>
                    <div className="job">Web Desginer</div>
                </div>
                <i className='btn btn-outline-light bx bx-log-out'></i>
            </div>

        </div>
    )
}