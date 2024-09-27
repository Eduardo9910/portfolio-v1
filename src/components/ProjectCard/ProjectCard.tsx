import { useTranslation } from 'react-i18next';

interface cardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  technologies: string[];
  href: string;
}
function ProjectCard({ title, color, description, technologies, href }: cardProps) {
  const { t } = useTranslation();
  function redirect(href: string) {
    window.location.href = href;
  }
  return (
    <>
      <button
        className="card-project-cotainer py-6 px-4 cursor-pointer h-48"
        style={{ backgroundColor: color }}
        onClick={() => {
          redirect(href);
        }}
      >
        <div
          className="w-full h-full flex items-start justify-between"
          style={{ color: '#ffffff' }}
        >
          <div>
            <div className="flex justify-between items-center">
              <h2 style={{ color: '#b4fa1f' }}>{t(`${title}`)}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
                style={{ color: '#b4fa1f' }}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
              </svg>
            </div>
            <p className="text-left">{t(`${description}`)}</p>
            <div className="flex gap-1 mt-2">
              {technologies.map((el) => (
                <img key={el} src={el} width={20} alt="" />
              ))}
            </div>
          </div>
          {/* <img src={image} alt="" className="h-36 right-0 opacity-85 rounded-r-3xl absolute" /> */}
        </div>
      </button>
    </>
  );
}

export default ProjectCard;
