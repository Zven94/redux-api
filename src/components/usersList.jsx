import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/users/userSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users_arr, isLoading, error } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error}`;

  return (
    <ul>
      {users_arr.map((u) => (
        <li ket={u.id}> {u.name} </li>
      ))}
    </ul>
  );
}

export default UsersList;