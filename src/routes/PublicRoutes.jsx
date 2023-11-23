// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import IfAuthCheck from '../hooks/IfAuthCheck'
// import AboutUs from '../pages/AboutUs'
// import FAQ from '../pages/FAQ'
// import Home from '../pages/Home'
// import PageNotFound from '../pages/PageNotFound'
// import ProfileShow from '../pages/ProfileShow'
// import Login from '../pages/auth/Login'
// import SignUp from '../pages/auth/SignUp'

// const PublicRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<AboutUs />} />
//       <Route path="/faqs" element={<FAQ />} />

//       <Route element={<IfAuthCheck />}>
//         <Route path="/login" element={<Login />} />
//         <Route path="/sign-up/:type" element={<SignUp />} />
//       </Route>

//       <Route path="/:profile" element={<ProfileShow />} />
     
      

//       <Route path="*" element={<PageNotFound />} />
//     </Routes>
//   )
// }

// export default PublicRoutes;