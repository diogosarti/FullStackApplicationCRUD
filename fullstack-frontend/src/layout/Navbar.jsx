import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav data-bs-theme="dark" className="navbar navbar-expand-md bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">Full Stack Application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className='btn btn-outline-light'>Add User</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
