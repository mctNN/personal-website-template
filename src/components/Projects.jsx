import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Proje 1",
      description: "Proje açıklaması buraya gelecek.",
      image: "https://via.placeholder.com/500x300",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Proje 2",
      description: "Proje açıklaması buraya gelecek.",
      image: "https://via.placeholder.com/500x300",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Proje 3",
      description: "Proje açıklaması buraya gelecek.",
      image: "https://via.placeholder.com/500x300",
      technologies: ["React Native", "Firebase"],
      link: "#"
    }
  ];

  return (
    <div id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projelerim
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Geliştirdiğim bazı projeler
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-500">{project.description}</p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Projeyi İncele
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;