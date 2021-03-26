

const UserInfo = ({ objectId, email, username  }) => {
  return(
    <tr>
          <td>{username}</td>
          <td>{email}</td>
          <td>{objectId}</td>
        
        </tr>
  );
};

export default UserInfo;
