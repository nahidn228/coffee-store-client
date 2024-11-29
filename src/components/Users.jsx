import { useLoaderData } from "react-router-dom";
const Users = () => {
  const data = useLoaderData();
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-center mb-6">Users List</h2>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user._id} className="border-t border-gray-300">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {user.createdAt ? user.createdAt : "Not available"}
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
