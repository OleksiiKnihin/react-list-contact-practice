import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/usersSelectors';
import { deleteUser, toggleStatus } from 'redux/usersSlice';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';

export const HomePage = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Option</th>
        </tr>
      </thead>

      <tbody>
        {users.map(({ id, name, age, status }, index) => {
          return (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>
                <Avatar name={name} size="40" round />
              </td>
              <td>{name}</td>
              <td>{age}</td>
              <td>
                <span onClick={() => dispatch(toggleStatus(id))}>
                  {status === 'yes' ? 'online' : 'offline'}
                </span>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(deleteUser(id))}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
