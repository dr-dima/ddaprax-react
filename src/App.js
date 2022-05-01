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
            <Route basename={`/${process.env.PUBLIC_URL}`} path={`/${process.env.PUBLIC_URL}`} element={<Home />} />
            <Route path={`${process.env.PUBLIC_URL}/posts`} element={<Posts />} />
            <Route path={`${process.env.PUBLIC_URL}/posts/:id`} element={<PostPage />} />
            <Route path={`${process.env.PUBLIC_URL}/products`} element={<Products />} />
            <Route path={`${process.env.PUBLIC_URL}/products/:id`} element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </LocalContextProvider>
  );
}

export default App;
