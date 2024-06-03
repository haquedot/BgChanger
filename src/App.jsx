import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "red" }}>Red</button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "green" }}>Green</button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "blue" }}>Blue</button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "pink" }}>Pink</button>

          <button
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "violet" }}>Violet</button>

          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "skyblue" }}>Skyblue</button>

          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "grey" }}>Grey</button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "orange" }}>Orange</button>

          <button
            onClick={() => setColor("tomato")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "tomato" }}>tomato</button>

          <button
            onClick={() => setColor("dodgerblue")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "dodgerblue" }}>
            Dodgerblue</button>

          <button
            onClick={() => setColor("lightgray")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "lightgray" }}>
            Lightgray</button>

          <button
            onClick={() => setColor("AliceBlue")}
            className="outline-none px-4 py-1 rounded text-black"
            style={{ backgroundColor: "AliceBlue" }}>
            AliceBlue</button>

          <button
            onClick={() => setColor("Beige")}
            className="outline-none px-4 py-1 rounded text-black"
            style={{ backgroundColor: "Beige" }}>
            Beige</button>

            <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "Black" }}>
            Black</button>

            <button
            onClick={() => setColor("Aqua")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "Aqua" }}>
            Aqua</button>

            <button
            onClick={() => setColor("SlateBlue")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "SlateBlue" }}>
            SlateBlue</button>

            <button
            onClick={() => setColor("FireBrick")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "FireBrick" }}>
            FireBrick</button>
            
            <button
            onClick={() => setColor("IndianRed")}
            className="outline-none px-4 py-1 rounded text-white"
            style={{ backgroundColor: "IndianRed" }}>
            IndianRed</button>
            
            
        </div>
      </div>
    </div>
  )
}

export default App
