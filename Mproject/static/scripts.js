// static/scripts.js
// Simple UI interactions: theme toggle + show/hide compare params
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const modeSelect = document.getElementById("mode-select");
  const compareBlock = document.getElementById("compare-block");

  // initial display of params (show only relevant param rows)
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

  // show for dist1/dist2
  const dist1 = document.getElementById("dist1");
  const dist2 = document.getElementById("dist2");
  showParamsFor(dist1, "params1");
  showParamsFor(dist2, "params2");
  dist1.addEventListener("change", () => showParamsFor(dist1, "params1"));
  dist2.addEventListener("change", () => showParamsFor(dist2, "params2"));

  // mode select -> show compare block
  modeSelect.addEventListener("change", function () {
    if (modeSelect.value === "compare") {
      compareBlock.classList.remove("hidden");
    } else {
      compareBlock.classList.add("hidden");
    }
  });

  // theme toggle
  toggle.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      toggle.textContent = "Dark";
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      toggle.textContent = "Light";
    }
  });

});
