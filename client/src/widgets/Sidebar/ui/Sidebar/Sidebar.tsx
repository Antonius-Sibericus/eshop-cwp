import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const expand = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
            <button type="button" onClick={expand}>Expand/collapse</button>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    );
};
