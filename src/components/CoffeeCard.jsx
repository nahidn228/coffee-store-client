import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const handleWatchClick = () => {
    Swal.fire({
      title: `Explore ${coffee.name}`,
      text: "Would you like to learn more about this coffee?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, show me!",
    });
  };

  const handleEditClick = () => {
    Swal.fire({
      title: `Edit ${coffee.name}`,
      text: "Feature not implemented yet!",
      icon: "warning",
    });
  };

  const handleDeleteClick = () => {
    Swal.fire({
      title: `Delete ${coffee.name}`,
      text: "Are you sure you want to delete this coffee?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "The coffee has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-200 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 py-4">
        <figure>
          <img
            src={coffee.photo}
            alt={coffee.name}
            className="w-48 h-48 object-cover rounded-l-lg"
          />
        </figure>
        <div className="flex w-full justify-between p-4 items-center">
          <div>
            <h2 className="card-title text-lg font-bold text-yellow-800">
              {coffee.name}
            </h2>
            <p className="text-sm text-gray-600">Quantity: {coffee.quantity}</p>
            <p className="text-sm text-gray-600">Taste: {coffee.taste}</p>
            <p className="text-sm text-gray-600">Category: {coffee.category}</p>
          </div>
          <div className="card-actions flex flex-col space-y-2">
            <button
              className="btn btn-ghost text-yellow-800 hover:text-yellow-600"
              onClick={handleWatchClick}
            >
              <FaEye className="mr-2" /> View
            </button>
            <button
              className="btn btn-ghost text-blue-800 hover:text-blue-600"
              onClick={handleEditClick}
            >
              <FaPen className="mr-2" /> Edit
            </button>
            <button
              className="btn btn-ghost text-red-800 hover:text-red-600"
              onClick={handleDeleteClick}
            >
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
