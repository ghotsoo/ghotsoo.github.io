// Enhanced java.js

const tiruppurSubAreas = {
  "palladam": {
    name: "Palladam",
    routes: [
      {
        destination: "Udumalpet",
        via: ["Mangalam", "Madathukulam"],
        buses: ["43", "TNSTC 127", "Express"],
      },
      {
        destination: "Pollachi",
        via: ["Sultanpet", "Kinathukadavu"],
        buses: ["37", "59", "Express"],
      },
      {
        destination: "Coimbatore",
        via: ["Sulur", "Singanallur", "Peelamedu"],
        buses: ["3A", "44C", "90B"],
      },
    ],
  },
  "tiruppur-old-bus-stand": {
    name: "Tiruppur Old Bus Stand",
    routes: [
      {
        destination: "Coimbatore",
        via: ["Somanur", "Sulur", "Singanallur"],
        buses: ["5A", "5B", "5C", "14", "90A", "20A"],
      },
      {
        destination: "Erode",
        via: ["Perumanallur", "Perundurai"],
        buses: ["33", "28E", "TNSTC 405"],
      },
      {
        destination: "Palladam",
        via: ["Mangalam"],
        buses: ["18", "22", "66"],
      },
      {
        destination: "Kangeyam",
        via: ["Uthukuli"],
        buses: ["15K", "72", "Express"],
      },
    ],
  },
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

    area.routes.forEach((route) => {
      htmlContent += `<li><strong>${route.destination}</strong>`;
      if (route.via && route.via.length) {
        htmlContent += `<br><small>via: ${route.via.join(", ")}</small>`;
      }
      if (route.buses && route.buses.length) {
        htmlContent += `<div class='bus-tags'>${route.buses
          .map((bus) => `<span class='bus-tag'>${bus}</span>`) 
          .join(" ")}</div>`;
      }
      htmlContent += `</li>`;
    });

    htmlContent += `</ul>`;
    resultSection.innerHTML = htmlContent;
  } else {
    resultSection.innerHTML = "";
  }
}

// Optional Enhancement: Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
