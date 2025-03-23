import Header from '../components/Header';
import Footer from '../components/Footer';
import { data } from '../../data/data';

export default function Portfolio() {
  const { title, projects } = data.portfolio;

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        {/* Portfolio Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">{title}</h1>

          {/* Projects Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-base-200 rounded-lg shadow-lg overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{project.name}</h2>
                  <p className="text-sm mt-2">{project.description}</p>
                  <a
                    href={project.link}
                    className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}