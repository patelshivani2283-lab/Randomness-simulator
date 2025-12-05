

// static/scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const modeSelect = document.getElementById("mode-select");
  const compareBlock = document.getElementById("compare-block");

  // ------------------------- THEME PERSISTENCE -------------------------
  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme);
  toggle.textContent = (savedTheme === "dark") ? "Light" : "Dark";

  // Theme toggle button
  toggle.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
      body.classList.replace("dark", "light");
      toggle.textContent = "Dark";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.replace("light", "dark");
      toggle.textContent = "Light";
      localStorage.setItem("theme", "dark");
    }
  });

  // --------------------- PARAMETER SHOW/HIDE ----------------------
  function showParamsFor(selectEl, paramsContainerId) {
    const dist = selectEl.value;
    const container = document.getElementById(paramsContainerId);
    const rows = container.querySelectorAll(".param-row");

    rows.forEach(r => {
      r.style.display = (r.getAttribute("data-for") === dist) ? "flex" : "none";
      r.style.gap = "10px";
      r.style.alignItems = "center";
    });
  }

  const dist1 = document.getElementById("dist1");
  const dist2 = document.getElementById("dist2");

  showParamsFor(dist1, "params1");
  showParamsFor(dist2, "params2");

  dist1.addEventListener("change", () => showParamsFor(dist1, "params1"));
  dist2.addEventListener("change", () => showParamsFor(dist2, "params2"));

  // --------------------- COMPARE MODE ----------------------
  modeSelect.addEventListener("change", function () {
    if (modeSelect.value === "compare") {
      compareBlock.classList.remove("hidden");
    } else {
      compareBlock.classList.add("hidden");
    }
  });

});


const resetBtn = document.getElementsByClassName("btn ghost" );

resetBtn.addEventListener("click", () => {
  document.querySelector("form").reset();

  // Also reset parameter visibility
  showParamsFor(dist1, "params1");
  showParamsFor(dist2, "params2");

  // Keep dark mode (do NOT reset theme)
});



