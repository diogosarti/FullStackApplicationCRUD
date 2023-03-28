import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../layout/Loading';


export default function Home() {
    const [users, setUsers] = useState([]);
    const [loading, isLoading] = useState(true)
    const baseURL = "http://localhost:8080/users";

    const loadUsers = async () => {
        try {
            const res = await axios.get(baseURL)
            const data = res.data
            setUsers(data)
            isLoading(false)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div className='container text-center'>
            <div className='py-4'>
                {
                    loading ? (<Loading />) : (
                        <table className="table border shadow">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 && users.map((user, index) => (
                                    <tr>
                                        <th scope="row" key={user.id}>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button type="button" className='btn btn-primary mx-2' data-bs-toggle="modal" data-bs-target="#viewModal">View</button>
                                            <button className='btn btn-outline-primary mx-2' data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                                            <button className='btn btn-danger mx-2' data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>

                                            <div className="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="viewModelLabel">Detalhes</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            ...
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Usuario</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            ...
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                                                            <button type="button" className="btn btn-primary">Salvar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Deletar</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>Tem certeza que desja deletar este usuário?</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cancelar</button>
                                                            <button type="button" className="btn btn-danger">Excluir</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }

            </div>
        </div>
    )
}
