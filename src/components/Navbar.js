import React, { useState, useEffect } from 'react';
import DynamicNavigationMenu from './DynamicNavbar';
function Navbar() {
    const menuItems = [
        'Home',
        'About Us',
        'Services',
        'Products',
        'Contact',
        'Music',
        'Movie',
        'News',
        'Abhisth 1',
        'Abhisth 1',
        'Abhisth 1',
        'Abhisth 1',
        'Abhisth 1',
        'Abhisth 1'
      ];
    
      return (
        <div>
          <DynamicNavigationMenu menuItems={menuItems} />
        </div>
      );
  
}

export default Navbar
