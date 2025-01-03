import React, { useState } from 'react';
import { ProductText } from './ProductText';
import ProductBtn from './ProductBtn';
import NewProductItem from './NewProductItem';
import NewProductSlide from './NewProductSlide';
import './NewProduct.css';
import { useTabContext } from "../context/TabContext";

function NewProduct({ productTxt, buttonList }) {
  const [activeButton, setActiveButton] = useState('clothes');
  const { activeTab } = useTabContext();

  const handleButtonClick = (btnName) => {
    setActiveButton(btnName);
    console.log(`NewProduct 버튼 클릭: ${btnName}`);
  };

  return (
    <div className="newProduct">
      <div className="newProductItem">
        <ProductText
          title={productTxt[0].title}
          description={productTxt[0].description}
        />
        <ProductBtn
          buttonList={buttonList}
          activeButton={activeButton}
          onButtonClick={handleButtonClick} // 독립적인 핸들러 전달
        />
        <NewProductItem navbarTap={activeTab} activeButton={activeButton} />
      </div>
      <NewProductSlide navbarTap={activeTab} />
    </div>
  );
}

export default NewProduct;
