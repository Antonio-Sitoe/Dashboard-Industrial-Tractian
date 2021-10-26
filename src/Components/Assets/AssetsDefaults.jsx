import React from 'react';
import { Routes, Route } from 'react-router';
import Assets from './Assets';
import SingleAssets from './SingleAssets';

function AssetsDefaults() {
  return (
    <div>
      <Routes>
        <Route path='' element={<Assets />} />
        <Route path='/:id' element={<SingleAssets />} />
      </Routes>
    </div>
  );
}

export default AssetsDefaults;
