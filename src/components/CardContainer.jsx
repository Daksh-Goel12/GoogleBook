import { useEffect, useState } from "react";
import Card from "./Card";
import { CiSearch } from "react-icons/ci";

function CardContainer() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    // Use a default query if search is empty
    const query = search.trim() === "" ? "programming" : search;

    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          query
        )}&key=${import.meta.env.VITE_API_KEY}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data from Google Books API");
      }

      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <>
      <div className="flex justify-center items-center mt-12 gap-6">
        <input
          type="search"
          className="border px-6 py-2 rounded-md"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="text-3xl border px-3 py-1 hover:bg-red-500 hover:scale-105 rounded-md bg-red-600 text-white">
          <CiSearch onClick={fetchData} />
        </div>
      </div>
      {loading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-600 mt-4">{error}</div>
      ) : (
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 items-center mt-8">
          {books.map((book, index) => (
            <Card
              key={index}
              title={book.volumeInfo.title}
              img={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              date={book.volumeInfo.publishedDate}
              author={
                book.volumeInfo.authors
                  ? book.volumeInfo.authors[0]
                  : "No Info Available"
              }
              view={
                book.volumeInfo.previewLink ? book.volumeInfo.previewLink : ""
              }
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CardContainer;
