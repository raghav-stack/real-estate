import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";


function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  
  
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer'>
                    <span className='text-slate-500'>Real</span>
                    <span className='text-slate-700'>EState</span>
                </h1>
            </div>
            <div>
                <ul className='flex space-x-10'>
                  <li className='cursor-pointer py-3 text-sm font-semibold 
                  text-black-400 hover:underline'
                    onClick={() => navigate("/")}
                  >Home
                  </li>

                  <li className='cursor-pointer py-3 text-sm font-semibold 
                    text-black-400 hover:underline'
                      onClick={() => navigate("/offers")}
                  >
                    Offers
                  </li>

                  <li className='cursor-pointer py-3 text-sm font-semibold 
                    text-black-400 hover:underline' 
                      onClick={() => navigate("/profile")}
                  > 
                    {pageState}
                  </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header