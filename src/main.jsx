import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Header } from './components/header.jsx'
import { Intro } from './components/Intro.jsx'
import { Frames1 } from './components/Frames1.jsx'
import { Latest_posts } from './components/Latest_posts.jsx'
import { FeaturedPosts } from './components/FeaturedPosts.jsx'
import './index.css'
import { Footer } from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />
  <Header />
  <Intro />
  <Frames1 />
  <hr />
  <Latest_posts />
  <hr />
  <FeaturedPosts />
  <Footer />
  </> 
)
