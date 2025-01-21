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

/**
 * useRef (https://ja.react.dev/reference/react/useRef)
 * - `useRef(initialValue)`
 * - 特性
 *  - 値を直接更新できる
 *  - 更新してもコンポーネントは再レンダリングされない（useState との違い）
 *    - 余計な再レンダリングすることなく値を保持する
 * - 用途
 *  - DOMの要素に対して何かしらの操作をする
 *  - 余計な再レンダリングを防ぐ
 * 
 */
