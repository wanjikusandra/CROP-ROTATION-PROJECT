document.getElementById('cropForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const crop = document.getElementById('previousCrop').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');

  const recommendations = {
    maize: { next: "Beans", reason: "Legumes like beans fix nitrogen and restore soil fertility after maize." },
    beans: { next: "Carrots", reason: "Root crops like carrots benefit from nitrogen left by legumes." },
    potatoes: { next: "Cabbage", reason: "Cabbage helps break disease cycles common in root crops." },
    tomatoes: { next: "Spinach", reason: "Leafy vegetables like spinach thrive in soils after tomatoes." },
    rice: { next: "Sweet Potatoes", reason: "Sweet potatoes improve soil aeration after flooded rice fields." }
    cabbage: { next: "Maize", reason: "Cereal crops like maize utilize the organic matter left by leafy vegetables." },
  groundnuts: { next: "Sorghum", reason: "Sorghum performs well after legumes due to increased soil nitrogen." },
  onions: { next: "Tomatoes", reason: "Tomatoes thrive after onions because the soil remains pest-resistant." },
  wheat: { next: "Soybeans", reason: "Soybeans replenish nutrients that wheat depletes." }
  };

  if (recommendations[crop]) {
    const { next, reason } = recommendations[crop];
    resultDiv.innerHTML = `<h3>Recommended Next Crop: <span>${next}</span></h3><p>${reason}</p>`;
  } else {
    resultDiv.innerHTML = `<p>Sorry, no recommendation available for "${crop}". Try maize, beans, or potatoes.</p>`;
  }

  resultDiv.style.display = "block";
});
