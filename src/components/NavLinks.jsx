// import React from 'react'

const NavLinks = () => {
  return (
    <div className="my-3">
      <div className="hidden md:flex bg-[#4caf50] rounded-full py-2  h-[60px] justify-center items-center text-white text-lg">
        <h2 className="hover:bg-[#3f8f41] py-4 px-8 rounded-full cursor-pointer">Home</h2>
        <h2 className="hover:bg-[#3f8f41] py-4 px-8 rounded-full cursor-pointer">Project</h2>
        <h2 className="hover:bg-[#3f8f41] py-4 px-8 rounded-full cursor-pointer">About</h2>
        <h2 className="hover:bg-[#3f8f41] py-4 px-8 rounded-full cursor-pointer">Contact</h2>
      </div>
    </div>
  )
}

export default NavLinks
