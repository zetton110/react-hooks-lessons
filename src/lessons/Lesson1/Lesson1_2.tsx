import { useState } from "react";

const Lesson1_2 = () => {
  const [form, setForm] = useState({
    firstName: "aiu",
    lastName: "eo",
    email: "aiueo@gmail.com"
  });

  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input 
            type="text" 
            className="border border-slate-500"
            value={form.firstName}
            onChange={(e) => setForm({
              ...form,
              firstName: e.target.value
            })} />
        </label>
        <label>
          Last Name:
          <input 
            type="text" 
            className="border border-slate-500"
            value={form.lastName}
            onChange={(e) => setForm({
              ...form,
              lastName: e.target.value
            })} />
        </label>
        <label>
          Email:
          <input 
            type="text" 
            className="border border-slate-500"
            value={form.email}
            onChange={(e) => setForm({
              ...form,
              email: e.target.value
            })} />
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;

/**
 * useState (https://ja.react.dev/reference/react/useState)
 * `const [state, setState] = useState(initialState)`
 * - スプレッド構文
 *  - オブジェクトのプロパティを更新するときは、スプレッド構文を使って新しいオブジェクトを作成する
 *  - https://ja.react.dev/learn/updating-objects-in-state
 *   - 一度作成したデータは書き換えるべきでない
 */