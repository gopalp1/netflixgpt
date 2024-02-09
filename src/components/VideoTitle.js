const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[250px] px-8   absolute   bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-white text-3xl uppercase py-2">{title}</h1>
      <p className="text-lg text-white w-[400px]">{overview}</p>
      <div className="p-4">
        <button className="bg-white rounded  mr-8 p-2 w-[100px] ">
          Play
        </button>
        <button className="bg-white  rounded mr-8 p-2 w-[100px] ">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
