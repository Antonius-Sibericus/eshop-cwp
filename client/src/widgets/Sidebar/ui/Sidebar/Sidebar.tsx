import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher';

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
    setIsCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
      <button onClick={expand}>Expand/collapse</button>
      <ThemeSwitcher />
    </div>
  );
};
