// import React from 'react';

// const UserList = ({ users, onDeleteUser }) => {
//   return (
//     <div className="user-list">
//       <h2>User List</h2>
//       {users.length === 0 ? (
//         <p>No users found.</p>
//       ) :
//        (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id} className="user-item">
//               <div className="user-info">
//                 <strong>{user.name}</strong> ({user.email})
//                 <p>Role: {user.role}</p>
//               </div>
//               <button onClick={() => onDeleteUser(user.id)} className="delete-btn">
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserList;