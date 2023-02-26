// import userAPI from "../../api/UserService";
// import UserCart from "../../components/userCart/UserCart";
// import User from "../../models/User.type";

// const UserContainer = () => {
//   const { data, isLoading, error } = userAPI.useFetchAllUsersQuery(5);
//   const [
//     createUser,
//     // {
//     //    Object with isLoading, error here
//     //   error: createError,
//     //   isLoading: isCreateLoading,
//     // },
//   ] = userAPI.useCreateUserMutation();
//   const [updateUser /* , {} */] = userAPI.useUpdateUserMutation();
//   const [deleteUser /* , {} */] = userAPI.useDeleteUserMutation();

//   const handlerCreate = async () => {
//     const name = "inputName";
//     await createUser({ name });
//   };

//   const handlerUpdate = (user: User) => {
//     updateUser(user);
//   };

//   const handlerRemove = (user: User) => {
//     deleteUser(user);
//   };

//   return (
//     <div>
//       <div className="user__list">
//         <button type="button" onClick={handlerCreate}>
//           Add new User
//         </button>
//         {isLoading && <h1>LOADING.....</h1>}
//         {error && <h1>ERROR.....</h1>}
//         {data &&
//           data.map((user) => (
//             <UserCart
//               update={handlerUpdate}
//               remove={handlerRemove}
//               key={user.id}
//               user={user}
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default UserContainer;
