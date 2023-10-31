import { useState, useEffect } from "react";
import { useRouter } from 'next/router'; // Import useRouter from next/router
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase/config";

const UploadArticle = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [inputKey, setInputKey] = useState(Date.now()); // unique key to force re-render input
  const router = useRouter(); // Instantiate the router

  const handleChange = (e) => {
    let selected = e.target.files[0];
    const types = ["application/pdf"];

    if (selected && types.includes(selected.type)) {
      setError("");
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select a valid PDF file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Title is required");
      return;
    }

    setError("");
    setIsUploading(true);

    if (file) {
      const storageRef = ref(storage, `articles/${file.name}`);

      try {
        await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(storageRef);

        const createdAt = serverTimestamp();
        await addDoc(collection(db, "articles"), {
          title,
          url: fileUrl,
          createdAt,
        });

        setFile(null);
        setTitle("");
        setError("");
        setIsUploading(false);
        setUploadSuccess(true);
        setInputKey(Date.now()); // reset input key to clear the file input

        // Refresh the page after a successful upload
        router.reload(); // Use the router object to refresh the page
      } catch (err) {
        setError("Error uploading file: " + err.message);
        setIsUploading(false);
      }
    } else {
      setError("No file selected");
      setIsUploading(false);
    }
  };

  // Function to clear the selected file
  const clearFile = () => {
    setFile(null);
    setInputKey(Date.now()); // Reset the input key to clear the file input
  };

  useEffect(() => {
    if (uploadSuccess) {
      setTimeout(() => {
        setUploadSuccess(false);
      }, 3000);
    }
  }, [uploadSuccess]);

  return (
    <div className="flex flex-col bg-gray-800 items-center min-h-screen py-10">
      <div className="text-center">
        <h1 className="text-3xl text-white font-medium mb-3">Upload Article Section</h1>
      </div>
      {/* Changed container div to use a percentage-based width and centered the form */}
      <div className="w-11/12 md:w-3/4 lg:w-1/2"> 
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Article Title:
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="title" 
              type="text" 
              placeholder="Enter title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="article">
              Upload Article:
            </label>
            <div className="flex justify-between">
              <input 
                key={inputKey}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" // added margin right
                id="article" 
                type="file" 
                onChange={handleChange} 
                accept=".pdf"
              />
              {/* Trash button to clear the selected file */}
              {file && (
                <button 
                  type="button" 
                  onClick={clearFile}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  🗑️
                </button>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button 
              className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isUploading ? 'cursor-not-allowed' : 'hover:bg-blue-700'}`} 
              type="submit"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
          {uploadSuccess && <p className="text-green-500 text-xs italic animate-bounce">Upload successful! 🎉</p>}
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default UploadArticle;
