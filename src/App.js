import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewAllRecipe from './components/ViewAllRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<AddRecipe />} />
        <Route path='/search' element={<SearchRecipe />} />
        <Route path='/view' element={<ViewAllRecipe />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
