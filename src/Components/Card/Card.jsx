const Card = () => {
  return (
    <div className="w-11/12 mx-auto relative">
      <div className="flex lg:card-side w-[900px] mb-5 bg-base-100 shadow-sm">
        <img className="w-full" src="/header.jpg" alt="Tea" />

        <div className="card-body">
          <h2 className="card-title text-white">
            চায়ের দোকান মানেই আড্ডার আসর। গরম ধোঁয়া ওঠা চায়ের কাপ হাতে মানুষ
            গল্প করে, হাসে আর দিনের ক্লান্তি ভুলে যায়। এখানে পাওয়া যায় দুধ চা,
            লাল চা, আদা চা—সবই সস্তা আর মজাদার। চায়ের সাথে থাকে বিস্কুট বা মুড়ি,
            আর দোকানদারের আন্তরিক হাসি। গ্রাম হোক বা শহর, চায়ের দোকান মানুষের
            মিলনস্থল, যেখানে বন্ধুত্ব আর সম্পর্ক আরও গভীর হয়।
          </h2>
        </div>
      </div>

      <div className="">
        <div className="absolute right-0 flex lg:card-side w-[900px] mb-5 bg-base-100 shadow-sm">
          <img className="w-full h-80" src="https://i.ibb.co.com/MQzTfZ7/1c59b8dc371634aeaea14fd52d75c324.avif" alt="Tea" />

          <div className="card-body">
            <h2 className="card-title text-white">
              চায়ের দোকান মানেই আড্ডার আসর। গরম ধোঁয়া ওঠা চায়ের কাপ হাতে মানুষ
              গল্প করে, হাসে আর দিনের ক্লান্তি ভুলে যায়। এখানে পাওয়া যায় দুধ চা,
              লাল চা, আদা চা—সবই সস্তা আর মজাদার। চায়ের সাথে থাকে বিস্কুট বা
              মুড়ি, আর দোকানদারের আন্তরিক হাসি। গ্রাম হোক বা শহর, চায়ের দোকান
              মানুষের মিলনস্থল, যেখানে বন্ধুত্ব আর সম্পর্ক আরও গভীর হয়।
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
