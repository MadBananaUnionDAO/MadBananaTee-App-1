import { useState } from "react";
import Game from "./Game";
import TopBar from "./TopBar";

function App() {
  const [isOpen,setIsOpen] = useState(true)
  const [textAreaValue,setTextAreaValue] = useState('');
  const [companyName,setCompanyName] = useState('');
  const [isRequiredRed,setIsRequiredRed] = useState(false);
  const handleMenu = () => {
      if(textAreaValue === ''){
        setIsOpen(true)
        setIsRequiredRed(true);
      }
      if(textAreaValue !== ''){
        setCompanyName(textAreaValue);
        setIsOpen(false);
      }

  }
  const handleChange = (e:any) => {
    setTextAreaValue(e.target.value);

  }
  const REDTEXT = isRequiredRed ? `text-red-500 ` : `text-bone`

  return (
    <>
    {isOpen && (

    <div onClick={() => setIsRequiredRed(true)} className="fixed z-40 inset-0 bg-black">
      <div  className="fixed top-[50%] left-[50%] p-6 transform translate-x-[-50%] w-[85%] translate-y-[-50%] h-[60%] lg:w-[60%] bg-[#2c2b2b] rounded-3xl">
          <h1 className="flex justify-center items-center text-4xl text-yellow font-bold">Hello!</h1>
          <div className="mt-10 flex justify-center items-center">
            <p className="text-bone text-center md:text-3xl smallest:text-xl">In this game you are the owner of a bankrupt company and you need to<span className="text-green"> make money </span> again. You can click the button and<span className="text-green"> make money </span>.</p>
          </div>
          <div className="md:mt-20 lg:mt-28 mt-5 smallest:mt-16">
            <h1 className={`${REDTEXT} text-center transition duration-500 lg:text-3xl md:text-2xl `}>Input your company name:</h1>
            <div className="flex flex-col justify-center items-center p-6">
              <textarea onChange={handleChange} value={textAreaValue} className=" resize-none bg-[#2c2b2b] border-2 rounded-2xl text-bone px-2 border-opacity-70 border-bone outline-none" placeholder="Company name..." name="companyname" id="companyname" cols={20} rows={1}>{textAreaValue}</textarea>
              <button onClick={handleMenu} className="text-[#2c2b2b] hover:bg-[#2c2b2b] hover:text-bone mt-3 rounded-2xl bg-bone px-6 py-2">Start!</button>
            </div>
          </div>
      </div>
    </div>
    )
    }
    <div className="app">
      <TopBar/>
      <Game companyName={companyName} />
    </div>
    </>
  );
}

export default App;
