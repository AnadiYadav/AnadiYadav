import Carousel from 'react-bootstrap/Carousel';
import Image1 from 'D:/Ksj/React/hostel-management/src/tk6.jpg';
import Image2 from 'D:/Ksj/React/hostel-management/src/tk7.jpg';
import  Image3  from 'D:/Ksj/React/hostel-management/src/tk3.jpg';
function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          height={300}
          width={50}
          alt=" "
        />
        <Carousel.Caption>
          <h3>Fight</h3>
          <p>Fight till your last breath.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          height={300}
          width={100}
          alt=" "
        />

        <Carousel.Caption>
          <h3>Dedication</h3>
          <p>This plays the most important role.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          height={300}
          width={100}
          alt=" "
        />

        <Carousel.Caption>
          <h3>Practice</h3>
          <p>
            The more you do,the better you become.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;