import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../hooks/RequireAuth'
import ContributorProfile from '../pages/ContributorProfile'
import PageNotFound from '../pages/PageNotFound'
import ProfileShow from '../pages/ProfileShow'
import ProjectDetails from '../pages/ProjectDetails'

const GlobalRoute = () => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/single-project" element={<ProjectDetails />} />
        <Route path="/:username/single-project" element={<ProjectDetails />} />
        <Route path="/contributor/:username" element={<ContributorProfile />} />
      </Route>

      <Route path="/:profile" element={<ProfileShow />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default GlobalRoute;