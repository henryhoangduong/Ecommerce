import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Edit() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handlechange(event){}
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="row mb-3">
              <label for="" class="col-sm-3 col-form-label">
                Brand
              </label>
              <div class="col-sm-8">
                <input
                  name=""
                  onChange={handlechange}
                  type=""
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword" class="col-sm-3 col-form-label">
                Category ID
              </label>
              <div class="col-sm-8">
                <input
                  name=""
                  onChange={handlechange}
                  type=""
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
                  onChange={handlechange}
                  type="textarea"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Image URL
              </label>
              <div class="col-sm-8">
                <input
                  name=""
                  onChange={handlechange}
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
                  name=""
                  onChange={handlechange}
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
                  name=""
                  onChange={handlechange}
                  type=""
                  class="form-control"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-outline-danger">
            Delete
          </button>
          <Button variant="outline-primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit
