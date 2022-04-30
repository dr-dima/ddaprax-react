import './styles/grid.css';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Posts from './routes/Posts';
import PostPage from './routes/PostPage';
import Products from './routes/Products';
import ProductPage from './routes/ProductPage';
import {LocalContextProvider} from "./contexts/LocalContextProvider";

function App() {

  return (
      <LocalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostPage />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </LocalContextProvider>
  );
}

export default App;
