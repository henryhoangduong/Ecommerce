import React,{useState} from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CreateProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button id='createproduct' variant="outline-primary" onClick={handleShow}>
        Create
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>
            Sign In to your LEGO® Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="row mb-3">
              <label for="inputEmail" class="col-sm-3 col-form-label">
                Email
              </label>
              <div class="col-sm-8">
                <input
                  name="email"
                  type="email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword" class="col-sm-3 col-form-label">
                Password
              </label>
              <div class="col-sm-8">
                <input
                  name="password"
            
                  type="password"
                  class="form-control"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="outline-primary" >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateProduct
