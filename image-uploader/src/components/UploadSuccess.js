import { useEffect, useRef, useState, useContext } from 'react';
import Image from 'next/image';
import { AppContext } from '@/context/AppContext.js';
import check from '../../public/check.svg';
import errorSVG from '../../public/error.svg';
import styles from '@/css/UploadSuccess.module.css';

export default function UploadSuccess({ urlImage }) {
	const { error } = useContext(AppContext);
	const [copy, setCopy] = useState(false);
	const text = useRef(null);

	const copyLink = () => {
		navigator.clipboard.writeText(text.current.value);
		setCopy(true);
	};

	useEffect(() => {
		if (!error) {
			text.current.value = urlImage;
		}
	}, [urlImage]);

	return (
		<div className={styles.success_container}>
			<Image src={error ? errorSVG : check} alt='Check Success' height={42} width={42} priority={true} />
			<h1>{error ? 'Uploaded failed!' : 'Uploaded successfully!'}</h1>
			{urlImage && <Image src={urlImage} alt='Image Uploaded' width={1000} height={1000}
				style={{ width: '100%', height: 'auto', borderRadius: '12px' }} priority={true} />}
			{
				!error && (
					<div className={styles.copy_container}>
						<input type="text" ref={text} />
						<button type="button" onClick={() => copyLink()}>Copy Link</button>
					</div>
				)
			}
			{
				copy && (
					<span>Copied link</span>
				)
			}
		</div>
	)
};
