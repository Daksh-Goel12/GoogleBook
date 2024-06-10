function Card({ img, title, date, author, view }) {
  return (
    <div className=" pt-8 border-2 shadow-xl rounded-md hover:scale-105 transition-all  h-[500px] w-[400px]   flex flex-col items-center gap-4  px-4 py-4 text-center">
      <img className="border-2" src={img} alt="" />
      <h1 className="text-xl ">{title}</h1>
      <h1 className="text-lg">{date}</h1>
      <h1>Author: {author}</h1>
      <button className="border px-12 py-2 bg-red-600 text-white text-lg rounded-md hover:bg-red-500 hover:scale-105">
        <a href={view}>View </a>
      </button>
    </div>
  );
}

export default Card;
