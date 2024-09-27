import { useTranslation } from 'react-i18next';

interface PropsExp {
  id: number;
  date: string;
  role: string;
  projects: string;
  technologies: string;
  tasks: string;
}
function ExperienceCard({ date, role, projects, technologies, tasks }: PropsExp) {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group is-active">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2"
          style={{ backgroundColor: '#b4fa1f' }}
        ></div>
        <div className="mb-1 text-experience-color w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] experience-timeline-card">
          <div className="text-xs font-medium">{t(`${date}`)}</div>
          <div className="font-bold text-slate-900">{t(`${role}`)}</div>
          <ol className="list-disc px-5">
            <li>
              <b>Projects:</b> {t(`${projects}`)}
            </li>
            <li>
              <b>Technologies:</b> {t(`${technologies}`)}
            </li>
            <li>
              <b>Tasks:</b> {t(`${tasks}`)}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
