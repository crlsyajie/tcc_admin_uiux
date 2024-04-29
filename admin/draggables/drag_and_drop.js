document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cubeSlider = document.querySelector('.cube');
    const drbAnswer = document.getElementById('drb_answer');

    let currentSlide = 0;
    const totalSlides = 6;

    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        rotateCube();
    });

    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        rotateCube();
    });

    function rotateCube() {
        const angle = 360 / totalSlides * currentSlide;
        cubeSlider.style.transform = `rotateY(${angle}deg)`;
    }

    const faces = document.querySelectorAll('.face');
    faces.forEach(face => {
        face.addEventListener('dragstart', dragStart);
    });

    drbAnswer.addEventListener('dragover', dragOver);
    drbAnswer.addEventListener('drop', drop);

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.innerText);
        event.target.style.cursor = 'pointer';
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        const correctAnswer = 'chanci';
    
        if (data === correctAnswer) {
            event.target.textContent = data;
            event.target.style.border = '3px solid green';
            event.target.style.fontWeight = 'bold';
            event.target.style.fontSize = '24px';
    
            // Remove 
            faces.forEach(face => {
                if (face.querySelector('label').innerText === correctAnswer) {
                    face.querySelector('label').remove();
                }
            });
        } else {
            event.target.style.border = '3px solid red';
        }
    }
});
