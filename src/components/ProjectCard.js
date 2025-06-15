export default function ProjectCard({ title, description, tech, link, img }) {
  return (
    <div className="relative flex flex-col md:flex-row bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.025] group">
      {img && (
        <div className="md:w-60 h-40 md:h-auto flex-shrink-0 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-gray-300 mb-3 text-base">{description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {tech?.map((t, i) => (
              <span key={i} className="bg-accent/10 text-accent px-2 py-0.5 rounded text-xs font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-accent hover:text-white hover:bg-accent px-4 py-1 rounded transition-colors duration-300 border border-accent font-retro"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
