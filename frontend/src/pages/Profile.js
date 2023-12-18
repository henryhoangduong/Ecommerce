import React, { useState } from "react";
import avatar from "../asset/img/avata.jpg";
import Header from "../layouts/Header";
import Footer from '../layouts/Footer'
import useFetch from "../hook/useFetch";

function Profile() {
    const [activeTab, setActiveTab] = useState("profile-overview");

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
  };
  // const [loading, error, data, setdata] = useFetch(
  //   "http://127.0.0.1:8000/api/read/orders/user"
  // );
  // if (loading) return <p>loading</p>;
  // if (error) return <p>error</p>
  // console.log(data)
  const orders = [
    {
      id: 1,
      customer_id: 2,
      order_date: "2023-11-25",
      total_amount: "20000000",
      payment_method: "cash",
    },
    {
      id: 2,
      customer_id: 2,
      order_date: "2023-11-25",
      total_amount: "20000000",
      payment_method: "cash",
    },
    {
      id: 3,
      customer_id: 2,
      order_date: "2023-11-25",
      total_amount: "20000000",
      payment_method: "cash",
    },
    {
      id: 4,
      customer_id: 2,
      order_date: "2023-11-25",
      total_amount: "20000000",
      payment_method: "cash",
    },
    {
      id: 5,
      customer_id: 2,
      order_date: "2023-11-25",
      total_amount: "20000000",
      payment_method: "cash",
    },
    {
      id: 6,
      customer_id: 2,
      order_date: "2023-11-25",
      total_amount: "20000000",
      payment_method: "cash",
    },
    {
      id: 7,
      customer_id: 2,
      order_date: "2023-11-25",
      total_amount: "20000000",
      payment_method: "cash",
    },
    {
      id: 8,
      customer_id: 2,
      order_date: "2023-11-29",
      total_amount: "20000000",
      payment_method: "cash",
    },
    {
      id: 9,
      customer_id: 2,
      order_date: "2023-12-05",
      total_amount: "4000000",
      payment_method: "cash",
    },
    {
      id: 10,
      customer_id: 2,
      order_date: "2023-12-12",
      total_amount: "1919000",
      payment_method: "cash",
    },
    {
      id: 11,
      customer_id: 2,
      order_date: "2023-12-16",
      total_amount: "2000000",
      payment_method: "cash",
    },
    {
      id: 12,
      customer_id: 2,
      order_date: "2023-12-16",
      total_amount: "2000000",
      payment_method: "cash",
    },
    {
      id: 13,
      customer_id: 2,
      order_date: "2023-12-16",
      total_amount: "2000000",
      payment_method: "cash",
    },
    {
      id: 14,
      customer_id: 2,
      order_date: "2023-12-16",
      total_amount: "2000000",
      payment_method: "cash",
    },
    {
      id: 15,
      customer_id: 2,
      order_date: "2023-12-16",
      total_amount: "2000000",
      payment_method: "cash",
    },
    {
      id: 16,
      customer_id: 2,
      order_date: "2023-12-16",
      total_amount: "2000000",
      payment_method: "cash",
    },
  ];
  return (
    <>
      <Header></Header>
      <main class="main mx-5">
        <div class="pagetitle">
          <h1>Profile</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Users</li>
              <li class="breadcrumb-item active">Profile</li>
            </ol>
          </nav>
        </div>

        <section class="section profile">
          <div class="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  <img src={avatar} alt="Profile" class="rounded-circle" />
                  <h2>Dương Huy Hoàng</h2>
                  <h3>Programmer</h3>
                  <div class="social-links mt-2">
                    <a href="#" class="twitter">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="linkedin">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-8">
              <div class="card">
                <div class="card-body pt-3">
                  <ul class="nav nav-tabs nav-tabs-bordered">
                    <li class="nav-item">
                      <button
                        class={`nav-link ${
                          activeTab === "profile-overview" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("profile-overview")}
                      >
                        Overview
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class={`nav-link ${
                          activeTab === "profile-edit" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("profile-edit")}
                      >
                        Edit Profile
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class={`nav-link ${
                          activeTab === "order" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("order")}
                      >
                        Order
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                      >
                        Change Password
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content pt-2">
                    <div
                      className={`tab-pane fade profile-overview ${
                        activeTab === "profile-overview" ? "active show" : ""
                      }`}
                      id="profile-overview"
                    >
                      <h5 class="card-title">About</h5>
                      <p class="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </p>

                      <h5 class="card-title">Profile Details</h5>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label ">Full Name</div>
                        <div class="col-lg-9 col-md-8">Kevin Anderson</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Company</div>
                        <div class="col-lg-9 col-md-8">
                          Lueilwitz, Wisoky and Leuschke
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Job</div>
                        <div class="col-lg-9 col-md-8">Web Designer</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Country</div>
                        <div class="col-lg-9 col-md-8">USA</div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Address</div>
                        <div class="col-lg-9 col-md-8">
                          A108 Adam Street, New York, NY 535022
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Phone</div>
                        <div class="col-lg-9 col-md-8">
                          (436) 486-3538 x29071
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-3 col-md-4 label">Email</div>
                        <div class="col-lg-9 col-md-8">
                          k.anderson@example.com
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade profile-edit pt-3 ${
                        activeTab === "profile-edit" ? "active show" : ""
                      }`}
                      id="profile-edit"
                    >
                      <form>
                        <div class="row mb-3">
                          <label
                            for="profileImage"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Profile Image
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <img
                              src="assets/img/profile-img.jpg"
                              alt="Profile"
                            />
                            <div class="pt-2">
                              <a
                                href="#"
                                class="btn btn-primary btn-sm"
                                title="Upload new profile image"
                              >
                                <i class="bi bi-upload"></i>
                              </a>
                              <a
                                href="#"
                                class="btn btn-danger btn-sm"
                                title="Remove my profile image"
                              >
                                <i class="bi bi-trash"></i>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="fullName"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Full Name
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="fullName"
                              type="text"
                              class="form-control"
                              id="fullName"
                              value="Kevin Anderson"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="about"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            About
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <textarea
                              name="about"
                              class="form-control"
                              id="about"
                              style={{ height: "100px" }}
                            >
                              Sunt est soluta temporibus accusantium neque nam
                              maiores cumque temporibus. Tempora libero non est
                              unde veniam est qui dolor. Ut sunt iure rerum quae
                              quisquam autem eveniet perspiciatis odit. Fuga
                              sequi sed ea saepe at unde.
                            </textarea>
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="company"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Company
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="company"
                              type="text"
                              class="form-control"
                              id="company"
                              value="Lueilwitz, Wisoky and Leuschke"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Job"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Job
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="job"
                              type="text"
                              class="form-control"
                              id="Job"
                              value="Web Designer"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Country"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Country
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="country"
                              type="text"
                              class="form-control"
                              id="Country"
                              value="USA"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Address"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Address
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="address"
                              type="text"
                              class="form-control"
                              id="Address"
                              value="A108 Adam Street, New York, NY 535022"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Phone"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Phone
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="phone"
                              type="text"
                              class="form-control"
                              id="Phone"
                              value="(436) 486-3538 x29071"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Email"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Email
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="email"
                              type="email"
                              class="form-control"
                              id="Email"
                              value="k.anderson@example.com"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Twitter"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Twitter Profile
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="twitter"
                              type="text"
                              class="form-control"
                              id="Twitter"
                              value="https://twitter.com/#"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Facebook"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Facebook Profile
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="facebook"
                              type="text"
                              class="form-control"
                              id="Facebook"
                              value="https://facebook.com/#"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Instagram"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Instagram Profile
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="instagram"
                              type="text"
                              class="form-control"
                              id="Instagram"
                              value="https://instagram.com/#"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="Linkedin"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Linkedin Profile
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="linkedin"
                              type="text"
                              class="form-control"
                              id="Linkedin"
                              value="https://linkedin.com/#"
                            />
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>

                   
                    <div
                      className={`tab-pane fade pt-3 ${
                        activeTab === "order" ? "active show" : ""
                      }`}
                      id="profile-settings"
                    >
                      <table class="table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Payment Method</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr key={order.id}>
                              <td>{order.id}</td>
                              <td>{order.order_date}</td>
                              <td>{order.total_amount}</td>
                              <td>{order.payment_method}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div
                      class="tab-pane fade pt-3"
                      id="profile-change-password"
                    >
                      <form>
                        <div class="row mb-3">
                          <label
                            for="currentPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Current Password
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="password"
                              type="password"
                              class="form-control"
                              id="currentPassword"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="newPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            New Password
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="newpassword"
                              type="password"
                              class="form-control"
                              id="newPassword"
                            />
                          </div>
                        </div>

                        <div class="row mb-3">
                          <label
                            for="renewPassword"
                            class="col-md-4 col-lg-3 col-form-label"
                          >
                            Re-enter New Password
                          </label>
                          <div class="col-md-8 col-lg-9">
                            <input
                              name="renewpassword"
                              type="password"
                              class="form-control"
                              id="renewPassword"
                            />
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="submit" class="btn btn-primary">
                            Change Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Profile;
