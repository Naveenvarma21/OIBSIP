const input = document.getElementById("tempInput");
const unit = document.getElementById("unitSelect");
const btn = document.getElementById("convertBtn");
const error = document.getElementById("error");
const outC = document.getElementById("outC");
const outF = document.getElementById("outF");
const outK = document.getElementById("outK");

function clearResults() {
  outC.textContent = outF.textContent = outK.textContent = "–";
}

// Real-time validation while typing
input.addEventListener("input", () => {
  const v = input.value.trim();
  error.textContent = v !== "" && isNaN(v) ? "Please enter a valid number." : "";
});

btn.addEventListener("click", () => {
  const value = input.value.trim();
  error.textContent = "";

  if (value === "" || isNaN(value)) {
    error.textContent = "Please enter a valid number.";
    clearResults();
    return;
  }

  const t = parseFloat(value);
  let c;

  // Convert everything to Celsius first
  if (unit.value === "C") c = t;
  else if (unit.value === "F") c = (t - 32) * 5 / 9;
  else c = t - 273.15;

  // Absolute zero check
  if (c < -273.15) {
    error.textContent = "That's below absolute zero (−273.15°C / −459.67°F / 0 K)!";
    clearResults();
    return;
  }

  const f = c * 9 / 5 + 32;
  const k = c + 273.15;

  outC.textContent = c.toFixed(2) + " °C";
  outF.textContent = f.toFixed(2) + " °F";
  outK.textContent = k.toFixed(2) + " K";
});