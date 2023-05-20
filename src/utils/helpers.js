import {API_URL} from "../HHTP/client";

export function getTextFromHTML(html, size) {
  if (typeof document === "undefined") return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent.slice(0, size);
}

export function getAllTextFromHTML(html) {
  if (typeof document === "undefined") return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent;
}

export function getThumbPath(article) {
  return (article.thumbnail && `${API_URL}/api/articles/images/download?path=`+ article.thumbnail.path) || "/images/newsSwiper.png"
}
