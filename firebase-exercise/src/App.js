import React, { useState, useEffect } from 'react';
import db from './firebase-config'; // Import Firebase Firestore instance
import { collection, addDoc, deleteDoc, query, getDocs, doc } from "firebase/firestore"; // Import Firestore methods

function App() {
  const [newChapterName, setNewChapterName] = useState('');
  const [chapterToDelete, setChapterToDelete] = useState('');
  const [chapters, setChapters] = useState([]);

  const displayDatabase = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'chapters_test'));
      const chapterData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }));
      console.log("Chapter data:", chapterData);
      setChapters(chapterData);
      console.log(chapters);
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }
  };
  
  

  const addChapter = async () => {
    try {
      const docRef = await addDoc(collection(db, 'chapters_test'), {
        name: newChapterName
      });
      displayDatabase();
      setNewChapterName('');
    } catch (error) {
        console.error('Error adding chapter:', error);
    }
  };

  const deleteChapter = async () => {
    try {
      await deleteDoc(doc(db, 'chapters_test', chapterToDelete));
      displayDatabase();
      setChapterToDelete('');
    } catch (error) {
        console.error('Error deleting chapter:', error);
    }
  };

  return (
    <div className="App">
      <h1>Chapter Operations</h1>
      <button onClick={displayDatabase}>Display Database</button>
      <div>
        <ul>
          {chapters.map((chapter, index) => (
            <li key={index}>{chapter.id}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="New Chapter Name"
          value={newChapterName}
          onChange={(e) => setNewChapterName(e.target.value)}
        />
        <button onClick={addChapter}>Add Chapter</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Chapter ID to Delete"
          value={chapterToDelete}
          onChange={(e) => setChapterToDelete(e.target.value)}
        />
        <button onClick={deleteChapter}>Delete Chapter</button>
      </div>
    </div>
  );
}

export default App;
