import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root'
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'
import Blog from './components/Blog'
import Contact from './components/Contact'
import FooterTop from './components/FooterTop'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer';
import Watched from './components/Watched';
import { QueryClientProvider,QueryClient } from 'react-query';
import 'antd/dist/antd.css';

const query = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <QueryClientProvider client={query}>
        <Navbar/>
        <Home/>
        <About/>
        <Service/>
        <Testimonial/>
        <Watched />
        <Team/>
        <Blog/>
        <Contact/>
        <FooterTop/>
        <Footer/>
      </QueryClientProvider>
    </BrowserRouter>
  </>
);


