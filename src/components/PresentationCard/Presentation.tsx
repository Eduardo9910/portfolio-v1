import { useTranslation } from 'react-i18next';
import { images } from '../../helpers/images';
import './Presentation.css';

function Presentation() {
  const { t } = useTranslation();
  return (
    <>
      <div
        id="presentationContainer"
        className="flex justify-center items-center flex-col gap-10 max-lg:gap-5"
      >
        <div className="flex items-center gap-10 max-lg:flex-col max-lg:gap-5">
          <img src={images.eduardo} alt="" className="profile-img"></img>
          <div>
            <h1>{t('label-name')}</h1>
            <h2>{t('label-specialty')}</h2>
          </div>
        </div>

        <div className="relative">
          <div className="shadow-box-card">
            <p className="overflow-y-auto">{t('text-presentation')}</p>
          </div>
          <div className="end-text"></div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
