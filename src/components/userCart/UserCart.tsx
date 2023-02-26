// import { ChangeEvent, FC } from "react";
// import User from "../../models/User.type";

// interface UserProps {
//   user: User;
//   update(user: User): void;
//   remove(user: User): void;
// }

// const UserCart: FC<UserProps> = ({ user, update, remove }) => {
//   const handlerRemove = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     remove(user);
//   };

//   let newName = "";

//   const handlerUpdate = (e: React.MouseEvent) => {
//     e.stopPropagation();

//     update({ ...user, name: `${newName}` });
//   };

//   const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
//     newName = e.target.value;
//   };

//   return (
//     <div className="user">
//       <input onChange={changeInput} value={user.name} />
//       <button onClick={handlerUpdate} type="button">
//         Update
//       </button>
//       <button onClick={handlerRemove} type="button">
//         Update
//       </button>
//       {user.id}. {user.name}
//     </div>
//   );
// };

// export default UserCart;
