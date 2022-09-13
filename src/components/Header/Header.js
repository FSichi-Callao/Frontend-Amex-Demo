import React from 'react'

export const Header = ({ handleOpenSidebar }) => {
    return (
        <div className='home-content header-content'>
            <div className='row d-flex justify-content-between'>

                <div className='col-2 d-flex justify-content-start mt-2'>
                    <i className='bx bx-menu customMenuHeader mt-1' onClick={() => { handleOpenSidebar(1) }} ></i>
                    <span className="titleHeader mt-2">Dashboard</span>
                </div>

                <div className='col-8 col-lg-7 col-md-10 d-flex justify-content-end'>
                    <div className='col-8 d-flex justify-content-end'>
                        <p className='me-4' style={{ marginTop: '18px' }}><span className='titleOptionHeader'>Environment:</span></p>
                        <div className='mt-2'>
                            <button className='btn btn-warning mt-1'>Program Manager: <span className='selectedOptionHeader ms-2'>El callao</span></button>
                        </div>
                    </div>
                    <div className='col-2 d-flex justify-content-end'>
                        <div className='mt-2'>
                            <button type="button" className="btn btn-outline-light mt-1"><i className="fa fa-user-o me-2"></i> Profile</button>
                        </div>
                    </div>
                    <div className='col-2 d-flex justify-content-center'>
                        <div className='mt-2'>
                            <button type="button" className="btn btn-outline-danger mt-1"><i className="fa fa-circle-o-notch"></i> Logout</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}