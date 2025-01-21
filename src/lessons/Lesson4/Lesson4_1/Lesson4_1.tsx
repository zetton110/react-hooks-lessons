import { useState } from "react";

const Lesson4_1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {};

  return (
    <div>
      <div>
        <p>ログイン済み:</p>
        <button>ログアウト</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>ログイン</button>
      </div>
    </div>
  );
};

export default Lesson4_1;

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