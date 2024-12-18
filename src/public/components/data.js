function generateRandomWord(alphabet) {
  if (!alphabet) return;
  let randomWord = "";
  for (let i = 0; i <= 6; i++) {
    const rand = Math.floor(Math.random() * 6);
    randomWord += alphabet[rand];
  }
  return randomWord;
}
function generateBigList() {
  let data = {};
  const alphabet = ["a", "b", "c", "d", "e", "f", "g"];
  for (let i = 0; i < 1000; i++) {
    data[generateRandomWord(alphabet)] = ["Stratocaster"];
  }

  return data;
}

const state = {
  listData: generateBigList(),
};
const container = document.getElementById("listContainer");

const input = document.getElementById("searchInput");
input.addEventListener("input", (e) => {
  filterList(e.target.value);
  // hideUnusedList(e.target.value);
});

renderList();

function renderList(list = state.listData) {
  for (const [brand, model] of Object.entries(list)) {
    const sec = document.createElement("section");
    sec.id = brand;
    container.appendChild(sec);
    sec.innerText = brand;
    const list = document.createElement("div");
    list.id = "guitarList";
    sec.appendChild(list);
    model.forEach((m) => {
      const li = document.createElement("p");
      li.id = m;
      li.className = "guitarItem";
      li.innerText = m;
      list.appendChild(li);
    });
  }
}

function filterList(searchString) {
  container.innerHTML = "";
  const filteredData = Object.entries(state.listData).filter(
    ([brand, model], index) =>
      brand.toLowerCase().includes(searchString.toLowerCase())
  );
  const updatedData = Object.fromEntries(filteredData);
  renderList(updatedData);
}

function hideUnusedList(searchString) {
  Object.entries(state.listData).forEach(([brand, model]) => {
    const sectionToHide = document.getElementById(brand);
    if (brand.toLowerCase().includes(searchString.toLowerCase())) {
      sectionToHide.style.display = "block";
    } else {
      sectionToHide.style.display = "none";
    }
  });
}
