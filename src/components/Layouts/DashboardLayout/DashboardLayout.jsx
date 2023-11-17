import React from 'react';

const DashboardLayout = ({ children }) => {


 return (
  <div className="dashboard-layout">

   <section className="full_widht_auth_section">
    <div className="container">
     <div className="dashboard">
     {/* <DashboardMenu isActiveMenu={isActiveMenu} /> */}
      {children}
     </div>
    </div>
   </section>
  </div>
 )
}

export default DashboardLayout