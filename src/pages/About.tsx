import cat from "../assets/cat.jpg";
import catZoom from "../assets/cat-zoom.jpg";

const About = () => {
  return (
    <div className="flex-grow relative">
      <img src={cat} alt="cat photo" />
      <img src={catZoom} alt="zoomed cat photo" />
    </div>
  );
};

export default About;
