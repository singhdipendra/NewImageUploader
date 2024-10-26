import styles from '@/css/Uploading.module.css';

export default function Uploading() {
	return (
		<div className={styles.uploading_container}>
			<div className={styles.uploading_status}>
				<h1>Uploading...</h1>
				<div className={styles.status_bar}>
					<div className={styles.fill}></div>
				</div>
			</div>
		</div>
	)
};
  