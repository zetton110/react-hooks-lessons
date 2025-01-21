import { useRef, useState } from "react";

const Lesson3_3 = () => {
  // useRefで値を保持すると入力時に再レンダリングされることはない -> パフォーマンス向上
  // const [inputText, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleClick = () => {
    // alert(inputText);
    alert(inputRef.current?.value);
  };
  console.log("rendering!");
  return (
    <div>
      <input 
        type="text" 
        className="border-b"
        // value={inputText}
        // onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
        />
      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;
