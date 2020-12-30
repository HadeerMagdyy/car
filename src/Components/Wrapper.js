import React ,{useState} from 'react';
import { IntlProvider} from "react-intl";
import English from "../languages/en-US.json";
import Arabic from  "../languages/ar.json";

export  const Context=React.createContext();
const local=navigator.language;
let lang;
if(local==="ar"){
  lang=Arabic;
} else{
  lang=English;
}

const Wrapper=(props)=>{
    const [locale,setLocale]=useState(local);
    const [messages,setMessages]=useState(lang);
    function selectLang (e){
        const newLocale=e.target.value;
        setLocale(newLocale);
        if(newLocale==="ar"){
            setMessages(Arabic);
        }else{
            setMessages(English);
        }
    }
    return(
      <Context.Provider value={{locale,selectLang}}>
        <IntlProvider messages={messages} locale={locale}>
            {props.children}
        </IntlProvider>
      </Context.Provider>
    );
}
export default Wrapper;