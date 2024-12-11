import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
  const slideImageHeight = 'auto';

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgscf.slidemembers.com/docs/1/1/694/prenatal_care_custom_google_slides_693194.jpg"
          alt="First slide"
          style={{ height: slideImageHeight }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/1f/2e/5e/1f2e5ebd1d8c4d189a09d7020de73a3f.jpg"
          alt="Second slide"
          style={{ height: slideImageHeight }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/da/e6/a3/dae6a3a55187e706035a86de039e57f0.jpg"
          alt="Third slide"
          style={{ height: slideImageHeight }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;