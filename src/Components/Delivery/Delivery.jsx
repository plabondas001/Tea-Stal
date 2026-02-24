const Delivery = ({orders}) => {
    return (
      <div className="border border-gray-200 w-50 p-3">
        <img className="w-50 h-30" src={orders.image} alt=""/>
        <h1 className="font-bold">{orders.name}</h1>
        <p className="font-bold">{orders.Price} Taka</p>
      </div>
    );
};

export default Delivery;