import { useState } from "react";
import data from "../items.json";
import Description from "../Description";
import Btns from "../Btns";
import Files from "../Files";
import Numbers from "../Numbers";


export default function App() {
  const [items, setItems] = useState(0);
  
  
  

  const hendlePrev = () => {
    setItems(items - 1);
  };

  const hendleNext = () => {
    setItems(items + 1);
  };

  const descriction = data[items];
  const isFirst = items === 0;
  const isLast = items === data.length - 1;
  const start = items + 1;
  const end = data.length;

  return (
    <>
      <Description />
      <Btns one={isFirst} two={isLast} first={hendlePrev} last={hendleNext} />
      <Numbers isStarted={start} isFinish={end} />
      <Files desc={descriction} />
    </>
  );
}
