import { Card } from "react-bootstrap";
import "./CardResume";

export default function CardResumeHobbies({ subtitle, hobbiesStorage, text }) {
  return (
    <div>
      <Card className="text-center p-2 card-resume">
        <Card.Body>
          <Card.Subtitle>
            <b>{subtitle}</b>
          </Card.Subtitle>
          <ul>
            {hobbiesStorage.map((hobbie, index) => (
              <li key={index}>{hobbie.label}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
      {text && (
        <Card className="text-center p-2 card-resume">
          <Card.Body>
            <Card.Subtitle>
              <b>Your additional hobbie is:</b>
            </Card.Subtitle>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
