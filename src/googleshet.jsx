async function getData() {
  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbz6e9dK0dPKMn6mMJsS25sO8B1MtUl1lMsFXJ-7Mnr_AONXYz0one1SH2H8hRzQ-ryY/exec");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default getData;
