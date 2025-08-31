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

    const { t } = useTranslation('aboutPage');

    return (
    // <div className={classNames(cls.AboutPage, {}, [className])}>
        <div>
            {t('title')}
        </div>
    // </div>
    );
};

export default AboutPage;
