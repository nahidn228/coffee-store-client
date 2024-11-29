import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const data = useLoaderData();
  const [users, setUsers] = useState(data);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Delete from the DataBase
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
    // Implement the delete functionality
    console.log(`Delete user with id: ${id}`);
  };

  const handleEdit = (id) => {
    // Implement the edit functionality
    console.log(`Edit user with id: ${id}`);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center mb-6">
        Users List: {users.length}
      </h2>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Last Login</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t border-gray-300 hover:bg-gray-100 transition duration-300"
              >
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {user.createdAt ? user.createdAt : "Not available"}
                </td>
                <td className="px-4 py-2">{user.lastSignInTime ?user.lastSignInTime : "Not available" }</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-error flex items-center gap-2"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                  <button
                    onClick={() => handleEdit(user._id)}
                    className="btn btn-warning flex items-center gap-2"
                  >
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
