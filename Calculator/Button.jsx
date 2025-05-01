import "./Button.css"

export function Button ({onClick}){


    return(
        <div id="container">
        <div>
            <button onClick={()=>onClick('+')}>+</button>
            <button onClick={()=>onClick('7')}>7</button>
            <button onClick={()=>onClick('4')}>4</button>
            <button onClick={()=>onClick('1')}>1</button>
            <button onClick={()=>onClick('0')}>0</button>

            </div>    
            <div>
            <button onClick={()=>onClick('-')}>-</button>
            <button onClick={()=>onClick('8')}>8</button>
            <button onClick={()=>onClick('5')}>5</button>
            <button onClick={()=>onClick('2')}>2</button>
            <button onClick={()=>onClick('.')}>.</button>
            </div>
             <div> 
            <button onClick={()=>onClick('*')}>*</button>
            <button onClick={()=>onClick('9')}>9</button>
            <button onClick={()=>onClick('6')}>6</button>
            <button onClick={()=>onClick('3')}>3</button>
            <button onClick={()=>onClick('AC')}>AC</button>
            </div>

            <div>
            <button onClick={()=>onClick('/')}>/</button>
            <button style={{height:'200px'}} onClick={()=>onClick('=')}>=</button>
            </div>

            </div>


       
   

    )


}