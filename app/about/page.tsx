import Header from '../components/Header';
import Footer from '../components/Footer';
import { data } from '../../data/data';

export default function About() {
  const { title, bio, skills, image } = data.about;

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        {/* About Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg mt-4">{bio}</p>
          <img src={image} alt="About" className="mt-8 mx-auto rounded-lg shadow-lg" />

          {/* Skills Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold">My Skills</h2>
            <ul className="mt-4 flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <li key={index} className="px-4 py-2 bg-base-200 rounded-lg">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}