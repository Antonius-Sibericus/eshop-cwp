import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import cls from './ThemeSwitcher.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
