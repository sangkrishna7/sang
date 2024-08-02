document.addEventListener("DOMContentLoaded", function() {
  fetch("data.txt")
      .then(response => response.text())
      .then(data => {
          const lines = data.split('\n');
          document.getElementById("messi-title").textContent = lines[0];
          document.getElementById("messi-description").textContent = lines[1];
          document.getElementById("dhoni-title").textContent = lines[2];
          document.getElementById("dhoni-description").textContent = lines[3];
          document.getElementById("bumrah-title").textContent = lines[4];
          document.getElementById("bumrah-description").textContent = lines[5];
          document.getElementById("summary-title").textContent = lines[6];
          document.getElementById("summary-description").textContent = lines[7];
          document.getElementById("messi-description-summary").textContent = lines[8];
          document.getElementById("dhoni-description-summary").textContent = lines[9];
          document.getElementById("bumrah-description-summary").textContent = lines[10];
          document.getElementById("detailed-summary").textContent = lines[11];
          document.getElementById("messi-description-para").textContent = lines[13];
          document.getElementById("dhoni-description-para").textContent = lines[15];
          document.getElementById("bumrah-description-para").textContent = lines[17];


      });
});
