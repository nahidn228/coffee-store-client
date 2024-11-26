import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updatedCoffee);

    //Send data to server

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Update successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24 max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-extrabold text-center">Update {name}</h2>

      <form onSubmit={handleUpdateCoffee} className="space-y-6 mt-10">
        {/* Form name and Quantity row */}
        <div className="md:flex items-center justify-center gap-4">
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold">Coffee Name</span>
            </div>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Coffee Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold">
                Available Quantity
              </span>
            </div>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Form Supplier & Taste row */}
        <div className="md:flex items-center justify-center gap-4">
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold">Supplier Name</span>
            </div>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter coffee taste"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Form Category & Details row */}
        <div className="md:flex items-center justify-center gap-4">
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold">Category</span>
            </div>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full md:w-1/2">
            <div className="label">
              <span className="label-text font-semibold">Details</span>
            </div>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        {/* Form photo URL row */}
        <div className="">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-[#D2B48C]"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
