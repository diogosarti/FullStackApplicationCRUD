import axios from 'axios'
import React, { useState } from 'react'

export default function AddUser() {

    const BASE_URL = "http://localhost:8080"

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const { name, username, email } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(BASE_URL + "/user", user)
            setUser({
                name: "",
                username: "",
                email: ""
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title text-center fs-5" id="addUserModalLabel">Adicionar Usuário</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="modal-body">
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                                    <label htmlFor='name' className='formLabel mt-2'>Name</label>
                                    <input type={"text"} className={"form-control mt-2"} value={name} onChange={(e) => onInputChange(e)} placeholder="Digite o nome" name='name' />
                                    <label htmlFor='Username' className='formLabel mt-2'>Username</label>
                                    <input type={"text"} className={"form-control mt-2"} value={username} onChange={(e) => onInputChange(e)} placeholder="Digite o username" name='username' />
                                    <label htmlFor='Email' className='formLabel mt-2'>Email</label>
                                    <input type={"text"} className={"form-control mt-2"} value={email} onChange={(e) => onInputChange(e)} placeholder="Digite o email" name='email' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                    </div>
                </form>

            </div>
        </div>


    )
}
