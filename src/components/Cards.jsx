import React from 'react';

function Cards() {
  const products = [
    {
      "id": 1,
      "Product_Name": "Floral Printed Maxi Dress",
      "Price": 25.99,
      "Description": "Elegant floral dress with a flowing fit and flare style.",
      "Image_Link": "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25091562/2023/9/21/21d594dc-b90a-4a3a-9a86-8a95e49758071695286352086CHANSIFloralPrintedGeorgetteFitFlareMaxiGownEthnicDress1.jpg"
    },
    {
      "id": 2,
      "Product_Name": "Longline Open Front Jacket",
      "Price": 32.5,
      "Description": "Stylish longline jacket with open front, versatile for layering.",
      "Image_Link": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29535742/2024/5/15/f94546aa-486b-4c0d-bbcd-5d1737db5ee71715763886694ANDWomenViscoseRayonLonglineOpenFrontJacket1.jpg"
    },
    {
      "id": 3,
      "Product_Name": "Sleeveless A-line Dress",
      "Price": 18.75,
      "Description": "Chic A-line dress, perfect for casual outings and gatherings.",
      "Image_Link": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21972748/2023/2/14/221c5634-9c6c-4f93-90c2-0cee48ee16371676375243031Dresses1.jpg"
    },
    {
      "id": 4,
      "Product_Name": "Linen Shirt Dress",
      "Price": 22.99,
      "Description": "Light and airy linen shirt dress, perfect for warm weather.",
      "Image_Link": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30207959/2024/JULY/13/ExWSjWDb_6778406661e446619aa1893918ba20e8.jpg"
    },
    {
      "id": 5,
      "Product_Name": "Cotton Summer Tunic",
      "Price": 19.99,
      "Description": "Comfortable cotton tunic, ideal for casual outings and beach days.",
      "Image_Link": "https://i.pinimg.com/736x/f9/ea/c7/f9eac70788acbf726e572f616646b5c2.jpg"
    },
    {
      "id": 6,
      "Product_Name": "Denim Skirt",
      "Price": 27.5,
      "Description": "Classic denim skirt with a modern twist, perfect for casual wear.",
      "Image_Link": "   https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/21850884/2023/2/6/99bc94b6-848e-4d0e-89cc-523824ad0a4d1675685296600aayuYellowFloralGeorgetteMaxiMaxiDress1.jpg"
    },
    {
      "id": 7,
      "Product_Name": "Leather Crossbody Bag",
      "Price": 45.00,
      "Description": "Sleek leather crossbody bag, ideal for everyday use.",
      "Image_Link": "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/14017338/2021/4/16/2ec6d7bd-f448-4d8d-8134-7cbb65f94bbf1618575104043-Leather-Retail-Women-Jackets-6631618575102901-1.jpg"
    },
    {
      "id": 8,
      "Product_Name": "Elegant Office Blazer",
      "Price": 55.00,
      "Description": "Sleek and professional office blazer, perfect for business settings.",
      "Image_Link": "https://admin.indiantelevision.com/sites/default/files/images/tv-images/2020/08/31/mtnra.jpg"
    },
    {
      "id": 9,
      "Product_Name": "Floral Print A-line Midi Dress",
      "Price": 35.00,
      "Description": "Floral print dress with back tie-up detail, perfect for evening outings.",
      "Image_Link": "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/21592562/2023/8/21/bb13f092-e8fb-45c4-82f7-be2477b261841692622230107-Anouk-Floral-Print-Ethnic-A-Line-Midi-Dress-With-Back-Tie-Up-1.jpg"
    },
    {
      "id": 10,
      "Product_Name": "Casual Slip Dress",
      "Price": 29.99,
      "Description": "Simple and stylish slip dress, perfect for casual wear.",
      "Image_Link": "https://i.pinimg.com/564x/a9/59/e5/a959e55fec75a2fff6ac494d078037c4.jpg"
    },
    {
      "id": 11,
      "Product_Name": "Tie-Up Neck A-Line Dress",
      "Price": 40.00,
      "Description": "Chic A-line dress with tie-up neck detail, perfect for casual outings.",
      "Image_Link": "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24729508/2023/8/30/6e30d261-aaf5-4a27-925c-e3643d8aef461693371782981DEEBACOBlackTie-UpNeckA-LineDress1.jpg"
    }
  ];

  return (
    <div className="p-8">
      {/* <h1 className="text-2xl font-semibold text-center mb-6">Product Collection</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="relative w-full h-[90%] mb-4">
              <img
                src={product.Image_Link}
                alt={product.Product_Name}
                className="object-cover w-full h-full rounded-t-lg"
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-medium text-gray-800">{product.Product_Name}</h2>
              {/* <p className="text-sm text-gray-600 mt-2">{product.Description}</p> */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold -mt-4 text-gray-800">${product.Price}</span>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"> */}
                  {/* Add to Cart */}
                {/* </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
