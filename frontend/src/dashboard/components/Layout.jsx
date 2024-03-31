import React from 'react'
import { Outlet, /*Link*/ } from 'react-router-dom';

const Layout = () => {
  return (
    <div>

        <nav>
            <ul>

            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout