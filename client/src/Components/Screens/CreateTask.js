import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";

function MyVerticallyCenteredModal(props) {
  const [edit, setEdit] = useState(true);
  const now = 60;
  const onClick = () => {
    setEdit(false);
  };
  //   console.log(props.task);
  //   const { taskname, taskdescription, duedate, status } = props.task;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard="true"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Task Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              disabled={edit && "true"}
              placeholder="Task Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Completion Date</Form.Label>
            <Form.Control type="date" placeholder="Completion Date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>Edit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function CreateTask() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create Task
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default CreateTask;
