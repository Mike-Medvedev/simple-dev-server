const data = [
  { brand: "Fender", model: "Stratocaster", desc: "A couple" },
  { brand: "Gibson", model: "Les Paul", desc: "A couple" },
  { brand: "Gibson", model: "SG", desc: "A couple" },
  { brand: "Gibson", model: "Firebird", desc: "A couple" },
  { brand: "Guild", model: "Starfire II", desc: "A couple" },
  { brand: "Guild", model: "X-500", desc: "A couple" },
];

const aside = document.getElementById("layout-aside");
const brands = {};

for (const elmt of data) {
  if (!brands[elmt.brand]) {
    const sec = document.createElement("section");
    sec.innerText = elmt.brand;

    const ul = document.createElement("ul");
    sec.appendChild(ul);

    brands[elmt.brand] = ul;
    aside.appendChild(sec);
  }

  const li = document.createElement("li");
  li.innerText = elmt.model;
  brands[elmt.brand].appendChild(li);
}
