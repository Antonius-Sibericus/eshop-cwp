// import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
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
        <div className={classNames(cls.AboutPage, {}, [className])}>
            {t('title')}
        </div>
    );
};

export default AboutPage;
