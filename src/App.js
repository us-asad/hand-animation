import { useEffect, useState } from "react"

export default function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        console.log(prev > 10)
        if (time > 10) {
          clearInterval(interval);
        } else {
          return prev + 1
        }
      });
    }, 1000);


    return () => {
      clearInterval(interval);
    }
  }, []);

  const restartAnimation = () => {
    setTime(0);
  }

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="w-[800px] bg-gray-300 flex items-center relative overflow-hidden">
        <div className="w-[200px] relative z-[2]">
          <img src="/assets/a.png" alt="a" width={200} />
        </div>
        <div className={`bg-gray-600 mb-[13px] ml-[-24px] h-[346px] w-[500px] overflow-hidden relative duration-[2.35s] right-[497px] ${time > 5.2 ? "!right-0" : ""}`}>
          <p className="w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={`bg-gray-600 mb-[13px] ml-[-24px] h-[346px] w-[500px] absolute duration-[3.4s] right-[124px] ease ${time > 5.5 ? "!right-[-800px]" : ""}`}>aaaa</div>
        <img src="/assets/hand.png" alt="hand" className={`w-[200px] absolute top-0 animate-hand duration-[2.5s] ${time > 2 && time < 5.5 ? "!right-0" : ""}`} />
      </div>
      <button disabled={time < 5.5} onClick={restartAnimation} className="block disabled:opacity-50 disabled:hover:text-white disabled:hover:bg-green-500 disabled:cursor-not-allowed mt-3 p-2 bg-green-500 text-white hover:text-green-500 hover:bg-white border-2 border-green-500 duration-200 ">restart animation</button>
    </div>
  )
}