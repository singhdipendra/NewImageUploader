'use client';
import { useState } from 'react';

const useInitialState = () => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [error, setError] = useState(false);

  return {
		file,
    setFile,
    success,
    setSuccess,
    urlImage,
    setUrlImage,
    error,
    setError
  };
};

export { useInitialState };
