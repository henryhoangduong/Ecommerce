import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from 'axios'

function CreateProduct() {
  const [show, setShow] = useState(false);
  const [product, setproduct] = useState({
    "id": "1002",
    "name": "LEGO DUPLO 10913 Thùng Gạch Duplo Sáng Tạo",
    "description":
      "Đồ Chơi Lắp Ráp Lego Duplo Thùng Gạch Sáng Tạo 10913 (65 Chi Tiết) được cung cấp bởi trí tưởng tượng của trẻ em - không cần pin! Đồ chơi thực hành, không dùng pin giúp trẻ em có động cơ tốt và kỹ năng giải quyết vấn đề, và nó đặt quyền kiểm soát sáng tạo ngay trong tay chúng.",
    "price": "1000000",
    "category_id": "1",
    "brand": "Lego",
    "image_url":
      "https://salt.tikicdn.com/cache/750x750/ts/product/b6/b2/47/7183493993242b9e92a41320bf7d93c1.jpg.webp",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = "http://127.0.0.1:8000/api/create/products";
      console.log(product)
      const response = await axios.post(url, product);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (event) => {
    console.log(product)
    // setproduct((current) => {
    //   setproduct((current) => ({
    //     ...current,
    //     [event.target.name]: event.target.value,
    //   }));
    // })
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button id="createproduct" variant="outline-primary" onClick={handleShow}>
        Create
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="row mb-3">
              <label for="" class="col-sm-3 col-form-label">
                ID
              </label>
              <div class="col-sm-8">
                <input
                  name="id"
                  type=""
                  onChange={handleChange}
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="" class="col-sm-3 col-form-label">
                Category
              </label>
              <div class="col-sm-8">
                <input
                  name="category_id"
                  type=""
                  onChange={handleChange}
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Description
              </label>
              <div class="col-sm-8">
                <textarea
                  onChange={handleChange}
                  type="textarea"
                  class="form-control"
                  name="description"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Image URL
              </label>
              <div class="col-sm-8">
                <input
                  onChange={handleChange}
                  name="image_url"
                  type=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Name
              </label>
              <div class="col-sm-8">
                <input
                  onChange={handleChange}
                  name="name"
                  type=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Price
              </label>
              <div class="col-sm-8">
                <input
                  onChange={handleChange}
                  name="price"
                  type=""
                  class="form-control"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateProduct;
