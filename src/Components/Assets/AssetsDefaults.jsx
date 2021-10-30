import React from 'react';
import { Routes, Route } from 'react-router';
import Assets from './Assets';
import AddResponsable from './SingleAssets/AddResponsable';
import SingleAssets from './SingleAssets/SingleAssets';
import SingleAssetsDefault from './SingleAssets/SingleAssetsDefault';
import Page404 from '../Page404/Page404';

function AssetsDefaults() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Assets />} />
        <Route path='/:id/' element={<SingleAssetsDefault />}>
          <Route path='' element={<SingleAssets />} />
          <Route path='responsable' element={<AddResponsable />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AssetsDefaults;
