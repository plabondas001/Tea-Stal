const Order = ({orderTea,handleDeliveryItem}) => {
    
    return (
        <div className="border border-gray-200 p-2 w-50">
            <div>
                <img className="w-full h-30" src={orderTea.image} alt=""/>
           
             <h1 className="font-bold">{orderTea.name}</h1>
            <h1 className="font-bold">{orderTea.Price}</h1>
            <div className="text-right">
            <button onClick={() => handleDeliveryItem(orderTea)} className="font-bold text-md bg-[#C7EABB] hover:bg-[#ACBFA4] px-3 py-1 mt-5 rounded-xl cursor-pointer">Delivery</button>
            </div>
           </div>
            </div>
        
    );
};

export default Order;