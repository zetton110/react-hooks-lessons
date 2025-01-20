import { useEffect, useState } from "react";

const Lesson2_1 = () => {

  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(()=>{
    function handleMouseMove(e: PointerEvent){
      setPosition({x: e.clientX, y: e.clientY});
    }
    window.addEventListener("pointermove", handleMouseMove);
    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    }
  })

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -20,
        top: -20,
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Lesson2_1;

/**
 * useEffect (https://ja.react.dev/reference/react/useEffect)
 * - `useEffect(setup, dependencies?)`
 * - 用途
 *  - Reactの外のシステムに対して何かしらの作用を起こしたい
 * - 例
 *  - ブラウザのマウス移動に応じて円を移動させる
 *  - ブラウザの初回レンダリング時にデータをfetchする
 * - dependencies を [] にすると初回レンダリング時のみ実行される
 * - クリーンアップ関数
 *  - 戻り値として関数を返すと、コンポーネントがアンマウントされる時に実行される
 * 
 */