import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import { javascript } from '@codemirror/lang-javascript';



const Code = () => {

    const [code,setCode] = useState('// write your code here');
    return (
    
    <div className="  bg-gray-900 w-6/12 h-full text-2xl">
    
        <CodeMirror
         theme={'dark'} 
         value={code}
         onChange={setCode}
         minHeight='100vh'
         extensions={[javascript({ jsx: true })]}

         />
    
    </div>

)
} 

export default Code;

