import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import audioUrl from './utils/0.mp3';
import audioUrl1 from './utils/1.mp3';
import audioUrl2 from './utils/2.mp3';
import audioUrl3 from './utils/3.mp3';
const audio = new Audio(
  audioUrl
);
const audio1 = new Audio(
  audioUrl1
);
const audio2 = new Audio(
  audioUrl2
);
const audio3 = new Audio(
  audioUrl3
);
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
  const playMusic = (jIndex)=>{
    if (jIndex==0){
      audio.play();

    }else if (jIndex==1){
      audio1.play();

    }else if(jIndex==2){
      audio2.play()
    }else if(jIndex==3){
      audio3.play()
    }
 
  }
  const [gameTime ,setGameTime] = useState(2)  
  const [l,setl] = useState([
    [ false, true, false, false],
    [ false, false, false, true],
    [ false, true, false, false],
    [ false, false, false, true],
    [ false, true, false, false],
  ])
  const [gameStatus,SetGameStatus] = useState()
  const [score,setScore] =  useState(0)
  const removeAndAdd = () =>{
    const random = randomlyGenerateList()
    const temp = [...l]
    temp.splice(l.length-1, 1)
    temp.splice(0,0,random)
    setl(temp)
  }
  const correct = (jIndex)=>{
    setScore(score+10)
    playMusic(jIndex)
    removeAndAdd()
  }
  setTimeout(()=>SetGameStatus(true),gameTime*1000*60)

  return (<div className='maindiv'>
     {
      gameStatus===false && <div className='score-page red'>
        score : {score}

    </div>
     }
     {
      gameStatus===true && <div className='score-page green'>
        score : {score}

    </div>
     }

   
      score:{score}
    <div className="Container">
    <div>{
      
      l.map((i,index)=>{
        return <div className='row'>
          {i.map((j,jIndex)=>{
            return <div className={`box ${j?'black':'white'}`} onClick={()=>{
              console.log("it is clicked",l.length,index)
              if (l.length-1==index){
                if (!j){
                  SetGameStatus(false)
                }else{
                  correct(jIndex)
                
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
