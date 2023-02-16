import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';

import styles from './user.module.scss';

export default function User({ user }) {

    const { query } = useRouter();

    console.log(user);

    return (
        <MainContainer title={`Пользователь ${user.username}`}>
            <div>
                <h1>
                    Пользователь с id <span className={styles.id}> {query.id} </span>
                </h1>

                <div>
                    {user.name}
                </div>
                <div>
                    {user.username}
                </div>
                <div>
                    {user.phone}
                </div>
                <div>
                    {user.company.name}
                </div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: { user },
    }
}