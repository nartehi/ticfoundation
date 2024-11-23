// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserProfile = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/user/users');
//         setUsers(response.data); 
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error loading users: {error.message}</div>;

//   return (
//     <div className="user-profile">
//       <h2 className='text-center mb-4'>User Profiles</h2>
//       <div className="row">
//         {users.map((user) => (
//           <div key={user.id} className="col-md-4 mb-3">
//             <div className="card border-primary" style={{ width: '60%', height: '120px', marginRight:'20px' }}>
//               <div className="card-body d-flex align-items-center">
//                 <img
//                   src={user.imageUrl || 'https://via.placeholder.com/100'} // Placeholder image if avatar is not available
//                   alt={`${user.name}'s avatar`}
//                   className="rounded-circle"
//                   style={{ width: '60px', height: '60px', marginRight: '10px' }} // Avatar size and margin
//                 />
//                 <div>
//                   <h5 className="card-title">{user.name}</h5>
//                   <p className="card-text">{user.username}</p>
//                   <p className="card-text">{user.email}</p>
//                   {/* Add more user details as needed */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
