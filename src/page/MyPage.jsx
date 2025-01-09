import React, { useState } from 'react';
import Header from "../components/Header.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import OrderManagement from "../components/OrderManagement"
import MyBoon from "../components/MyBoon"
import MyActivity from "../components/MyActivity"
import MyInformation from "../components/MyInformation"
import CustomerService from "../components/CustomerService"
import MyPageInFo from "../components/MyPageInFo"
import MyPageLevel from "../components/MyPageLevel"
import '../css/MyPage.css'

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("");
  const [basicPage, setBasicPage] = useState(true);
  const [isClickLevel, setIsClickLevel] = useState(true);

  const randerActiveTap = () => {
    if(activeTab === "ordermanagement"){
      return <OrderManagement></OrderManagement>
    }else if (activeTab === "myboon") {
      return <MyBoon></MyBoon>
    }else if(activeTab === "myactivity"){
      return <MyActivity></MyActivity>
    }else if(activeTab === "myinformation") {
      return <MyInformation></MyInformation>
    }else if(activeTab === "customerservice"){
      return <CustomerService></CustomerService>
    }
  }

  const chageOrderManagement = () => {
    setActiveTab("ordermanagement");
    setBasicPage(false);
  }

  const chageMyBoon = () => {
    setActiveTab("myboon");
    setBasicPage(false);
  }

  const chageMyactivity = () => {
    setActiveTab("myactivity");
    setBasicPage(false);
  }

  const chageMyInformation = () => {
    setActiveTab("myinformation");
    setBasicPage(false);
  }

  const chageCustomerService = () => {
    setActiveTab("customerservice");
    setBasicPage(false);
  }

  const comebackMyPage = () => {
    setActiveTab("")
    setBasicPage(true);
    setIsClickLevel(true);
  }

  return (
    <div>
      <Header/>
      <NavBar/>
      <div className="mypage">
        <div className="mypageTop">
          <button onClick={comebackMyPage} className='mypageTitle'>마이페이지</button>
          <div className="mypageTab">
            <ul className="mypageList">
              <li><button className={activeTab === "ordermanagement" ? "active" : null} onClick={chageOrderManagement}>주문관리</button></li>
              <li><button className={activeTab === "myboon" ? "active" : null} onClick={chageMyBoon}>나의 혜택</button></li>
              <li><button className={activeTab === "myactivity" ? "active" : null} onClick={chageMyactivity}>나의 활동</button></li>
              <li><button className={activeTab === "myinformation" ? "active" : null} onClick={chageMyInformation}>나의 정보</button></li>
              <li><button className={activeTab === "customerservice" ? "active" : null} onClick={chageCustomerService}>고객센터</button></li>
            </ul>
          </div>
        </div>
        <div className="mypageMain">
          <div className="mypageHome">
            <div className="mypageHomeTop">
            {
              isClickLevel ? <span>qkql7205 님,</span> : <span>qkql7205 님은, Welcome 등급입니다.</span>
            }
            {
              isClickLevel ? <MyPageInFo setIsClickLevel={setIsClickLevel}></MyPageInFo> : <MyPageLevel></MyPageLevel>
            }
            </div>
            <div className="mypagemiddle">
              
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MyPage;