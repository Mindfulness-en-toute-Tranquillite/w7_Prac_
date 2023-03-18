// 이미지 구현 formData 사용
import React, { useState } from 'react';
import axios from 'axios';

function Img() {
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('title', title);

    for (let key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }

    axios.post('http://localhost:4000/', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        File:
        <input type="file" onChange={handleFileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Img;