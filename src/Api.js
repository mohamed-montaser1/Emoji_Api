import axios from "axios";

const api = {
  all: "https://emoji-api.com/emojis?access_key=552d6b68e730acb9f4d4e4c7b0a2852eec208f44",
};

export async function search(emoji_name) {
  return await axios.get(
    `https://emoji-api.com/emojis?search=${emoji_name}&access_key=552d6b68e730acb9f4d4e4c7b0a2852eec208f44`
  );
}

export async function getAllEmojis() {
  return await axios.get(api.all);
}

export function getSingle(emoji) {
  return axios.get(
    `https://emoji-api.com/emojis/${emoji}?access_key=552d6b68e730acb9f4d4e4c7b0a2852eec208f44`
  );
}

export function getCategories() {
  return axios.get(
    `https://emoji-api.com/categories?access_key=552d6b68e730acb9f4d4e4c7b0a2852eec208f44`
  );
}
