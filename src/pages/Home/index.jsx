import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import ListRaw from '../../Components/shared/List'

export default () => (
        <div className="flex flex-row overflow-hidden h-screen">
            <aside className="bg-gray-100 w-1/6 ">
                {/* Avatar */}
                <div className="flex p-5">
                    <img className="w-16 rounded-full" src="https://anydo-profile-pictures.s3.amazonaws.com/3affc658-79de-497d-a2a3-b5d091f4dec9" alt="Vcitor Diaz"/>
                    <figcaption className="font-medium ml-2 pt-2">
                        <div className="text-indigo-900 font-semibold">
                            Victor Diaz D.
                        </div>
                        <div className="text-gray-500  font-light">
                            vickoman  <Link to="/auth/login" className="text-base text-indigo-600">[ Logout ]</Link>
                        </div>
                    </figcaption>
                </div>

                <div className="text-center mt-4 px-4">
                    <button className="bg-indigo-800 py-2 px-16 rounded-2xl text-white font-light">
                            Create task <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <div className="mt-8 px-4">
                    <h3 className="sidebar-title">Quick Filter</h3>
                    <ul>
                        <li className="font-normal text-base mt-4">
                            Today <span className="bg-gray-200 rounded-full p-1 ml-1 text-xs text-gray-600 font-semibold">45</span>
                        </li>
                        <li className="font-normal text-base mt-4">
                            Incoming <span className="bg-gray-200 rounded-full p-1 ml-1 text-xs text-gray-600 font-semibold">100</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 px-4">
                    <h3 className="sidebar-title">Lists</h3>
                    <ListRaw />
                </div>

            </aside>
            <section className="bg-indigo-900 w-5/6">
            </section>
        </div>
)
