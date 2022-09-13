import React from 'react'
import { Link } from 'react-router-dom'

export const LinksWithoutDropDown = ({ route }) => {
    return (
        <li key={route.name}>
            <Link to={`${route.path}`} >
                <i className={route.icon}></i>
                <span className="link_name">{route.name}</span>
            </Link>
            <ul className="sub-menu blank">
                <SimpleLinkOnDropDown route={route}/>
            </ul>
        </li>
    )
}


export const LinksWithDropDown = ({ route, indexMenu, onHandleMenu, onHandleSubMenu }) => {
    return (
        <li className={route.open ? 'showMenu' : ''}>
            <div className="iocn-link" onClick={() => { onHandleMenu(indexMenu) }}>
                <a href="#">
                    <i className={route.icon} ></i>
                    <span className="link_name">{route.name}</span>
                </a>
                <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
                <li><a className="link_name" href="#">{route.name}</a></li>
                {route.submenu.map((subroute, index) => (
                    <>
                        {
                            (subroute.dropdown)
                                ? <DropDownLinkOnDropDown route={subroute} indexMenu={indexMenu} indexSubMenu={index} handleMenu={onHandleSubMenu} />
                                : <SimpleLinkOnDropDown route={subroute} />
                        }
                    </>
                ))}
            </ul>
        </li>
    )
}


const SimpleLinkOnDropDown = ({ route }) => {
    return (
        <li key={route.path}>
            <Link to={`${route.path}`}>{route.name}</Link>
        </li>
    )
}

const DropDownLinkOnDropDown = ({ route, indexMenu, indexSubMenu, handleMenu }) => {
    return (
        <li className={route.open ? 'showSubMenu' : ''}>
            <div className="iocn-link" onClick={() => { handleMenu(indexMenu, indexSubMenu) }}>
                <a href="#"> <span className="link_subname">{route.name}</span> </a>
                <i className='bx bxs-chevron-down arrow-sub'></i>
            </div>
            <ul className="sub-sub-menu">
                {route.menu.map((option) => (
                    <SimpleLinkOnDropDown route={option} />
                ))}
            </ul>
        </li>
    )
}