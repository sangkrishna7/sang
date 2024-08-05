document.addEventListener("DOMContentLoaded", function() {
  fetch("data.txt")
      .then(response => response.text())
      .then(data => {
          const lines = data.split('\n');
          const gridItems = [
              { id: "Messi", title: lines[0], description: lines[1], background: "url('messi-world-cup.jpg')" },
              { id: "Dhoni", title: lines[2], description: lines[3], background: "url('msd.webp')" },
              { id: "Bumrah", title: lines[4], description: lines[5], background: "url('bumrah.jpg')" }
          ];
          const summaries = {
              short: [
                  { id: "Messi", summary: lines[8] },
                  { id: "Dhoni", summary: lines[9] },
                  { id: "Bumrah", summary: lines[10] }
              ],
              detailed: [
                  { id: "Messi", summary: lines[13] },
                  { id: "Dhoni", summary: lines[15] },
                  { id: "Bumrah", summary: lines[17] }
              ]
          };
          document.getElementById("header-content").innerHTML = `
              <header>
                  <h1>Welcome to My Blog</h1>
                  <p class="para">Discover inspiring stories and insights on excellence in sports and beyond. Dive into captivating posts featuring icons like Lionel Messi, MS Dhoni, and Jasprit Bumrah!</p>
              </header>
          `;
          document.getElementById("grid-container").innerHTML = `
              <div class="grid">
                  ${gridItems.map(item => `
                      <div class="grid-item" id="${item.id}-item" style="background-image: ${item.background};">
                          <a href="#${item.id}">
                              <h2 id="${item.id}-title">${item.title}</h2>
                              <p id="${item.id}-description">${item.description}</p>
                          </a>
                      </div>
                  `).join('')}
              </div>
          `;
          document.getElementById("about-grids").innerHTML = `
              <section>
                  <h2 id="summary-title">${lines[6]}</h2>
                  <p id="summary-description">${lines[7]}</p>
                  <ul id="summary-list">
                      ${summaries.short.map(item => `
                          <li><strong><a href="https://en.wikipedia.org/wiki/${item.id}" target="_blank">${item.id}:</a></strong> ${item.summary}</li>
                      `).join('')}
                  </ul>
              </section>
          `;
          document.getElementById("additional-info").innerHTML = `
              <section>
                  <h2 id="detailed-summary">${lines[11]}</h2>
                  ${summaries.detailed.map(item => `
                      <h2 id="${item.id}"><strong>${item.id}:</strong></h2>
                      <p class="normal-text">${item.summary}</p>
                  `).join('')}
              </section>
          `;
          document.getElementById("footer-content").innerHTML = `
              <footer>
                  <p><a href="#about-grids">Back to Legends of the Game</a></p>
                  <p><a href="#additional-info">Back to Detailed Summary</a></p>
              </footer>
          `;
      });
});
