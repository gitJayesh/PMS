import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function MyVerticallyCenteredModal(props) {
  const [edit, setEdit] = useState(true);
  const onClick = () => {
    setEdit(false);
  };
  console.log(props.task);
  const { taskname, taskdescription, duedate, status } = props.task;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              disabled={edit && "true"}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} disabled={edit && "true"} />
          </Form.Group>
          <Button onClick={onClick}>Edit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function Tasks({ task }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {task.taskname}
      </Button>
      <MyVerticallyCenteredModal
        task={task}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default Tasks;
