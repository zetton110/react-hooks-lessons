import { RefObject, useRef } from "react";

const Lesson3_2 = () => {
  const listRef: RefObject<HTMLUListElement> = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    console.log(listRef.current);
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[index];
    console.log(imgNode);

    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Cat1</button>
        <button onClick={() => scrollToIndex(1)}>Cat2</button>
        <button onClick={() => scrollToIndex(2)}>Cat3</button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "700px", margin: "auto" }}>
        <ul
          className="flex items-center justify-between"
          style={{ minWidth: "1300px" }} // コンテナより大きいサイズを指定
          ref={listRef}
        >
          <li>
            <img src="https://24.media.tumblr.com/tumblr_lzlke2FQIT1qgjltdo1_250.jpg" alt="Cat 1" width="200" height="200" />
          </li>
          <li>
            <img src="https://cdn2.thecatapi.com/images/cf2.jpg" alt="Cat 2" width="300" height="200" />
          </li>
          <li>
            <img src="https://26.media.tumblr.com/tumblr_m12o7iWoH21qzv52ko1_250.jpg" alt="Cat 3" width="250" height="200" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lesson3_2;
