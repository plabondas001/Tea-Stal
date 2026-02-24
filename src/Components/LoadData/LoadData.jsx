import { use, useState} from "react";
import Main from "../Main/Main";
import Order from "../Order/Order";
import { toast } from "react-toastify";
import Delivery from "../Delivery/Delivery";
import Card from "../Card/Card";

const LoadData = ({ promiseData }) => {
  const data = use(promiseData);

  const [teas,setTeas] = useState([])

  const [orderItem,setOrderItem] = useState([])

    


  const handleItem = (tea) => {
    const copyItem = teas.find(teas => teas.id == tea.id)
    if(copyItem){
        toast.error("Allready Added")
        return
    }
    const newItem = [...teas,tea]
    toast.success("Added Your Order")
    setTeas(newItem)
}





    const handleDeliveryItem = (tea) => {
        const removeItem = teas.filter(teas => teas.id !== tea.id)
        toast("Delivery Done")
        setTeas(removeItem)

        const newitem = [...orderItem,tea]
        setOrderItem(newitem)
    }

  return (
    <div>
      <div className="text-center bg-[#ACBFA4]">
        <h1 className="w-11/12 mx-auto font-bold text-2xl p-3">
        আমাদের চায়ের দোকানে আপনাকে স্বাগতম। গরম ধোঁয়া ওঠা এক কাপ চায়ের সাথে শুরু
        হোক গল্প, হাসি আর বন্ধুত্বের নতুন অধ্যায়। এখানে প্রতিটি চুমুক শুধু চা
        নয়, আড্ডার আনন্দও বয়ে আনে
      </h1>
      </div>
      <div className="w-11/12 mx-auto mt-3">
       <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
         {data.map((tea) => (
          <Main key={tea.id} handleItem={handleItem} tea={tea}></Main>
        ))}
       </div>

       <div>
        <div className="">
            <h1 className="mt-5 font-bold text-2xl">Order Items {teas.length}</h1>
            <div className="grid mb-5 space-y-5 mt-5">
                {
                    teas.map(orderTea => <Order key={orderTea.id} handleDeliveryItem={handleDeliveryItem} orderTea = {orderTea}></Order>)
                }
            </div>
        </div>
       </div>
      </div>
    <div>
        <div>
            <Card></Card>
        </div>
        <div className="w-11/12 mx-auto mt-10">
            <h1 className="font-bold text-2xl">Delivery{orderItem.length}</h1>
            <div className="space-y-5 mt-3 mb-5">
              {
                orderItem.map(orders => <Delivery orders ={orders}></Delivery>)
              }
            </div>
        </div>
    </div>
    </div>
  );
};

export default LoadData;
