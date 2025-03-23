import Header from './components/Header';
import Footer from './components/Footer';
import { data } from '../data/data';

export default function Home() {
  const { title, description, image, cta } = data.home;

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg mt-4">{description}</p>
          <img src={image} alt="Home" className="mt-8 mx-auto rounded-lg shadow-lg" />
          <a
            href={cta.link}
            className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            {cta.text}
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}