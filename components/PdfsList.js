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

const PDFList = ({ isAdmin = false }) => {
  const [pdfs, setPDFs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfsPerPage, setPDFsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchPDFs = async () => {
      setIsLoading(true);
      try {
        const q = query(collection(db, "pdfs"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedPDFs = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPDFs(fetchedPDFs);
        setError(null);
      } catch (err) {
        setError("Could not fetch PDFs: " + err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPDFs();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPDFsPerPage(window.innerWidth > 768 ? 10 : 5);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastPDF = currentPage * pdfsPerPage;
  const indexOfFirstPDF = indexOfLastPDF - pdfsPerPage;
  const currentPDFs = pdfs.slice(indexOfFirstPDF, indexOfLastPDF);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this PDF?"
    );
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, "pdfs", id));
        setPDFs(pdfs.filter((pdf) => pdf.id !== id));
        setSuccessMessage("PDF deleted successfully!");
      } catch (err) {
        setError("Error deleting PDF: " + err.message);
      }
    }
  };

  const handleEdit = async (id, newTitle) => {
    if (newTitle && newTitle !== "") {
      try {
        const pdfRef = doc(db, "pdfs", id);
        await updateDoc(pdfRef, { title: newTitle });
        setPDFs(
          pdfs.map((pdf) => (pdf.id === id ? { ...pdf, title: newTitle } : pdf))
        );
        setSuccessMessage("PDF title updated successfully!");
      } catch (err) {
        setError("Error updating PDF: " + err.message);
      }
    }
  };

  const Pagination = ({ pdfsPerPage, totalPDFs, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPDFs / pdfsPerPage); i++) {
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
    return <p>Loading PDFs...</p>;
  }

  return (
    <div className="flex flex-col items-center bg-gray-700 min-h-screen py-12">
      <h2 className="text-3xl font-semibold text-white mb-10 relative group hover:underline">
        <span className="relative inline-block">
          Latest PDFs
          <span className="absolute h-0.5 bg-white w-full left-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </span>
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}
      <div className="w-full max-w-5xl">
        {currentPDFs.map((pdf) => (
          <div
            key={pdf.id}
            className="m-2 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="block p-4">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium text-gray-600">{pdf.title}</p>
                <div className="ml-2 flex-shrink-0 flex space-x-4">
                  <a
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 border"
                  >
                    View
                  </a>
                  {isAdmin && (
                    <>
                      <button
                        onClick={() => handleEdit(pdf.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(pdf.id)}
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
        pdfsPerPage={pdfsPerPage}
        totalPDFs={pdfs.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PDFList;
