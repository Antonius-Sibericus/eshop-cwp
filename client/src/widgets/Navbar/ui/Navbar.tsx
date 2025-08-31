import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.PLAIN} to="/">{t('mainLink')}</AppLink>
            <AppLink theme={AppLinkTheme.PLAIN} to="/about">{t('aboutLink')}</AppLink>
        </div>
    );
};
