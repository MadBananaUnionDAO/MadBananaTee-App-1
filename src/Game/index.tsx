import { useEffect, useState } from "react"

type Props = {
    companyName: React.ReactNode;
}
const Game = ({companyName}:Props) => {


const [balance,setBalance] = useState(0);
const [balancePerSec,setBalancePerSec] = useState(0);
const [workerCount,setWorkerCount] = useState(0);
const [jrEngineerCount,setJrEngineerCount] = useState(0);
const [engineerCount,setEngineerCount] = useState(0);
const [seniorEngineerCount,setSeniorEngineerCount] = useState(0);

const opacityLowIfBalanceLowForWorker = (balance < 50) ? `bg-black/50`:`bg-bone`
const opacityLowIfBalanceLowForJREngineer = (balance < 100) ? `bg-black/50`:`bg-bone`
const opacityLowIfBalanceLowForEngineer = (balance < 500) ? `bg-black/50`:`bg-bone`
const opacityLowIfBalanceLowForSeniorEngineer = (balance < 1000) ? `bg-black/50`:`bg-bone`
const handleBalanceClick = () => {
    setBalance(balance + 1);
};
const handleWorkerClick = () => {
    if(balance >= 50){
    setWorkerCount(workerCount + 1);
    setBalancePerSec(balancePerSec + 1);
    setBalance(balance - 50);
    };
};
const handleJRClick = () => {
    if(balance >= 100){
        setJrEngineerCount(jrEngineerCount + 1);
        setBalancePerSec(balancePerSec + 5);
        setBalance(balance - 100);
    }
}
const handleEngineerClick = () => {
    if(balance >= 500){
        setEngineerCount(engineerCount + 1);
        setBalancePerSec(balancePerSec + 15);
        setBalance(balance - 500);
    }
}
const handleSeniorEngineerClick = () => {
    if(balance >= 1000){
        setSeniorEngineerCount(seniorEngineerCount + 1);
        setBalancePerSec(balancePerSec + 25);
        setBalance(balance - 1000);
    }
}
useEffect(() => {
    let timeout: NodeJS.Timeout 

    const updateBalance = () => {
        setBalance(balance => balance + balancePerSec);
        timeout = setTimeout(updateBalance, 1000);
    };

    updateBalance();

    return () => clearTimeout(timeout);
  }, [balancePerSec]);



  return (
    <>
    {/* COMPANY NAME */}
        <div className="flex justify-center items-center w-full mt-40">
            <h1 className="text-yellow md:text-4xl  text-2xl font-bold"><span className="text-green">$</span> {companyName} <span className="text-green">$</span></h1>
        </div>
    <div className=" flex md:flex-row flex-col justify-center mt-10 md:mt-28 items-center md:w-5/6 mx-auto w-full">
        {/* CLICK BUTTON */}
        <div className=" hover:opacity-90 transition duration-300">
            <button onClick={handleBalanceClick} className="md:h-[400px] md:w-[400px] rounded-full bg-green p-4 flex flex-col justify-center items-center  h-[250px] w-[250px]">
                <span className="text-yellow text-2xl lg:text-4xl">Click!</span>
                <span className="lg:text-xl text-bone">Balance: {balance}$</span>
                <span className="md:text-xl text-sm text-bone">Balance increase per second: {balancePerSec}$</span>
            </button>
        </div>
        {/* EMPLOYEES */}
        <div className="md:ml-20 md:mt-0 mt-10">
            <h1 className="md:text-2xl md:mb-20 mb-6 lg:text-4xl flex justify-center items-center font-semibold text-xl">Hire employees for your company</h1>
            {/* WORKER */}
            <div className={`${opacityLowIfBalanceLowForWorker} flex mt-3 justify-between  p-5 rounded-3xl `}>
                <div className="flex flex-col justify-center items-center w-[220px]">
                <h1 className="lg:text-xl font-semibold">Worker <span className="text-green md:text-xl">50$</span></h1>
                <p className="text-xs md:text-sm">balance income per second : <span className="text-green">1$</span></p>
                </div>
                <div className="flex justify-center items-center bg-green lg:w-16 lg:h-16 h-10 w-10 rounded-full">
                    {workerCount}
                </div>
                <button onClick={handleWorkerClick} className="p-4 hover:opacity-90 transition duration-300 bg-yellow rounded-full w-10 h-10 lg:h-16 lg:w-16 flex justify-center items-center ">
                    <p>+</p>
                </button>
            </div>
            {/* JR SOFTWARE ENGINEER */}
            <div className={`${opacityLowIfBalanceLowForJREngineer} flex mt-3 justify-between  p-5 rounded-3xl `}>
                <div className="flex flex-col justify-center items-center w-[220px]">
                <h1 className="lg:text-xl font-semibold flex justify-center items-center"> Jr. Engineer<span className="text-green md:text-xl ml-1">100$</span></h1>
                <p className="text-xs md:text-sm">balance income per second : <span className="text-green">5$</span></p>
                </div>
                <div className="flex justify-center items-center bg-green lg:w-16 lg:h-16 h-10 w-10 rounded-full">
                    {jrEngineerCount}
                </div>
                <button onClick={handleJRClick} className="p-4 hover:opacity-90 transition duration-300 bg-yellow rounded-full w-10 h-10 lg:h-16 lg:w-16 flex justify-center items-center ">
                    <p>+</p>
                </button>
            </div>
            {/* ENGINEER */}
            <div className={`${opacityLowIfBalanceLowForEngineer} flex mt-3 justify-between  p-5 rounded-3xl `}>
                <div className="flex flex-col justify-center items-center w-[220px]">
                <h1 className="lg:text-xl font-semibold flex justify-center items-center">Engineer<span className="text-green md:text-xl ml-1">500$</span></h1>
                <p className="text-xs md:text-sm">balance income per second : <span className="text-green">15$</span></p>
                </div>
                <div className="flex justify-center items-center bg-green lg:w-16 lg:h-16 h-10 w-10 rounded-full">
                    {engineerCount}
                </div>
                <button onClick={handleEngineerClick} className="p-4 hover:opacity-90 transition duration-300 bg-yellow rounded-full w-10 h-10 lg:h-16 lg:w-16 flex justify-center items-center ">
                    <p>+</p>
                </button>
            </div>
            {/* SENIOR ENGINEER */}
            <div className={`${opacityLowIfBalanceLowForSeniorEngineer} flex mt-3 justify-between  p-5 rounded-3xl `}>
                <div className="flex flex-col justify-center items-center w-[220px]">
                <h1 className="lg:text-xl font-semibold flex justify-center items-center">Senior Engineer<span className="text-green md:text-xl ml-1">1000$</span></h1>
                <p className="text-xs md:text-sm">balance income per second : <span className="text-green">25$</span></p>
                </div>
                <div className="flex justify-center items-center bg-green lg:w-16 lg:h-16 h-10 w-10 rounded-full">
                    {seniorEngineerCount}
                </div>
                <button onClick={handleSeniorEngineerClick} className="p-4 hover:opacity-90 transition duration-300 bg-yellow rounded-full w-10 h-10 lg:h-16 lg:w-16 flex justify-center items-center ">
                    <p>+</p>
                </button>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Game