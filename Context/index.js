import React,  { useState, useEffect, createContext, useContext } from "react";
import { ethers } from "ethers";

//INTERNAL IMPORT
import {
    CheckIfWalletConnected,
    connectWallet,
    connectingTOKENCONTRACT,
    getBalance,
    connectingTOKEN_SALE_CONTRACT,

} from "../Utils/index";
import TokenSale from '../Components/TokenSale';

const StateContext = createContext();

export const StateContextProvider = ({children}) =>  {
    const TOKEN_ICO = "TOKEN SALL DAPP";

    // STATE VARIABLES
    const [address, setAddress] = useState("");
    const [balance , setbalance] = useState("");
    const [nativeToken, setNativeToken] = useState("");
    const [tokenHolders, setTokenHolders] = useState( [] );
    const [TokenSale, setTokenSale] = useState("");
    const [currentHolder, setCurrentHolder] = useState("");

    //FETCH CONTRACT DATA
    const fetchInitailData = async () => {
        try {
            //GET USER ACCOUNT
            const account = await CheckIfWalletConnected();
            //GET USER BALANCE
            const balance = await getBalance();
            setbalance(ethers.utils.formatEther(balance.toString()));
            setAddress(account);
            console.log(account)

            //TOKEN CONTRACT
            const TOKEN_CONTRACT = await connectingTOKENCONTRACT();


            let tokenBalance;
            if(account){
                tokenBalance = await TOKEN_CONTRACT.balanceOf(account)
            } else {
                tokenBalance = 0;
            }

            //GET ALL TOKEN DATE
            const tokenName = await TOKEN_CONTRACT.name();
            const tokenSymbol = await TOKEN_CONTRACT.symbol();
            const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
            const tokenStandart = await TOKEN_CONTRACT.standart();
            const tokenHolders = await TOKEN_CONTRACT._userId();
            const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
            const tokenAddress = await TOKEN_CONTRACT.address;

            console.log(tokenHolders.toNumber());

            const nativeToken = {
                tokenAddress: tokenAddress,
                tokenName: tokenName,
                tokenSymbol: tokenSymbol,
                tokenOwnerOfContract: tokenOwnerOfContract,
                tokenStandart: tokenStandart,
                tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
                tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
                tokenHolders: tokenHolders.toNumber(),
            };

            setNativeToken(nativeToken);

            //GETTING TOKEN HILDERS
            const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();
            setTokenHolders(getTokenHolder);

            //GETTING TOKEN HOLDER DATA

            if(account){
                const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(
                    account);

            const currentHolder = {
                tokenId: getTokenHolderData[0].toNumber(),
                from: getTokenHolderdata[1],
                to: getTokenHolderdata[2],
                totalToken: ethers.utils.formatEther(
                getTokenHolderdata[3].toString()),
                tokenHolder: getTokenHolderdata[4],
            };

            setCurrentHolder(currentHolder);
          }

          //TOKEN SALE CONTRACT
          const TOKEN_SALE_CONTRACT = await
          connectingTOKEN_SALE_CONTRACT();
          const tokenPrice = await TOKEN_SALE_CONTRACT.totalPrice();
          const tokenSold = await TOKEN_SALE_CONTRACT.tokensSold();
          const tokenSaleBalance = await TOKEN_CONTRACT.balanceOf("adresssssss burayaaaa");
          
          const tokenSale = {
            tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
            tokenSold: tokenSold.toNumber(),
            tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),

          };

          setTokenSale(tokenSale);

          console.log(tokenSale);
          console.log(currentHolder);
          console.log(nativeToken);


        }   catch (error) {
            console.log(error);
        }
    };

    useEffect(()=> {
        fetchInitailData();
    },[]);

    //BUT TOKEN
    const buyToken = async(nToken)=> {
        try {
            const amount = ethers.utils.parseUnits(nToken.toString(),"ether");
            const contract = await connectingTOKEN_SALE_CONTRACT();
            
            const buying = await contract.buyToken(nToken, {
                value: amount.toString(),
            });

            await buying.wait();
            console.log(buying);
            window.location.reload();

        } catch (error) {
          console.log(error)
            
        }
    };

    //NATIVE TOKEN TRANSFER
    const transferNativeToken = async()=> {
        try {
          const TOKEN_SALE_ADDRESS = "ADDDDRESSS BURAYAAAAAA"
          const TOKEN_AMOUNT =500;
          const tokens = TOKEN_AMOUNT.toString();
          const transferAmount = ethers.utils.parseEther(tokens);

          const contract = await connectingTOKENCONTRACT();
          const transcation = await contract.transfer(
            TOKEN_SALE_ADDRESS,
            transferAmount
          );
          console.log(contract);
          await transcation.wait();
          window.location.reload();
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return (
        <StateContext.Provider value={{
            transferNativeToken,
            buyToken,
            connectWallet,
            setAddress,
            TOKEN_ICO,
            currentHolder,
            TokenSale,
            tokenHolders,
            nativeToken,
            balance,
            address,
        }}>
            {children}
        </StateContext.Provider>
        
    );
};

export const useStateContext = () => useContext(StateContext);


