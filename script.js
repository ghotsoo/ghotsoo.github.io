const cityData = {
  Chennai: ["Tambaram", "Guindy", "Velachery", "T Nagar"],
  Coimbatore: ["Gandhipuram", "Ukkadam", "Saibaba Colony"],
  Madurai: ["Periyar", "Anna Nagar", "Mattuthavani"],
  Salem: ["New Bus Stand", "Old Bus Stand", "Five Roads"],
  Trichy: ["Central Bus Stand", "Srirangam", "K K Nagar"],
  Erode: ["GH", "Thindal", "Perundurai"]
};

const citySelect = document.getElementById("citySelect");
const subCitySelect = document.getElementById("subCitySelect");
const resultSection = document.getElementById("resultSection");

// Populate cities
window.onload = function () {
  for (const city in cityData) {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  }
};

function populateSubCities() {
  const selectedCity = citySelect.value;
  subCitySelect.innerHTML = '<option value="">Select a Sub-City</option>';

  if (selectedCity && cityData[selectedCity]) {
    subCitySelect.style.display = "inline-block";
    cityData[selectedCity].forEach(subCity => {
      const option = document.createElement("option");
      option.value = subCity;
      option.textContent = subCity;
      subCitySelect.appendChild(option);
    });
  } else {
    subCitySelect.style.display = "none";
  }

  resultSection.innerHTML = "";
}

function showSelectedArea() {
  const city = citySelect.value;
  const subCity = subCitySelect.value;
  if (city && subCity) {
    resultSection.innerHTML = `<h3>${city} > ${subCity}</h3><p>Bus route info coming soon...</p>`;
  }
}