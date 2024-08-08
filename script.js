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

            const header = document.createElement('header');
            const h1 = document.createElement('h1');
            h1.textContent = 'Welcome to My Blog';
            const pHeader = document.createElement('p');
            pHeader.className = 'para';
            pHeader.textContent = 'Discover inspiring stories and insights on excellence in sports and beyond. Dive into captivating posts featuring icons like Lionel Messi, MS Dhoni, and Jasprit Bumrah!';
            header.appendChild(h1);
            header.appendChild(pHeader);
            document.getElementById('header-content').appendChild(header);

            const gridContainer = document.createElement('div');
            gridContainer.className = 'grid';
            gridItems.forEach(item => {
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item';
                gridItem.id = `${item.id}-item`;
                gridItem.style.backgroundImage = item.background;

                const a = document.createElement('a');
                a.href = `#${item.id}`;
                a.className = 'grid-link';

                const h2 = document.createElement('h2');
                h2.id = `${item.id}-title`;
                h2.textContent = item.title;

                const p = document.createElement('p');
                p.id = `${item.id}-description`;
                p.textContent = item.description;

                a.appendChild(h2);
                a.appendChild(p);
                gridItem.appendChild(a);
                gridContainer.appendChild(gridItem);
            });
            document.getElementById('grid-container').appendChild(gridContainer);

            const aboutSection = document.createElement('section');
            const summaryTitle = document.createElement('h2');
            summaryTitle.id = 'summary-title';
            summaryTitle.textContent = lines[6];
            const summaryDescription = document.createElement('p');
            summaryDescription.id = 'summary-description';
            summaryDescription.textContent = lines[7];
            const summaryList = document.createElement('ul');
            summaryList.id = 'summary-list';
            summaries.short.forEach(item => {
                const li = document.createElement('li');
                const strong = document.createElement('strong');
                const a = document.createElement('a');
                a.href = `https://en.wikipedia.org/wiki/${item.id}`;
                a.target = '_blank';
                a.textContent = `${item.id}:`;
                strong.appendChild(a);
                li.appendChild(strong);
                li.appendChild(document.createTextNode(` ${item.summary}`));
                summaryList.appendChild(li);
            });
            aboutSection.appendChild(summaryTitle);
            aboutSection.appendChild(summaryDescription);
            aboutSection.appendChild(summaryList);
            document.getElementById('about-grids').appendChild(aboutSection);

            const additionalInfoSection = document.createElement('section');
            const detailedSummaryTitle = document.createElement('h2');
            detailedSummaryTitle.id = 'detailed-summary';
            detailedSummaryTitle.textContent = lines[11];
            additionalInfoSection.appendChild(detailedSummaryTitle);
            summaries.detailed.forEach(item => {
                const itemTitle = document.createElement('h2');
                itemTitle.id = item.id;
                itemTitle.innerHTML = `<strong>${item.id}:</strong>`;
                const itemDescription = document.createElement('p');
                itemDescription.className = 'normal-text';
                itemDescription.textContent = item.summary;
                additionalInfoSection.appendChild(itemTitle);
                additionalInfoSection.appendChild(itemDescription);
            });
            document.getElementById('additional-info').appendChild(additionalInfoSection);

            const footer = document.createElement('footer');
            const footerPara1 = document.createElement('p');
            const footerLink1 = document.createElement('a');
            footerLink1.href = '#about-grids';
            footerLink1.textContent = 'Back to Legends of the Game';
            footerPara1.appendChild(footerLink1);

            const footerPara2 = document.createElement('p');
            const footerLink2 = document.createElement('a');
            footerLink2.href = '#additional-info';
            footerLink2.textContent = 'Back to Detailed Summary';
            footerPara2.appendChild(footerLink2);

            footer.appendChild(footerPara1);
            footer.appendChild(footerPara2);
            document.getElementById('footer-content').appendChild(footer);

            document.querySelectorAll('.grid-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1); 
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
           document.querySelectorAll('#footer-content a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1); 
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                   }
               });
           });

        });
});
