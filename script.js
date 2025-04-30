// Enhanced java.js with expanded Tiruppur sub-areas and routes

const tiruppurSubAreas = { "palladam": { name: "Palladam", routes: [ { destination: "Udumalpet", via: ["Mangalam", "Madathukulam"], buses: ["43", "TNSTC 127", "Express"] }, { destination: "Pollachi", via: ["Sultanpet", "Kinathukadavu"], buses: ["37", "59", "Express"] }, { destination: "Coimbatore", via: ["Sulur", "Singanallur", "Peelamedu"], buses: ["3A", "44C", "90B"] } ] }, "tiruppur-old-bus-stand": { name: "Tiruppur Old Bus Stand", routes: [ { destination: "Coimbatore", via: ["Somanur", "Sulur", "Singanallur"], buses: ["5A", "5B", "5C", "14", "90A", "20A"] }, { destination: "Erode", via: ["Perumanallur", "Perundurai"], buses: ["33", "28E", "TNSTC 405"] }, { destination: "Palladam", via: ["Mangalam"], buses: ["18", "22", "66"] }, { destination: "Kangeyam", via: ["Uthukuli"], buses: ["15K", "72", "Express"] } ] }, "tiruppur-new-bus-stand": { name: "Tiruppur New Bus Stand", routes: [ { destination: "Coimbatore", via: ["Avinashi", "Chinniyampalayam"], buses: ["21A", "91C", "Express"] }, { destination: "Dharapuram", via: ["Kangeyam"], buses: ["57", "DPT1"] } ] }, "kovil-vazhi-bus-stand": { name: "Kovil Vazhi Bus Stand", routes: [ { destination: "Kangeyam", via: ["Uthukuli"], buses: ["22A", "22B"] } ] }, "avinashi-bus-stand": { name: "Avinashi Bus Stand", routes: [ { destination: "Coimbatore", via: ["Neelambur", "Peelamedu"], buses: ["11A", "13", "33A"] }, { destination: "Erode", via: ["Perumanallur"], buses: ["44B", "E01"] } ] }, "dharapuram-bus-stand": { name: "Dharapuram Bus Stand", routes: [ { destination: "Coimbatore", via: ["Kangeyam", "Palladam", "Sulur"], buses: ["110C", "93D", "TNSTC 98"] }, { destination: "Tiruppur", via: ["Kangeyam", "Uthukuli"], buses: ["25", "35D"] } ] }, "udumalpet-bus-stand": { name: "Udumalpet Bus Stand", routes: [ { destination: "Palladam", via: ["Madathukulam", "Mangalam"], buses: ["43", "57"] } ] }, "kangeyam-bus-stand": { name: "Kangeyam Bus Stand", routes: [ { destination: "Dharapuram", via: ["Chennimalai"], buses: ["27", "110"] }, { destination: "Tiruppur", via: ["Uthukuli"], buses: ["18K", "72"] } ] }, "vellakoil-bus-stand": { name: "Vellakoil Bus Stand", routes: [ { destination: "Tiruppur", via: ["Kangeyam"], buses: ["101", "TPT02"] } ] }, "karanampettai-bus-stand": { name: "Karanampettai Bus Stand", routes: [ { destination: "Palladam", via: ["Sulur"], buses: ["49", "21B"] }, { destination: "Tiruppur", via: ["Sulur"], buses: ["22C"] } ] }, "perumanallur-bus-stop": { name: "Perumanallur Bus Stop", routes: [ { destination: "Erode", via: ["Perundurai"], buses: ["33", "17"] } ] }, "somanur-bus-stand": { name: "Somanur Bus Stand", routes: [ { destination: "Tiruppur", via: ["Sulur"], buses: ["14B", "90"] } ] } };

function populateSubCities() { const city = document.getElementById("citySelect").value; const subCitySelect = document.getElementById("subCitySelect"); const messageDiv = document.getElementById("message"); const resultSection = document.getElementById("resultSection");

subCitySelect.innerHTML = '<option value="">Select a Sub-City</option>'; messageDiv.textContent = ""; resultSection.innerHTML = "";

if (city === "tiruppur") { for (const key in tiruppurSubAreas) { const option = document.createElement("option"); option.value = key; option.textContent = tiruppurSubAreas[key].name; subCitySelect.appendChild(option); } subCitySelect.style.display = "block"; } else if (city) { subCitySelect.style.display = "none"; messageDiv.textContent = "This area will be available soon!"; } else { subCitySelect.style.display = "none"; messageDiv.textContent = ""; } }

function showSelectedArea() { const selectedKey = document.getElementById("subCitySelect").value; const resultSection = document.getElementById("resultSection");

if (selectedKey && tiruppurSubAreas[selectedKey]) { const area = tiruppurSubAreas[selectedKey]; let htmlContent = <h3>${area.name}</h3><p>Buses travel from this area to:</p><ul>;

area.routes.forEach((route) => {
  htmlContent += `<li><strong>${route.destination}</strong>`;
  if (route.via && route.via.length) {
    htmlContent += `<br><small>via: ${route.via.join(", ")}</small>`;
  }
  if (route.buses && route.buses.length) {
    htmlContent += `<div class='bus-tags'>${route.buses.map(bus => `<span class='bus-tag'>${bus}</span>`).join(" ")}</div>`;
  }
  htmlContent += `</li>`;
});

htmlContent += `</ul>`;
resultSection.innerHTML = htmlContent;

} else { resultSection.innerHTML = ""; } }

function toggleDarkMode() { document.body.classList.toggle("dark-mode"); }

