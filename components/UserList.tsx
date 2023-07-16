'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface User {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

interface UsersProps {
    users?: User[]
}

const UserList = ({users}:UsersProps) => {
    const router = useRouter();

    return (  
        <ul className='mx-auto px-5'>
            {users?.map(user => (
                <li key={user.id} className='mb-4' onClick={() => router.push(`/users/${user.id}`)}>
                    <div>
                        <h3>{user.id}. {user.first_name} {user.last_name}</h3>
                        <Image priority src={user.avatar} alt={`Avatar de ${user.first_name}`} width={200} height={200}/>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default UserList;