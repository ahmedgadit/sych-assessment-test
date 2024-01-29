import { Post } from "../interface/post.interface";

export const addItemToBookMark = async (formData: Post) => {
  var bookmarks = await getStoredBookmarks();

  const isBookmarked = bookmarks.find((x: Post) => {
    return x.id == formData.id;
  });


  bookmarks = isBookmarked ? bookmarks.filer((x) => x.id !== formData.id) : [...bookmarks, formData];
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  console.log(formData);
};

export const getStoredBookmarks =  () => {
  const storedBookmarks = localStorage.getItem("bookmarks");
  return storedBookmarks ? JSON.parse(storedBookmarks) : [];
};
