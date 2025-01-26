const COver = ({img, title, subTitle, brightness}) => {
    return (
        <div>
            <div
  className="hero h-[700px] "
 style={{
          backgroundImage: `url(${img})`,
          filter: `brightness(1.7)`,
          }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="bg-black px-40  py-20 bg-opacity-40">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5 uppercase">{subTitle}</p>
    </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default COver;