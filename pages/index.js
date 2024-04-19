import React from "react";
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale,
  Partner,
} from "../Components/index";
import { useStateContext } from "../Context/index"; // Import useStateContext

const index = () => {
  const {
    transferNativeToken,
    buyToken,
    connectWallet,
    setAddress,
    tokenSale,
    nativeToken,
    address,
  } = useStateContext();

  return (
    <div className="v_dark">
      <Header
        address={address}
        setAddress={setAddress}
        connectWallet={connectWallet}
      />
      <Banner transferNativeToken={transferNativeToken} />
      <Service />
      <About />
      <TokenSale buyToken={buyToken} tokenSaleData={tokenSale} />
      <Distribution />
      <MobileApp />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default index;
