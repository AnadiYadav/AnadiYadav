import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import  Image  from 'D:/Ksj/React/hostel-management/src/tk2.jpg';
import Image2 from 'D:/Ksj/React/hostel-management/src/kt1.jpg'
function CardsExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Image} height={150}/>
        <Card.Body>
          <Card.Title>Karate</Card.Title>
          <Card.Text>
            This is a touch and back non-combat martial art. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title>Judo</Card.Title>
          <Card.Text>
            This is a full combat, full contact martial art.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardsExample;