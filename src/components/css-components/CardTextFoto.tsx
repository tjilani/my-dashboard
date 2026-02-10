import styled from "styled-components";
import huxley from "../../assets/people/huxley.jpg";

const CardTextFoto = () => {
  return (
    <StyledCardTextFoto>
      <div className="story">
        <figure className="story__shape">
          <img src={huxley} alt="Huxley" className="story__image" />
        </figure>
        <div className="story__textbox">
          <h3 className="story__title">Relevant Writer</h3>
          <p className="story__text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et
          </p>
        </div>
      </div>
    </StyledCardTextFoto>
  );
};

export default CardTextFoto;

const StyledCardTextFoto = styled.div`
  .story {
    width: 50%;
    margin: 0 auto;
    padding: 4rem;
    background-color: #f6cdbc;
    border-radius: 1.5rem;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transform: skewX(-8deg);

    &__shape {
      width: 11rem;
      height: 11rem;
      background-color: #baddf2;
      // margin: 3rem 1rem 1rem 1rem; bei gefloateten Elementen besser mit transform: translate arbeiten
      //border-radius: 50%;
      shape-outside: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);
      position: relative;
      float: left;
      transform: translate(-1rem, -1rem) skewX(8deg);
    }
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__textbox {
      transform: skewX(8deg);
    }
  }

  .story__title {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;
