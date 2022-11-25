import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import TaskContext from "../../../Context/task/taskContext";

function MyVerticallyCenteredModal(props) {
  const taskContext = useContext(TaskContext);
  const { deleteTask, tasks, updateTask } = taskContext;
  const { taskname, taskdescription, duedate, status, _id } = props.task;
  // console.log(tasks);

  const [edit, setEdit] = useState(false);
  // const [task, setTask] = useState({
  //   _id,
  //   taskname: " ",
  //   taskdescription: " ",
  //   duedate: " ",
  //   status,
  // });
  const [progress, setProgress] = useState(0);

  // const now = 60;
  const onClick = () => {
    if (edit === false) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  };
  // console.log("progress", progress);
  // console.log(props.task);
  console.log(_id);

  const deleteTasks = () => {
    deleteTask(_id);
    console.log("delete");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // setTask({ _id, taskname, taskdescription, duedate, status: progress });
    // console.log(progress);
    updateTask(progress, _id);
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
        <Modal.Title id="contained-modal-title-vcenter">{taskname}</Modal.Title>{" "}
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task description</Form.Label>
          <p>{taskdescription}</p>
        </Form.Group>
        {/* <Modal.Body>
          <Form.Label>Completion date</Form.Label>
          <p>Modal body text goes here.</p>
        </Modal.Body> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Completion date</Form.Label>
          <p>22/10/1998</p>
        </Form.Group>
        <form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Progress</Form.Label>

            <ProgressBar now={status} animated label={`${status}%`} />
          </Form.Group>
          {edit && (
            <Form.Group className="mt-3 ">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setProgress(e.target.value)}
              >
                <option>Select the completed percentage</option>
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="100">100%</option>
              </Form.Select>
            </Form.Group>
          )}
          {edit ? (
            <Button type="Submit" className="mt-3 " variant="outline-primary">
              Submit Progress
            </Button>
          ) : (
            <Button
              onClick={onClick}
              className="mt-3 "
              variant="outline-secondary"
            >
              Edit Progress
            </Button>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deleteTasks} variant="danger">
          Delete
        </Button>
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
