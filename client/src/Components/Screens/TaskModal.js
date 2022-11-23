import React from "react";

const TaskModal = ({ task, modalStyle }) => {
  console.log(modalStyle);
  return (
    <>
      <div className="bg-modal" style={{ display: modalStyle }}>
        <div className="modal-contents">
          <div className="close">+</div>
          <img src="https://richardmiddleton.me/comic-100.png" alt="" />
          <div className="model-task-heading">
            <h3>TASK 1</h3>
          </div>
          <div className="modal-task-desc">
            <h3>Task Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              nemo saepe quasi, doloremque nostrum eligendi minus natus?
              Quibusdam distinctio aliquam ipsa magnam eligendi aut nesciunt
              excepturi! A repudiandae iste magnam. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quidem saepe, voluptate soluta
              voluptatibus quam nihil. Tenetur pariatur nemo esse odio, nostrum
              sequi praesentium reprehenderit. Repellendus distinctio minima
              fugit perferendis pariatur?
            </p>
          </div>
          <div className="modal-date">
            <h3>Due date</h3>
            <p>dd-mm-yyy</p>
          </div>
          <div className="modal-task-progress">
            <h3>Progress</h3>
            <div className="progress-container">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
<div className="bg-modal">
  <div className="modal-contents">
    <div className="close">+</div>
    <img src="https://richardmiddleton.me/comic-100.png" alt="" />
    <div className="model-task-heading">
      <h3>TASK 1</h3>
    </div>
    <div className="modal-task-desc">
      <h3>Task Description</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo
        saepe quasi, doloremque nostrum eligendi minus natus? Quibusdam
        distinctio aliquam ipsa magnam eligendi aut nesciunt excepturi! A
        repudiandae iste magnam. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Quidem saepe, voluptate soluta voluptatibus quam
        nihil. Tenetur pariatur nemo esse odio, nostrum sequi praesentium
        reprehenderit. Repellendus distinctio minima fugit perferendis pariatur?
      </p>
    </div>
    <div className="modal-date">
      <h3>Due date</h3>
      <p>dd-mm-yyy</p>
    </div>
    <div className="modal-task-progress">
      <h3>Progress</h3>
      <div className="progress-container">
        <div className="progress"></div>
      </div>
    </div>
  </div>
</div>;
export default TaskModal;
