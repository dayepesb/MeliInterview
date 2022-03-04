import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import ItemDetail from '../containers/ItemDetail';
import NotFound from '../containers/NotFound';
import SearchLayout from '../layouts/SearchLayout';
import '../styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SearchLayout />} exact>
          <Route index element={<></>} />
          <Route exact path='/items' element={<Home />} />
          <Route exact path='/items/:id' element={<ItemDetail />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
