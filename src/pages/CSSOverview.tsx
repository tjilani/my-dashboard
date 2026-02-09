import RotateCard from "../components/css-components/RotateCard";
import ImageCard from "../components/css-components/ImageCard";

const CSSOverview = () => {
  return (
    <section className="css-overview-container">
      <h1>CSS Overview</h1>
      <div className="css-overview-content">
        <div className="css-overview-item">
          <h2>rotating Card</h2>
          <RotateCard />
        </div>
        <div className="css-overview-item">
          <h2>Image Card</h2>
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

export default CSSOverview;
