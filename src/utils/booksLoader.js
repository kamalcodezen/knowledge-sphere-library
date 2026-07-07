import mockBooks from "../data/books.json";

export const booksLoader = async () => {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000); // 3 second timeout

    const response = await fetch("https://bhairabdeenipathagar.onrender.com/api/books", {
      signal: controller.signal,
    });
    clearTimeout(id);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data && data.content && Array.isArray(data.content)) {
      return data;
    }
    throw new Error("Invalid API response format");
  } catch (error) {
    console.warn("Backend API offline or slow; falling back to local mock books data.", error.message);
    return { content: mockBooks };
  }
};
