import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import TaskContext from "../../Context/task/taskContext";

function MyVerticallyCenteredModal(props) {
  const taskContext = useContext(TaskContext);
  const { deleteTask, tasks } = taskContext;
  console.log(tasks);

  const [edit, setEdit] = useState(true);

  const now = 60;
  const onClick = () => {
    setEdit(false);
  };
  console.log(props.task);
  const { taskname, taskdescription, duedate, status, _id } = props.task;
  console.log(_id);

  const deleteTasks = () => {
    deleteTask(_id);
    console.log("delete");
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard="true"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{taskname}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            disabled={edit && "true"}
            value={taskdescription}
          />
        </Form.Group>
        {/* <Modal.Body>
          <Form.Label>Completion date</Form.Label>
          <p>Modal body text goes here.</p>
        </Modal.Body> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Completion date</Form.Label>
          <p>22/10/1998</p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Progress</Form.Label>
          <ProgressBar now={now} animated label={`${now}%`} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>Edit</Button>
        <Button onClick={deleteTasks} varient="danger">
          Delete
        </Button>

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
