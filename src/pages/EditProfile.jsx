import { useState } from "react";

export default function EditProfile() {
  const [showPopup, setShowPopup] = useState(false);

  const user = {
    name: "Sabari",
    email: "sabari@gmail.com",
    phone: "9876543210",
    password: "****",
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(); // or redirect to login if needed
  };

  return (
    <div className="relative z-50">
      {/* Trigger Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
      >
        Profile
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="absolute top-16 right-4 w-72 bg-white border shadow-xl rounded-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Profile Info</h2>
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Password:</strong> {user.password}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}