import { nanoid } from "nanoid";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components";
import { useAuth } from "../../context";

function UserProfile() {
  document.title = "Profile";
  const [activeState, setActiveState] = useState(true);
  const address = useRef("");
  const [newAddressInput, setNewAddressInput] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      _id: nanoid(),
      address: `#107, 8A, THE BAY, RMZ Eco World Rd, opposite to Adarsh
      Palm, Bellandur, Bengaluru, Karnataka 560103`,
    },
  ]);
  const { userState } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <main className=" mg-b-6">
        <h2 className="ta-center">Account</h2>
        <div className="w-26 mg-i-auto bg-clr-gray-200 brd-sm o-hide">
          <div className="fx ">
            <div
              className={`ta-center w-half cr-pt ${
                activeState
                  ? "clr-gray-50 bg-clr-gray-800"
                  : "clr-gray-800 bg-clr-gray-400"
              } `}
              onClick={() => {
                setActiveState(true);
              }}
            >
              Profile
            </div>
            <div
              className={`ta-center w-half cr-pt ${
                !activeState
                  ? "clr-gray-50 bg-clr-gray-800"
                  : "clr-gray-800 bg-clr-gray-400"
              }`}
              onClick={() => {
                setActiveState(false);
              }}
            >
              Address
            </div>
          </div>
          <div className="pd-1">
            {activeState ? (
              <>
                <h3>User Details</h3>
                <p>
                  Name:
                  {" " +
                    userState?.foundUser?.firstName +
                    " " +
                    userState?.foundUser?.lastName}
                </p>
                <p>
                  email:
                  {" " + userState?.foundUser?.email}
                </p>
                <button
                  className="bg-clr-red-500 pd-i-1 pd-b-05 mg-b-1 brd-sm fw-600"
                  onClick={() => {
                    localStorage.setItem("JWT_TOKEN", "");
                    navigate("/");
                  }}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <h3>Address</h3>
                {addresses.map((addr, idx) => (
                  <div className="fx fx-ai-fs" key={addr._id}>
                    <input
                      className="mg-05"
                      type="radio"
                      id={`address${idx}`}
                      name="address"
                      value="address"
                    />
                    <label htmlFor={`address${idx}`}>
                      <address>{addr.address}</address>
                    </label>
                  </div>
                ))}
                {newAddressInput ? (
                  <div className="bg-clr-gray-300 pd-i-1">
                    <label htmlFor="new-address">Address:</label>

                    <textarea
                      type="text"
                      id="new-address"
                      name="new-address"
                      placeholder="Enter Your address here"
                      ref={address}
                    />
                    <button
                      className="bg-clr-yellow-300 w-full fw-600 f-1 brd-sm pd-b-025 mg-b-05"
                      onClick={() => {
                        setAddresses((prev) => [
                          ...prev,
                          {
                            _id: nanoid(),
                            address: address.current.value,
                          },
                        ]);
                        setNewAddressInput(false);
                      }}
                    >
                      Add Address
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-clr-yellow-300 w-full fw-600 f-1 brd-sm pd-b-025 mg-b-05"
                    onClick={() => setNewAddressInput(true)}
                  >
                    <i className="fa-solid fa-plus"></i>Add new address
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export { UserProfile };
