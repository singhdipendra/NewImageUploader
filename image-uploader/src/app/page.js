import Uploader from '@/components/Uploader.js';
import Footer from '@/components/Footer.js';
import styles from './page.module.css';
 
export const metadata = {
  title: 'Image Uploader',
  description: 'A website for uploading images',
  creator: 'Neider Silva',
  generator: 'Next.js',
  applicationName: 'Image Uploader'
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Uploader />
      <Footer />
    </main>
  )
};
