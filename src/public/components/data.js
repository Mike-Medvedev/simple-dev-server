const data = {
  Fender: ["Stratocaster"],
  Gibson: ["Les Paul", "SG", "Firebird"],
  Guild: ["Starfire II", "X-500"],
};

const aside = document.getElementById("layout-aside");

for (const [brand, model] of Object.entries(data)) {
  const sec = document.createElement("section");
  aside.appendChild(sec);
  console.log(sec);
  sec.innerText = brand;
  const list = document.createElement("div");
  list.id = "guitarList";
  sec.appendChild(list);
  model.forEach((m) => {
    const li = document.createElement("span");
    li.id = "guitarItem";
    li.innerText = m;
    list.appendChild(li);
  });
}

let field;
const input = document.getElementById("searchInput");
input.addEventListener("input", (e) => {
  field = e.target.value;
});
