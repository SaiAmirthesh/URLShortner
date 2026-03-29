import React,{useState} from 'react'

const Shorten = ({addUrl}) => {

  const [input,setInput] = useState("")

  const handleShorten = () =>{
    if(input.trim() === "") return;
    addUrl(input);
    setInput("");
  }

  return (
    <div className='search-bar'>
      <div className='search-box'>
        <input 
          type="text" 
          placeholder='Paste your long URL here...' 
          value={input}
          onChange={(e)=>{setInput(e.target.value)}}
          />
        <button onClick = {handleShorten}>Shorten</button>
      </div>
    </div>
  )
}

export default Shorten
