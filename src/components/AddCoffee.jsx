import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    // Send data to server
    fetch("https://coffee-store-server-bay-one.vercel.app/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 p-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-brown-900 mb-6">
          Add a New Coffee
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Form Row - Coffee Name & Quantity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="form-control">
              <span className="label-text font-semibold">Coffee Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full mt-2"
              />
            </label>

            <label className="form-control">
              <span className="label-text font-semibold">
                Available Quantity
              </span>
              <input
                type="text"
                name="quantity"
                placeholder="Enter available quantity"
                className="input input-bordered w-full mt-2"
              />
            </label>
          </div>

          {/* Form Row - Supplier & Taste */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="form-control">
              <span className="label-text font-semibold">Supplier Name</span>
              <input
                type="text"
                name="supplier"
                placeholder="Enter supplier name"
                className="input input-bordered w-full mt-2"
              />
            </label>

            <label className="form-control">
              <span className="label-text font-semibold">Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full mt-2"
              />
            </label>
          </div>

          {/* Form Row - Category & Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="form-control">
              <span className="label-text font-semibold">Category</span>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full mt-2"
              />
            </label>

            <label className="form-control">
              <span className="label-text font-semibold">Details</span>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full mt-2"
              />
            </label>
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <span className="label-text font-semibold">Photo URL</span>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full mt-2"
            />
          </div>

          <div className="text-center mt-8">
            <input
              type="submit"
              value="Add Coffee"
              className="btn bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition duration-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
