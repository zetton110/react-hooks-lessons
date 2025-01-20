import { useState } from "react";

const Lesson1_1 = () => {

  console.log("rendering!");

  const [age, setAge] = useState<number>(0);
  const handleClick = () => {
    setAge((prevAge)=> prevAge + 1);
  }

  return (
    <div>
      <input type="text" />
      <button 
        onClick={handleClick}
        className="border p-2 rounded-md bg-red-100">Add Age</button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;

/**
 * useState (https://ja.react.dev/reference/react/useState)
 * - 用途
 *   - 値の保存（メモ化）をする
 * - 状態更新関数
 *  - 前回の状態を引数に取る
 *  - 状態更新関数が実行されるとコンポーネントは再レンダリングされる
 *   - 子コンポーネントも再レンダリングされる
 * - "rendering!" がコンソールに2回表示される
 *  - React.StrictMode (https://ja.react.dev/reference/react/StrictMode)
 *    - 開発モードでのみ有効(プロダクションでは無効になる)
 *  - なぜか？
 *    - コンポーネントを純粋に保つため (https://ja.react.dev/reference/rules/components-and-hooks-must-be-pure)
 *    - 副作用を検出するため
 */