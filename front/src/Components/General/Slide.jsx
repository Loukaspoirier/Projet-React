function Slide(props) {
  // const hello ="voila";
  return (
    <div className="slide">
      <div
        className="imageSlide d-block w-100"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          width: "100%",
          height: "80vw",
        }}
      ></div>
      <div className="carousel-caption d-none d-md-block">
        <h1 className="textSlide">{props.title}</h1>
      </div>
    </div>
  );
}

export default Slide;
