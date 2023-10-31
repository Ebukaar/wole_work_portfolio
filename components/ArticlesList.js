import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

const ArticlesList = ({ isAdmin = false }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(db, "articles"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const fetchedArticles = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setArticles(fetchedArticles);
        setError(null);
      } catch (err) {
        setError("Could not fetch articles: " + err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setArticlesPerPage(window.innerWidth > 768 ? 10 : 5);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "articles", id));
        setArticles(articles.filter((article) => article.id !== id));
        setSuccessMessage("Article deleted successfully!"); // Set success message
      } catch (err) {
        setError("Error deleting article: " + err.message);
      }
    }
  };

  const handleEdit = async (id, newTitle) => {
    if (newTitle && newTitle !== "") {
      try {
        const articleRef = doc(db, "articles", id);
        await updateDoc(articleRef, { title: newTitle });
        setArticles(
          articles.map((article) =>
            article.id === id ? { ...article, title: newTitle } : article
          )
        );
        setSuccessMessage("Article title updated successfully!"); // Set success message
      } catch (err) {
        setError("Error updating article: " + err.message);
      }
    }
  };

  const Pagination = ({
    articlesPerPage,
    totalArticles,
    paginate,
    currentPage,
  }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <nav>
        <ul className="flex justify-center items-center">
          <li className="mx-1">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              className="text-blue-500"
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className="mx-1">
              <button
                onClick={() => paginate(number)}
                className={`text-blue-500 hover:text-blue-700 ${
                  currentPage === number ? "text-indigo-600" : ""
                }`}
              >
                {number}
              </button>
            </li>
          ))}
          <li className="mx-1">
            <button
              onClick={() =>
                currentPage < pageNumbers.length && paginate(currentPage + 1)
              }
              className="text-blue-500"
              disabled={currentPage === pageNumbers.length}
            >
              &gt;
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen py-12">
       <h2 className="text-3xl font-semibold text-gray-700 mb-10 relative group hover:underline">
        <span className="relative inline-block">
          Latest Articles
          <span className="absolute h-0.5 bg-gray-700 w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </span>
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="w-full max-w-5xl">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className="m-2 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="block p-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-gray-600">
                  {article.title}
                </p>
                <div className="ml-2 flex-shrink-0 flex space-x-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 border"
                  >
                    View
                  </a>

                  {isAdmin && (
                    <>
                      <button
                        onClick={() => handleEdit(article.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ArticlesList;
