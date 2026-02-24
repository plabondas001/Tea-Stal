
const Main = ({tea,handleItem}) => {
    return (
       <div>
       <div className="border rounded-2xl mt-5 mb-5 p-3 hover:scale-110 transform transition duration-300 ease-in-out cursor-pointer border-gray-200 shadow-xl">
         <img className="w-full h-40" src={tea.image} alt=""/>
         <h1 className="font-semibold text-xl">{tea.name}</h1>
         <p className="">{tea.description}</p>
         <h2 className="font-semibold pt-3">Price : {tea.Price}</h2>
         <div className="text-right">
         <button onClick={() => handleItem(tea)} className="text-right bg-[#ACBFA4] px-5 py-1 rounded-xl mt-5 cursor-pointer">Order Now</button>
         </div>
       </div>
       </div>
    );
};

export default Main;