import { useState, useRef, useEffect} from 'react'
import useSound from 'use-sound';
import C4 from './sound/piano-mp3/C4.mp3'
import Db4 from './sound/piano-mp3/Db4.mp3'
import D4 from './sound/piano-mp3/D4.mp3'
import Eb4 from './sound/piano-mp3/Eb4.mp3'
import E4 from './sound/piano-mp3/E4.mp3'
import F4 from './sound/piano-mp3/F4.mp3'
import Gb4 from './sound/piano-mp3/Gb4.mp3'
import G4 from './sound/piano-mp3/G4.mp3'
import Ab4 from './sound/piano-mp3/Ab4.mp3'
import A4 from './sound/piano-mp3/A4.mp3'
import Bb4 from './sound/piano-mp3/Bb4.mp3'
import B4 from './sound/piano-mp3/B4.mp3'
import C5 from './sound/piano-mp3/C5.mp3'
import './App.css'

export default function App() {
  //Hooks
  const [tone, setTone] = useState([]);
  const ref = useRef()

  let cmdDown = false;
  document.body.addEventListener('keydown', function(event) {
    var key = event.key
    var keyNumber = event.keyCode || event.charCode || 0;
    if ([91,93,224,17].indexOf(key) !== -1) {
      cmdDown = true;
    }
    if (key === "s"){
      var audio = new Audio(C4)
      audio.play()
    }
    if (key === "e"){
      var audio = new Audio(Db4)
      audio.play()
    }
    if (key === "d"){
      var audio = new Audio(D4)
      audio.play()
    }
    if (key === "r"){
      var audio = new Audio(Eb4)
      audio.play()
    }
    if (key === "f"){
      var audio = new Audio(E4)
      audio.play()
    }
    if (key === "g"){
      var audio = new Audio(F4)
      audio.play()
    }
    if (key === "y"){
      var audio = new Audio(Gb4)
      audio.play()
    }if (key === "h"){
      var audio = new Audio(G4)
      audio.play()
    }
    if (key === "u"){
      var audio = new Audio(Ab4)
      audio.play()
    }
    if (key === "j"){
      var audio = new Audio(A4)
      audio.play()
    }
    if (key === "i"){
      var audio = new Audio(Bb4)
      audio.play()
    }
    if (key === "k"){
      var audio = new Audio(B4)
      audio.play()
    }
    if (key === "l"){
      var audio = new Audio(C5)
      audio.play()
    }
  });

  document.body.addEventListener('keyup', function(event) {
    var key = event.keyCode || event.charCode || 0;
    if ([91,93,224,17].indexOf(key) !== -1) {
      cmdDown = false;
    }
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Virtual Piano
      </h1>
      <p>Enjoy!</p>
        <div className="box-content border-y-2 flex flex-row justify-center">
          <div className="box-content border-l-2 h-[500px] w-[100px]">S</div>
          <div>
            <div className="columns-1 box-content border-2 h-[200px] w-[100px] bg-black text-white">E</div>
            <div className="flex flex-colm">
              <div className="box-content border-r-2 h-[300px] w-[50px]"></div>
              <div className="box-content border-l-2 h-[300px] w-[50px]"></div>
            </div>
          </div>
          <div className="columns-1 h-[500px] w-[50px]" >D</div>
          <div>
            <div className="columns-1 box-content border-2 h-[200px] w-[100px] bg-black text-white">R</div>
            <div className="flex flex-colm">
              <div className="box-content border-r-2 h-[300px] w-[50px]"></div>
              <div className="box-content border-l-2 h-[300px] w-[50px]"></div>
            </div>
          </div>
          <div className="columns-1 box-content border-r-2 h-[500px] w-[100px]">F</div>
          <div className="columns-1 box-content border-l-2 h-[500px] w-[100px]">G</div>
          <div>
            <div className="columns-1 box-content border-2 h-[200px] w-[100px] bg-black text-white">Y</div>
            <div className="flex flex-colm">
              <div className="box-content border-r-2 h-[300px] w-[50px]"></div>
              <div className="box-content border-l-2 h-[300px] w-[50px]"></div>
            </div>
          </div>
          <div className="columns-1 h-[500px] w-[50px]">H</div>
          <div>
            <div className="columns-1 box-content border-2 h-[200px] w-[100px] bg-black text-white">U</div>
            <div className="flex flex-colm">
              <div className="box-content border-r-2 h-[300px] w-[50px]"></div>
              <div className="box-content border-l-2 h-[300px] w-[50px]"></div>
            </div>
          </div>
          <div className="columns-1 h-[500px] w-[50px]">J</div>
          <div>
            <div className="columns-1 box-content border-2 h-[200px] w-[100px] bg-black text-white">I</div>
            <div className="flex flex-colm">
              <div className="box-content border-r-2 h-[300px] w-[50px]"></div>
              <div className="box-content border-l-2 h-[300px] w-[50px]"></div>
            </div>
          </div>
          <div className="columns-1 box-content border-r-2 h-[500px] w-[75px]">K</div>
          <div className="columns-1 box-content border-2 h-[500px] w-[125px]">L</div>
        </div>
    </>
  )
}
