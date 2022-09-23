import React from 'react'

export const Header = ({ handleOpenSidebar }) => {
    return (
        <div className='home-content header-content'>
            <div className='row d-flex justify-content-between'>
                <div className='col-2 d-flex justify-content-start mt-2'>
                    <i className='bx bx-menu customMenuHeader mt-1' onClick={() => { handleOpenSidebar(1) }} ></i>
                    <span className="titleHeader mt-2">Dashboard</span>
                </div>
            </div>
        </div>
    )
}