import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config'; // Import your db from firebase config

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = await db.collection('articles').get(); // 'articles' is your collection in Firestore
      setArticles(articlesCollection.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      }));
    }

    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-medium text-center text-gray-800 mb-8">Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {articles.map((article) => (
          <div key={article.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{article.title}</div>
              <p className="text-gray-700 text-base">
                {article.snippet}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a 
                href={article.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
