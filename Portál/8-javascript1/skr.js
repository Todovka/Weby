let button = document.getElementById('spustit');

        button.addEventListener('click', function() {
            let body = document.querySelector('body');
            
            // 1. Divný texty
            let texty = ['Díky za kliknutí...', 'Teď to začne být divné...', 'Kdo klikl, teď už neuteče!', 'Neboj, tohle je všechno normální...', 'Tohle je jen začátek.'];
            let randomText = texty[Math.floor(Math.random() * texty.length)];
            let paragraph = document.createElement('p');
            paragraph.textContent = randomText;
            body.appendChild(paragraph);

            // 2. Nezastavitelný efekt blikajících textů
            let elem = document.createElement('div');
            elem.style.position = 'fixed';
            elem.style.top = '50%';
            elem.style.left = '50%';
            elem.style.transform = 'translate(-50%, -50%)';
            elem.style.fontSize = '50px';
            elem.style.color = 'red';
            elem.style.fontWeight = 'bold';
            elem.textContent = '👹🔴⚠️ TOHLE NIKDY NEZASTAVÍŠ! ⚠️🔴👹';
            body.appendChild(elem);
            
            // 3. Blikající pozadí
            setInterval(function() {
                body.style.backgroundColor = (body.style.backgroundColor === 'red' ? 'green': 'red');
            }, 500);
            
            // 4. Randomové změny textu v h1
            let title = document.querySelector('h1');
            setInterval(function() {
                title.textContent = Math.random() > 0.5 ? 'Proč jsi to kliknul?' : 'Co jsi to udělal?';
            }, 300);

            // 5. Stále se generující nové elementy na stránce
            setInterval(function() {
                let box = document.createElement('div');
                box.style.width = '30px';
                box.style.height = '30px';
                box.style.backgroundColor = 'green';
                box.style.position = 'absolute';
                box.style.left = Math.random() * window.innerWidth + 'px';
                box.style.top = Math.random() * window.innerHeight + 'px';
                body.appendChild(box);
            }, 200);

            // 6. Zvuky
            let audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
            setInterval(function() {
                audio.play();
            }, 1000);
        });