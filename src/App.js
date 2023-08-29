import Header from './components/Header';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import { AppContext } from './context/AppContext';
import { useContext,useEffect } from 'react';
import './App.css'

export default function App() {
  const {fetchBlogPost}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPost();
  },[])
  return (
  <div className='w-full h-full'>
  <Header/>
  <Blogs/>
  <Footer/>
  </div>
  );
}
