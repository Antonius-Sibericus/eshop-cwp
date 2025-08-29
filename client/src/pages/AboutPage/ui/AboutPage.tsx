// import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
  className?: string;
}

const AboutPage: FC<AboutPageProps> = (props) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  return (
    // <div className={classNames(cls.AboutPage, {}, [className])}>
    <>About Page</>
    // </div>
  );
};

export default AboutPage;
