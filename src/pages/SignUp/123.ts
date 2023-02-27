// import { ChangeEvent } from "react";
// import userAPI from "../../api/UserService";
// import UserCart from "../../components/userCart/UserCart";
// import User from "../../models/User.type";

// const UserContainer = () => {
//   const [input1, setInput1] = useState<string>("");
//   const [input2, setInput2] = useState<string>("");

//   const onChangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
//     const nameCharacter = e.target.value as string;
//     setInput1(nameCharacter);
//   };

//   const onChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
//     const nameCharacter = e.target.value as string;
//     setInput2(nameCharacter);
//   };

//   const body = { login: input1, password: input2 };

//   const { data, isLoading, error } = userAPI.useFetchAllUsersQuery(5);
//   const [
//     createUser,
//     {
//       error: createError,
//       isLoading: isCreateLoading,
//       data: { token: string },
//     },
//   ] = userAPI.useCreateUserMutation();

//   const [LoginUser /* , {} */] = userAPI.useUpdateUserMutation();
//   const [updateUser /* , {} */] = userAPI.useUpdateUserMutation();
//   const [deleteUser /* , {} */] = userAPI.useDeleteUserMutation();

//   const handlerCreate = async () => {
//     await createUser({ body });
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
//         {data && alert() && <Nav to="/create-game" />}
//       </div>
//     </div>
//   );
// };

// export default UserContainer;
