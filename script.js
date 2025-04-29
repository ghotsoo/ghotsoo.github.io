function searchBus() {
  const input = document.getElementById("busNumberInput").value;
  const resultSection = document.getElementById("resultSection");

  if (!input.trim()) {
    resultSection.innerHTML = "<p>Please enter a bus number.</p>";
  } else {
    resultSection.innerHTML = `<h2>Bus ${input}</h2><p>Route info coming soon...</p>`;
  }

  resultSection.style.display = "block";
}