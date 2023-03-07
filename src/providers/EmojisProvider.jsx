import { createContext, useContext, useState } from "react";
import { search } from "../Api";
const EmojisContext = createContext();

const EmojisProvider = ({ children }) => {
  const [emojis, setEmojis] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Methods
  const searchByEmojiName = async (emoji_name) => {
    return search(emoji_name);
  };


  const contextValue = {
    emojis,
    setEmojis,
    searchByEmojiName,
    isSearching,
    setIsSearching,
  };

  return (
    <EmojisContext.Provider value={contextValue}>
      {children}
    </EmojisContext.Provider>
  );
};

export const useEmojis = () => useContext(EmojisContext);

export default EmojisProvider;
