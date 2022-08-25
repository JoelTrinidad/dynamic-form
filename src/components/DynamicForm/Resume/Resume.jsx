import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";

export default function Resume({ showModal, setModal, setStep }) {
  const favoutireFruit = localStorage.getItem("fruitName");
  const fruitIcon = localStorage.getItem("fruitIcon");
  const hobbiesStorage = JSON.parse(localStorage.getItem("hobbies"));
  const additionalHobbie = localStorage.getItem("additionalHobbie");
  const comment = localStorage.getItem("comment");

  const clearForm = () => {
    localStorage.clear();
    setModal(false);
    setStep(1);
  }

  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
      onHide={clearForm}
    >
      <Modal.Header closeButton>
        <Modal.Title>Congratulations! 🥳🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Here you are your resume</h4>
        <CardGroup className="mt-4">
          {favoutireFruit && fruitIcon && (
            <CardResume
              title={fruitIcon}
              subtitle="Your favourite fruit is"
              text={favoutireFruit}
            />
          )}
          {hobbiesStorage && (
            <CardResumeHobbies
              subtitle="Your hobbies"
              text={additionalHobbie}
              hobbiesStorage={hobbiesStorage}
            />
          )}
          {comment && (
            <CardResume
              subtitle="And for the last this is the comment"
              text={comment}
            />
          )}
        </CardGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={clearForm}
          variant="outline-dark"
        >
          Exit and clear form
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
