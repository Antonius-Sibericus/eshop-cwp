import { FC, Suspense, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './providers';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

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
      <button onClick={toggleTheme}>Light/Dark mode</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
