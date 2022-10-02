import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*<div className='score-page'>
      <div className='red'>
        score : 1390
      </div>
      <div className='green' >
      score : 1390

      </div>
    </div>
    */
   /*<div className='instruction'>
      <h4>
      Do not touch any white tile.

      </h4>
      <h4>
      Tap the lowest black tiles and get 120 ones as soon as possible.

      </h4>
      <h4>
      You can play the game with Mouse or Keyboard with buttons ( A, S, D, F).
High score page

      </h4>
    </div>*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function randomlyGenerateList(){
  
    const random = getRandomInt(4)
    console.log(random)
  var arr = [false, false, false, false]
  arr[random]=true
  return arr
}
function App() {
  let s = 0
  const [l,setl] = useState([
    [ false, true, false, false],
    [ false, false, false, true],
    [ false, true, false, false],
    [ false, false, false, true],
    [ false, true, false, false],
    ])
  const [gameStatus,SetGameStatus] = useState()
  const [score,setScore] =  useState(0)
  return (<div className='maindiv'>
     {
      gameStatus===false && <div className='score-page red'>
        score : {score}

    </div>
     }

   
      score:{score}
    <div className="Container">
    <div>{
      
      l.map((i,index)=>{
        return <div className='row'>
          {i.map(j=>{
            return <div className={`box ${j?'black':'white'}`} onClick={()=>{
              console.log("it is clicked",l.length,index)
              if (l.length-1==index){
                if (!j){
                  SetGameStatus(false)
                }else{
                  setScore(score+10)
                  const random = randomlyGenerateList()
                  const temp = [...l]
                  temp.splice(0, 1)
                  temp.push(random)
                  setl(temp)
                }
              }
              
            }}>
            </div>
          })}
          </div>
        })
      }
      </div>
    </div>
    </div>
  );
}

export default App;
