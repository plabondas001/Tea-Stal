const Navbar = () => {
    return (
       <div className="border-b-2 border-[#84B179]">
         <div className="w-11/12 mx-auto lg:flex items-center justify-between">
           <div className="flex items-center justify-center">
             <img className="w-15 rounded-full h-15 p-2" src="/nav.jpg" alt=""/>
            <h1 className="font-bold text-3xl">Tea<span className="text-[#84B179]">Stall</span></h1>
           </div>
           <ul className="flex items-center justify-center p-2 lg:flex gap-10">
            <li className="hover:border-b-2 hover:font-bold"><a href="#">Home</a></li>
            <li className="hover:border-b-2 hover:font-bold"><a href="#">About</a></li>
            <li className="hover:border-b-2 hover:font-bold"><a href="#">Services</a></li>
            <li className="hover:border-b-2 hover:font-bold"><a href="#">Blog</a></li>
            <li className="hover:border-b-2 hover:font-bold"><a href="#">Contact</a></li>
           </ul>
           <div className="flex justify-center items-center gap-5">
            <button className="font-bold bg-[#2044e5] text-white px-3 py-1 rounded-xl cursor-pointer">Login</button>
           <button className="bg-[#84B179] px-3 py-1 rounded-xl text-white font-bold cursor-pointer">Talk To Our Team</button>
           </div>
        </div>
       </div>
    );
};

export default Navbar;