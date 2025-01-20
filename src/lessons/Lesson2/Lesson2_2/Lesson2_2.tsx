import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {

  const [person, setPerson] = useState<string>("ShinCode");
  const [bio, setBio] = useState<string | null>(null);
  
  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const response = await fetchBio(person);

      if(!ignore){
        setBio(response);
      }
    }
    startFetching();
    
    return () => {
      ignore = true;
    }
  },[person]);

  return (
    <div>
      <select onChange={(e) => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? "Loading..."}</p>
    </div>
  );
};

export default Lesson2_2;

/**
 * useEffect (https://ja.react.dev/reference/react/useEffect)
 * - `useEffect(setup, dependencies?)`
 * - 依存配列を指定することで、そのデータの値が変更された時のみ実行される
*  - クリーンアップ関数で競合状態を解決する
 */