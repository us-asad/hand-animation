import { useState } from "react"

const pages = [1, 2, 3, 4, 5];

export default function App() {
  const [time, setTime] = useState(0);
  const [pageIdx, setPageIdx] = useState(0);
  const [handPage, setHandPage] = useState(false);

  const restartAnimation = () => {
    setHandPage(true)
    // setTime(0)

    // const interval = setInterval(() => {
    //   if (time < 10) {
    //     setTime(prev => {
    //       if (prev > 10) {
    //         clearInterval(interval);
    //         return prev;
    //       } else {
    //         return prev + 1
    //       }
    //     });
    //   } else {
    //     clearInterval(interval);
    //   }
    // }, 1000);
    if (pageIdx > pages.length) {
      setPageIdx(0)
    }
    setTimeout(() => {
      setPageIdx(prev => prev + 1);
      setHandPage(false);
    }, 2500);
  }

  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="w-[800px] bg-gray-300 flex items-center relative overflow-hidden">
        <div className="w-[200px] relative z-[2]" onClick={restartAnimation}>
          <img src="/assets/a.png" alt="a" width={200} />
        </div>
        {pages.map((_, i) => (
          <div key={i} className={`bg-gray-600 mb-[13px] ml-[-24px] h-[346px] w-[500px] overflow-hidden absolute duration-[2.5s] z-[-${i}] ${pageIdx + 1 === i ? "!right-[622px]" : pageIdx === i ? "!right-[124px]" : pageIdx > i ? "!right-[-804px] !duration-[3.8s]" :"right-[1122px]"}`}> {pageIdx === i && console.log(pageIdx, i)}
            page #{i}
          </div>
        ))}
        {/* <div className={`bg-gray-600 mb-[13px] ml-[-24px] h-[346px] w-[500px] overflow-hidden absolute duration-[2.35s] ${time > 5.2 && time < 10 ? "!right-[622px]" : time >= 10 ? "!right-[124px]" : "right-[1122px]"}`}>
          <p className="w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div> */}
        {/* <div className={`bg-gray-600 mb-[13px] ml-[-24px] h-[346px] w-[500px] overflow-hidden absolute duration-[2.35s] ${time > 5.2 && time < 10 ? "!right-[124px]" : time >= 10 ? "!right-[-504px]" : " right-[622px] "}`}>
          <p className="w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div> */}
        {/* <div className={`bg-gray-600 mb-[13px] ml-[-24px] h-[346px] w-[500px] absolute duration-[3.4s] right-[124px] ease ${time > 5.5 ? "!right-[-800px]" : ""}`}>aaaa</div> */}
        <img src="/assets/hand.png" alt="hand" className={`w-[200px] absolute top-0 animate-hand duration-[2.5s] ${handPage ? "!right-0" : ""}`} />
      </div>
    </div>
  )
}