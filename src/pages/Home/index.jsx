import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { gql, useQuery } from "@apollo/client";
import HomeBox from '../../Components/shared/HomeBox';
import ListRaw from '../../Components/shared/List';
import UserInfo from '../../Components/UserInfo';

const QUERY_LIST = gql`
    query QUERY_LIST{
        lists {
            id
            name
            comments {
                id
                comment
            }
            author {
                id
            }
            created
            updated
        }
    }
`;

const userInfo = {
    username: "vickoman",
    firstName: "Victor",
    lastName: "De La Gasca"
};

const Home  = (props) => {
    const { loading, error, data } = useQuery(QUERY_LIST);
    return (
        <div className="flex flex-row overflow-hidden h-screen">
            <aside className="bg-gray-100 w-1/6 ">
                <UserInfo data={userInfo} />

                <div className="text-center mt-4 px-4">
                    <button className="bg-indigo-800 py-2 px-16 rounded-2xl text-white font-light">
                            Create task <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                <HomeBox title="Quick Filter">
                    <ul>
                        <li className="font-normal text-base mt-4">
                            Today <span className="bg-gray-200 rounded-full p-1 ml-1 text-xs text-gray-600 font-semibold">45</span>
                        </li>
                        <li className="font-normal text-base mt-4">
                            Incoming <span className="bg-gray-200 rounded-full p-1 ml-1 text-xs text-gray-600 font-semibold">100</span>
                        </li>
                    </ul>
                </HomeBox>
                <HomeBox title="Lists">
                    <ListRaw data={data} loading={loading} error={error} />
                </HomeBox>
            </aside>
            <section className="bg-indigo-900 w-5/6">
            </section>
        </div>
    );
}
export default Home;
