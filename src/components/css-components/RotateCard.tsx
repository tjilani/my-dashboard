import styled from "styled-components";

const RotateCard = () => {
  return (
    <StyledRotateCard className="card-container">
      <div className="card">
        <div className="card__side card__side--front">
          {" "}
          <h3 className="card__side__front-text">Frage</h3>
        </div>
        <div className="card__side card__side--back">
          {" "}
          <h3 className="card__side__back-text">Antwort</h3>
        </div>
      </div>
    </StyledRotateCard>
  );
};

export default RotateCard;

const StyledRotateCard = styled.div`
  .card {
    width: 10rem;
    height: 15rem;
    margin: 1.5rem auto;
    position: relative;
    perspective: 100rem;
    //transform-style: preserve-3d;
  }
  .card__side {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 1.5rem;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    transition: all 0.8s ease;
    backface-visibility: hidden;
    //transform-style: preserve-3d;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
    &--front {
      background-color: #f6cdbc8a; // rgba(246, 205, 188, 0.6)
    }
    &--back {
      background-color: #baddf299;
      transform: rotateY(-180deg);
    }
  }
  .card:hover .card__side--front {
    transform: rotateY(180deg);
  }
  .card:hover .card__side--back {
    transform: rotateY(0deg);
  }
`;
