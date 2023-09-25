import React, { useEffect, useState } from 'react'

import './style.css'
import Loader from './Loader'



const Data = () => {

    let [usrDta, setUsrDta] = useState([])


    const ftch = () => {

        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then((user) => {

                setUsrDta(user.data)

            })

    }

    useEffect = (() => {

        ftch()

    }, [])


    return (

        <div className='text-center' >

            <button className='btn btn-bg-info btn-primary text-dark' onClick={ftch} >GET USERS</button>


            <div className='d-flex felx-wrap'>


                {

                   (Object.keys(usrDta).length) ? usrDta.map((val) => {

                        return (

                            <div className="card m-5 brdr" style={{ width: "18rem" }}>
                                <img src={val.avatar} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 >{val.first_name} {val.last_name}</h3>

                                    <p>{val.email}</p>


                                </div>
                            </div>

                        ) 


                    })  : <Loader/>

                }



            </div>


        </div>
    )
}

export default Data
