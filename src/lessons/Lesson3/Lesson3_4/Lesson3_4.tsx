import { useRef } from "react";
import { MyVideoPlayer } from "./MyVideoPlayer";

const Lesson3_4 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div>
      <button onClick={() => videoRef.current?.play()}>Play</button>
      <button onClick={() => videoRef.current?.pause()}>Pause</button>
      <br />
      <MyVideoPlayer
        ref={videoRef}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="250"
      />
    </div>
  );
};

export default Lesson3_4;

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
 *  - 別のコンポーネントのDOMノードにアクセスする
 *    - forwardRef
 *      - React19からは不要になり、useRefだけでよい
 * 　　　　https://imrankhani.medium.com/react-19-deprecated-forwardref-a-guide-to-passing-ref-as-a-standard-prop-7c0f13e6a229
 * 
 */