'use client';
import { useContext } from 'react';
import Image from 'next/image';
import { service } from '@/utils/axios.js';
import { AppContext } from '@/context/AppContext.js';
import Uploading from '@/components/Uploading.js'
import UploadSuccess from '@/components/UploadSuccess.js';
import image from '../../public/image.svg';
import styles from '@/css/Uploader.module.css';

export default function Uploader() {
  const { file, setFile, success, setSuccess, urlImage, setUrlImage, error, setError } = useContext(AppContext);

	const handleInputFile = e => {
		let newFile = e.target.files;

		setFile(newFile[0]);

		uploadImage(newFile[0]);
	};

	const uploadImage = async (newFile) => {
		await service.post('/upload', {
			file: newFile
		}).then(response => {
			setUrlImage(response.data.data.secure_url);
			setSuccess(true);
		})
		.catch(error => {
			setError(true);
			setSuccess(true);
		});;
	};

	if (file && ! success) {
		return <Uploading />
	}

	if (success) {
		return <UploadSuccess urlImage={urlImage} />
	}

	if (!file) {
		return (
			<div className={styles.uploader_container}>
				<h1>Upload your image</h1>
				<p>File should be Jpeg, Png,...</p>
				<div className={styles.drop_zone}>
					<input type='file' accept='image/*' onChange={e => handleInputFile(e)} />
					<Image src={image} alt='Drop Zone' height={120} width={120} priority={true} />
					<h2>Drag & Drop your image here</h2>
				</div>
				<span>Or</span>
				<button type='button'>Choose a file</button>
			</div>
		)
	}
};
  