// java.js
const tiruppurSubAreas = {
  "palladam": {
    name: "Palladam",
    routes: [
      { destination: "Udumalpet", via: ["Mangalam", "Madathukulam"] },
      { destination: "Pollachi", via: ["Sultanpet", "Kinathukadavu"] },
      { destination: "Coimbatore", via: ["Sulur", "Singanallur", "Peelamedu"] }
    ]
  },
  "tiruppur-old-bus-stand": {
    name: "Tiruppur Old Bus Stand",
    routes: [
      { destination: "Coimbatore", via: ["Somanur", "Sulur", "Singanallur"] },
      { destination: "Erode", via: ["Perumanallur", "Perundurai"] },
      { destination: "Palladam", via: ["Mangalam"] },
      { destination: "Kangeyam", via: ["Uthukuli"] }
    ]
  }
};

function populateSubCities() {
  const city = document.getElementById("citySelect").value;
  const subCitySelect = document.getElementById("subCitySelect");
  const messageDiv = document.getElementById("message");
  const resultSection = document.getElementById("resultSection");

  subCitySelect.innerHTML = '<option value="">Select a Sub-City</option>';
  messageDiv.textContent = "";
  resultSection.innerHTML = "";

  if (city === "tiruppur") {
    for (const key in tiruppurSubAreas) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = tiruppurSubAreas[key].name;
      subCitySelect.appendChild(option);
    }
    subCitySelect.style.display = "block";
  } else if (city) {
    subCitySelect.style.display = "none";
    messageDiv.textContent = "This area will be available soon!";
  } else {
    subCitySelect.style.display = "none";
    messageDiv.textContent = "";
  }
}

function showSelectedArea() {
  const selectedKey = document.getElementById("subCitySelect").value;
  const resultSection = document.getElementById("resultSection");

  if (selectedKey && tiruppurSubAreas[selectedKey]) {
    const area = tiruppurSubAreas[selectedKey];
    let htmlContent = `<h3>${area.name}</h3><p>Buses travel from this area to:</p><ul>`;

    area.routes.forEach(route => {
      htmlContent += `<li><strong>${route.destination}</strong>`;
      if (route.via && route.via.length) {
        htmlContent += `<br><small>via: ${route.via.join(", ")}</small>`;
      }
      htmlContent += `</li>`;
    });

    htmlContent += `</ul>`;
    resultSection.innerHTML = htmlContent;
  } else {
    resultSection.innerHTML = "";
  }
}
