document.addEventListener('DOMContentLoaded', function() {
    const picHolders = document.querySelectorAll('.pic_holder');

    picHolders.forEach(picHolder => {
        picHolder.addEventListener('click', function() {
           
            picHolders.forEach(holder => {
                holder.style.backgroundColor = 'var(--black2)';
                holder.style.borderColor = 'var(--maroon)';
            });

            if (this.id === 'pic_holder1') {
                this.style.backgroundColor = '#0a5c36';
                this.style.borderColor = 'white'
            } else {
                this.style.backgroundColor = '#b80000';
                this.style.borderColor = 'white'
            }
        });
    });
});
