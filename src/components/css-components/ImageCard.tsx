import styled from "styled-components";
import huxley from "../../assets/people/huxley.jpg";

const ImageCard = () => {
  return (
    <StyledImageCard>
      <article className="image-card">
        <div className="image-card-foto"></div>
        <div className="image-card-foto__text">
          <h3>Aldous Huxley</h3>
          <p>Author</p>
        </div>
      </article>
    </StyledImageCard>
  );
};

export default ImageCard;

const StyledImageCard = styled.div`
  .image-card {
    height: 22rem;
    width: 15rem;
    margin: 1.5rem auto;
    border-radius: 1.5rem;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
    background-color: #f6cdbc;
  }
  .image-card-foto {
    width: 100%;
    height: 14rem;
    background-image:
      linear-gradient(
        90deg,
        hsla(18, 76%, 85%, 0.6) 0%,
        hsla(203, 69%, 84%, 0.6) 100%
      ),
      url(${huxley});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    clip-path: polygon(0px 21%, 100% -11px, 100% 79%, 0 65%);
    &__text {
      padding: 1.5rem;
      text-align: center;
      color: #fff;
      background-color: #baddf2; // rgba(246, 205, 188, 0.6)
      height: 100%;
    }
  }
`;
