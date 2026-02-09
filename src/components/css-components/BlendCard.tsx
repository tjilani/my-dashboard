import styled from "styled-components";
import huxley from "../../assets/people/huxley.jpg";

const BlendCard = () => {
  return (
    <StyledBlendCard>
      <article className="blend-card">
        <div className="blend-card-foto"></div>
        <div className="blend-card-foto__text">
          <h3>Aldous Huxley</h3>
          <p>TEst</p>
        </div>
      </article>
    </StyledBlendCard>
  );
};

export default BlendCard;

const StyledBlendCard = styled.article`
  .blend-card {
    height: 22rem;
    width: 15rem;
    margin: 1.5rem auto;
    border-radius: 1.5rem;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
    //background-color: #f6cdbc;
    &-foto {
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
      background-blend-mode: overlay;
      &__text {
        padding: 1.5rem;
        text-align: center;
        color: #fff;
        background-color: #baddf2; // rgba(246, 205, 188, 0.6)
        height: 100%;
      }
    }
  }
`;
