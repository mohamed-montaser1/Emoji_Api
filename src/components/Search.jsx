import React from "react";
import { FaSearch } from "react-icons/fa";
import "../App.css";
import { useEmojis } from "../providers/EmojisProvider";

export default function Search() {
  const { setIsSearching, isSearching, setEmojis, searchByEmojiName } =
    useEmojis();
  async function searching() {
    let emoji_name = document.querySelector(".search-input").value;
    if (emoji_name !== "") {
      const res = await searchByEmojiName(emoji_name);
      const data = res.data;
      setEmojis(data);
      setIsSearching(true);
    } else {
      alert("Please fill out the input!");
    }
  }
  return (
    <>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search By Emoji Name..."
          className="search-input"
          onKeyUp={(e) =>
            e.key === "Enter"
              ? document.getElementById("search-button").click()
              : ""
          }
        />
        <button id="search-button" onClick={(e) => searching()}>
          <FaSearch />
        </button>
      </div>
      <div className="down-now">
        {isSearching ? "Emoji You Search Is Down Now!" : ""}
      </div>
    </>
  );
}
