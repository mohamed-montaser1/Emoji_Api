import axios from "axios";
import { useEffect, useState } from "react";
import { getAllEmojis, getSingle } from "../Api";
import { useEmojis } from "../providers/EmojisProvider";

export default function AllEmojis({ title }) {
  const { isSearching, emojis } = useEmojis();
  let [all, setAll] = useState([]);
  let [length_of_emojis, setLength_of_emojis] = useState(101);
  useEffect(() => {
    async function displayAll() {
      const res = await getAllEmojis();
      const data = res.data;
      let result = [];
      for (let i = 0; i < length_of_emojis; i++) {
        result.push(data[i]);
      }
      setAll(result);
    }
    displayAll();
  }, [length_of_emojis]);

  return (
    <>
      <h1>
        {!isSearching
          ? title
            ? title
            : "Some Of Emojis You Would Know !"
          : "The Emoji You Search About"}
      </h1>
      <ul className="emoji-list">
        {!isSearching
          ? all.map((emoji, index) => {
              return (
                <li key={index} className="emoji">
                  <span>{emoji.character}</span>
                  <div className="desc">name: {emoji.slug}</div>
                  <div>Group: {emoji.group}</div>
                  <div>subGroup: {emoji.subGroup}</div>
                </li>
              );
            })
          : emojis.map((emoji, index) => {
              return (
                <li key={index} className="emoji">
                  <span>{emoji.character}</span>
                  <div className="desc">name: {emoji.slug}</div>
                  <div>Group: {emoji.group}</div>
                  <div>subGroup: {emoji.subGroup}</div>
                </li>
              );
            })}
      </ul>
      {!length_of_emojis < all.length ? (
        <button
          className="button"
          onClick={(e) => setLength_of_emojis(length_of_emojis + 20)}
        >
          Load More
        </button>
      ) : (
        ""
      )}
    </>
  );
}
