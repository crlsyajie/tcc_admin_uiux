document.addEventListener('DOMContentLoaded', function() {
    const draggableItems = document.querySelectorAll('.draggable');
    const dropZone = document.getElementById('answer_fitb');

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
    });

    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('drop', drop);

    function dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.innerText);
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');

        if (data === 'Yes') {
            event.target.style.border = '3px solid green';
            event.target.style.textAlign = 'center';
            event.target.style.fontWeight = 'bold';
            event.target.style.fontSize = '24px';
            event.target.style.color = 'red';
            event.target.textContent = data;

            draggableItems.forEach(item => {
                if (item.innerText === 'Yes') {
                    item.remove();
                }
            });
        } else {
            event.target.style.border = '3px solid red';
        }
    }
});
