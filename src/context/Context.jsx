import { createContext, useState } from "react";
import run from "../config/gemini";
import { GoDotFill } from "react-icons/go";

export const Context = createContext ();

const ContextProvider = (props) => {

    const [Input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPro,SetPrevPro] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("")

    const delaypara = (index,nextWord) => {
        setTimeout(function(){
                setResultData(prev=>prev+nextWord);
        },30*index)
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response ;
        if(prompt !== undefined){
            setRecentPrompt(prompt);
            response = await run(prompt)
            console.log("prompt")
        }else{
           setRecentPrompt(Input)
           SetPrevPro(prev=>[...prev,Input])
           response = await run(Input) 
        }

        let responseArray = response.split("**");
        let newResponse = "";
        for(let i=0;i<responseArray.length;i++)
        {
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<br><b>"  + responseArray[i] +"</b>";
            }
        } 
        let newResponse2 = newResponse.split("*").join(" ");     //setResultData(newResponse2);
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length;i++)
            {
            const nextWord = newResponseArray[i]
            delaypara(i,nextWord+" ")
            }
        setLoading(false)
        setInput("");
    }

    const contextValue = { 
        prevPro,
        SetPrevPro,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        Input,
        newChat,
        setInput
      }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;