import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import NoMatch from "views/NoMatch"
import Tags from "views/Tags"
import Money from "views/Money"
import Statistics from "views/Statistics"
import Tag from "views/Tag"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/money"/>}></Route>
      <Route
        path="/tags"
        element={<Tags/>}
      />
      <Route
        path="/tags/:id"
        element={<Tag/>}
      />
      <Route
        path="/money"
        element={<Money/>}
      />
      <Route
        path="/statistics"
        element={<Statistics/>}
      />
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
  );
}

export default App;
