import Image from 'next/image';

const getUser = async (id: number | string):Promise<User> => {
    const resp = await fetch(`https://reqres.in/api/users/${id}`);
    const {data} = await resp.json();
    return data;
}

interface User{
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

interface paramsProps {
    params: UserDetailsProps
}

interface UserDetailsProps {
    id: number | string
}

const UserDetails = async ({params}:paramsProps) => {
    const user = await getUser(params.id)

    return (
        <div>
            <h1>User Details:</h1>
            <Image priority className='rounded-full' src={user.avatar} alt={user.first_name} width={130} height={130} quality={100}/>
            <p>
                {user.id} - {user.first_name} {user.last_name}
            </p>
            <p>{user.email}</p>
        </div>
    );
}

export default UserDetails;