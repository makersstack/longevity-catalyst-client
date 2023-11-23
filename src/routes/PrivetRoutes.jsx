// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import RequireAuth from '../hooks/RequireAuth'
// import PageNotFound from '../pages/PageNotFound'
// import AddProject from '../pages/dashboard/AddProject'
// import AllProject from '../pages/dashboard/AllProject'
// import Dashboard from '../pages/dashboard/Dashboard'
// import EditUserProfile from '../pages/dashboard/EditUserProfile'
// import PasswordChange from '../pages/dashboard/PasswordChange'
// import ViewProfile from '../pages/dashboard/ViewProfile'

// const PrivetRoutes = () => {
//   return (
//     <Routes>
//       <Route element={<RequireAuth />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/project/all" element={<AllProject />} />
//         <Route path="/project/add" element={<AddProject />} />
//         <Route path="/profile/view" element={<ViewProfile />} />
//         <Route path="/profile/update" element={<EditUserProfile />} />
//         <Route path="/password/change" element={<PasswordChange />} />
//       </Route>

//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   )
// }

// export default PrivetRoutes;