import './style.css';
const TableUser = ({ users }) => {
  return (
    <>
      {!users?.length ? (
        <p>No data, please type the search input (at least 3 characters)</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Login</th>
              <th>Type</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.login}>
                <td>
                  <img src={user.avatar_url} alt="avatar" />
                </td>
                <td>{user.login}</td>
                <td>{user.type}</td>
                <td>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableUser;
