import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SidebarDrop } from '../components/SidebarDrop/SidebarDrop';
import { Header } from '../components/Header/Header';
/* PAGES */
import { Dashboard } from '../pages/Dashboard';
import { UserList } from '../pages/UserList';

import '../App.css'

export const Main = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleOpenSidebar = (id) => {
        (id === 1) ? setIsSidebarOpen(!isSidebarOpen) : setIsSidebarOpen(true);
    }

    return (
        <BrowserRouter>

            <SidebarDrop valueOpen={isSidebarOpen} handleOpen={handleOpenSidebar} />

            <section className="home-section">

                <Header handleOpenSidebar={handleOpenSidebar} />

                <div className='page-content'>
                    <Routes>
                        <Route exact path='/' element={<Dashboard />}></Route>
                        <Route exact path='/accounts' element={<UserList />} />
                    </Routes>
                </div>

            </section>

        </BrowserRouter>
    )
}