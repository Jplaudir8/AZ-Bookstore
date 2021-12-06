export function bookImageFileName(book) {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(":", "");
  name = name.replace(".", "");
  name = name.replace("#", "");
  return `${name}.png`;
}
