const tiruppurSubAreas = {
  "tiruppur-old-bus-stand": {
    name: "Tiruppur Old Bus Stand",
    routes: [
      { destination: "Coimbatore", via: ["Somanur", "Sulur", "Singanallur"], buses: ["5A", "5B", "5C", "14", "90A", "20A"] },
      { destination: "Erode", via: ["Perumanallur", "Perundurai"], buses: ["33", "28E", "TNSTC 405"] },
      { destination: "Palladam", via: ["Mangalam"], buses: ["18", "22", "66"] },
      { destination: "Kangeyam", via: ["Uthukuli"], buses: ["15K", "72", "Express"] }
    ]
  },
  "tiruppur-new-bus-stand": {
    name: "Tiruppur New Bus Stand",
    routes: [
      { destination: "Coimbatore", via: ["Somanur", "Sulur", "Peelamedu"], buses: ["3C", "44B", "90C"] },
      { destination: "Avinashi", via: ["Perumanallur"], buses: ["16B", "24"] }
    ]
  },
  "kovil-vazhi-bus-stand": {
    name: "Kovil Vazhi Bus Stand",
    routes: [
      { destination: "Dharapuram", via: ["Uthukuli", "Kangeyam"], buses: ["15D", "32A"] }
    ]
  },
  "palladam": {
    name: "Palladam Bus Stand",
    routes: [
      { destination: "Udumalpet", via: ["Mangalam", "Madathukulam"], buses: ["43", "TNSTC 127", "Express"] },
      { destination: "Pollachi", via: ["Sultanpet", "Kinathukadavu"], buses: ["37", "59", "Express"] },
      { destination: "Coimbatore", via: ["Sulur", "Singanallur", "Peelamedu"], buses: ["3A", "44C", "90B"] }
    ]
  },
  "avinashi": {
    name: "Avinashi Bus Stand",
    routes: [
      { destination: "Coimbatore", via: ["Karumathampatti", "Peelamedu"], buses: ["11A", "11B"] },
      { destination: "Erode", via: ["Perundurai"], buses: ["54E", "87"] }
    ]
  },
  "dharapuram": {
    name: "Dharapuram Bus Stand",
    routes: [
      { destination: "Coimbatore", via: ["Kangeyam", "Uthukuli", "Tiruppur"], buses: ["12", "13", "14"] },
      { destination: "Erode", via: ["Vellakoil", "Kodumudi"], buses: ["E10", "77"] }
    ]
  },
  "udumalpet": {
    name: "Udumalpet Bus Stand",
    routes: [
      { destination: "Pollachi", via: ["Palani", "Anaimalai"], buses: ["12A", "35"] },
      { destination: "Tiruppur", via: ["Madathukulam", "Palladam"], buses: ["10A", "10B"] }
    ]
  },
  "kangeyam": {
    name: "Kangeyam Bus Stand",
    routes: [
      { destination: "Dharapuram", via: ["Padiyur"], buses: ["18A", "25"] },
      { destination: "Tiruppur", via: ["Uthukuli"], buses: ["26B", "40"] }
    ]
  },
  "vellakoil": {
    name: "Vellakoil Bus Stand",
    routes: [
      { destination: "Erode", via: ["Kodumudi"], buses: ["52", "82"] },
      { destination: "Karur", via: ["Paramathi Velur"], buses: ["K23", "K14"] }
    ]
  },
  "karanampettai": {
    name: "Karanampettai Bus Stand",
    routes: [
      { destination: "Sulur", via: ["Irugur"], buses: ["3B", "44"] },
      { destination: "Palladam", via: [], buses: ["9", "9A"] }
    ]
  },
  "perumanallur": {
    name: "Perumanallur Bus Stop",
    routes: [
      { destination: "Erode", via: ["Perundurai"], buses: ["28", "40E"] },
      { destination: "Avinashi", via: [], buses: ["17A", "19"] }
    ]
  },
  "somanur": {
    name: "Somanur Bus Stand",
    routes: [
      { destination: "Tiruppur", via: ["Veerapandi"], buses: ["5", "32B"] },
      { destination: "Coimbatore", via: ["Sulur", "Peelamedu"], buses: ["30D", "40A"] }
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
      if (route.buses && route.buses.length) {
        htmlContent += `<div class='bus-tags'>${route.buses.map(bus => `<span class='bus-tag'>${bus}</span>`).join(" ")}</div>`;
      }
      htmlContent += `</li>`;
    });

    htmlContent += `</ul>`;
    resultSection.innerHTML = htmlContent;
  } else {
    resultSection.innerHTML = "";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}