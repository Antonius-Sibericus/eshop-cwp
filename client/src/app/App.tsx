import { FC, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

interface AppProps {
  className?: string;
}

export const App: FC<AppProps> = (props) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
