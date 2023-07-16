import UserList from '../../components/UserList';

const fetchUsers = async() => {
    const res = await fetch("https://reqres.in/api/users");
    const {data} = await res.json();
    return data;
}

const Users = async () => {
    const users = await fetchUsers();
    
    return (
        <>
            <h1 className="text-2xl text-center">Users</h1>
            <UserList users={users} />
        </>
    );
}

export default Users;