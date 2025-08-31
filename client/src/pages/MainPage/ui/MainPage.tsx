// import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('mainPage');

    return (
    // <div className={classNames(cls.MainPage, {}, [className])}>
        <div>
            {t('title')}
        </div>
    // </div>
    );
};

export default MainPage;
