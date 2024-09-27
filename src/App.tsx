// import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ReactGA from 'react-ga4';
import NavBar from './components/Navbar/NavBar';
import Button from './components/Button/Button';
import { icons } from './helpers/icons';
import { useTranslation } from 'react-i18next';
import CarouselSkills from './components/CarouselSkills/CarouselSkills';
import CarouselProjects from './components/CarouselProjects/CarouselProjects';
import { jsonManageSections } from './configs/json-manage-sections';
import Presentation from './components/PresentationCard/Presentation';
import ExperienceCard from './components/ExperienceCard/ExperienceCard';

function App() {
  const [isDark, setIsDark] = useState(true);

  const { t } = useTranslation();
  const changeTheme = () => {
    setIsDark(!isDark);
    const elementBg = document.getElementById('bg-image');
    if (elementBg) {
      elementBg.style.backgroundImage = !isDark
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%235DA15D' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23B4FA1F'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`
        : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23272727' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%235DA15D'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`;
    }
  };
  ReactGA.initialize('G-1RY49JWFG1');
  ReactGA.send({
    hitType: 'pageview',
    page: '/',
    title: 'Home',
  });

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <NavBar isDark={isDark} handleChange={changeTheme} />
      <div className="flex flex-col items-center">
        <div id="AboutmeSection" className="content-container-about">
          <div id="bg-image" className="inner-shadow-box bg-image">
            <Presentation></Presentation>
          </div>
          <div className="self-start flex gap-2 mt-4 flex-wrap max-md:justify-center">
            <Button
              href="https://github.com/Eduardo9910"
              name={t('btn-github')}
              image={icons.github}
            ></Button>
            <Button href="/resume.pdf" name={t('btn-resume')} image={icons.pdf}></Button>
            <Button
              href="https://www.linkedin.com/in/eduardohg15/"
              name={t('btn-linkedin')}
              image={icons.linkedin}
            ></Button>
            <Button
              href="mailto:rami.edu.hi@outlook.com"
              name={t('btn-mail')}
              image={icons.mail}
            ></Button>
          </div>
        </div>
        <div className="content-container-sections">
          {/* Experience */}
          <div id="ExperienceSection" className="shadow-box-card flex-col">
            <h2>{t('lbl-experience')}</h2>
            <section
              id="experienceSection"
              className="p-1 relative flex flex-col overflow-hidden mt-5 overflow-y-auto"
            >
              <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col justify-center divide-y divide-slate-200 ">
                  <div className="w-full mx-auto">
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-t before:from-transparent before:via-slate-300 before:to-transparent">
                      {jsonManageSections.arrayExperience.map((el) => (
                        <ExperienceCard
                          id={el.id}
                          key={el.id}
                          date={el.date}
                          role={el.role}
                          projects={el.projects}
                          technologies={el.technologies}
                          tasks={el.tasks}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call to Action */}
          <div className="mt-5 call-to-action">
            <div className="flex w-full justify-between items-center max-md:flex-col">
              <div>
                <h1 className="text-4xl" style={{ color: '#272727' }}>
                  {t('lbl-anyproject')}
                </h1>
                <p className="text-2xl max-sm:text-center">{t('lbl-worktogether')}</p>
              </div>
              <div className="max-md:mt-3 max-sm:text-center">
                <Button
                  href="mailto:rami.edu.hi@outlook.com"
                  name={t('btn-mail')}
                  image={icons.mail}
                ></Button>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div id="ProjectSection" className="mt-5 shadow-box-card flex-col">
            <h2>{t('lbl-projects')}</h2>
            <div className="mt-4">
              <CarouselProjects />
            </div>
          </div>
          {/* Technologies Section */}
          <div className="flex justify-between w-full max-w-full max-lg:flex-col">
            {/* Skills */}
            <div
              id="SkillSection"
              className="mt-5 w-2-col max-lg:w-full max-md:flex max-md:justify-center"
            >
              <div className="shadow-box-card flex-col">
                <h2 id="skillsTitle">{t('lbl-skills')}</h2>
                <div className="flex w-full overflow-auto gap-3 mt-4">
                  <CarouselSkills jsonSkills={jsonManageSections.arraySkills}></CarouselSkills>
                </div>
              </div>
            </div>
            {/* Learning */}
            <div
              id="ContactSection"
              className="mt-5 w-2-col max-lg:w-full max-md:flex max-md:justify-center"
            >
              <div className="shadow-box-card flex-col">
                <h2 id="learningTitle">{t('lbl-learning')}</h2>
                <div className="flex w-full overflow-auto gap-3 mt-4">
                  <CarouselSkills jsonSkills={jsonManageSections.arrayLearning}></CarouselSkills>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container max-lg:gap-4 max-lg:flex-col-reverse">
        <p className="w-full font-bold text-xl text-center">{t('txt-designedfigma')}</p>
        {/* <div className="flex gap-2 flex-wrap">
          <Button name={t('btn-desingsystem')} image={icons.github}></Button>
          <Button href="" name={t('btn-getcode')} image={icons.code}></Button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
