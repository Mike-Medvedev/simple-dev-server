const data = {
  Fender: ["Stratocaster"],
  Gibson: ["Les Paul", "SG", "Firebird"],
  Guild: ["Starfire II", "X-500"],
};

const container = document.getElementById("listContainer");
function renderList(list = data) {
  for (const [brand, model] of Object.entries(list)) {
    const sec = document.createElement("section");
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
renderList();
const input = document.getElementById("searchInput");
input.addEventListener("input", (e) => {
  filterList(e.target.value);
});

function filterList(searchString) {
  container.innerHTML = "";
  const filteredData = Object.entries(data).filter(([brand, model], index) =>
    brand.toLowerCase().includes(searchString.toLowerCase())
  );
  const updatedData = Object.fromEntries(filteredData);
  renderList(updatedData);
}
