import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import ItemDetail from '../containers/ItemDetail';
import NotFound from '../containers/NotFound';
import SearchLayout from '../layouts/SearchLayout';
import '../styles/global.scss';
import ROUTES from '../utils/RouteUtil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<SearchLayout />} exact>
          <Route index element={<div />} />
          <Route exact path={ROUTES.SEARCH_LIST} element={<Home />} />
          <Route exact path={ROUTES.ITEM_DETAIL} element={<ItemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
