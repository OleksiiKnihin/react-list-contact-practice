import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/usersSelectors';
import { deleteUser } from 'redux/usersSlice';
import { useDispatch } from 'react-redux';

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
              <td></td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{status}</td>
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
