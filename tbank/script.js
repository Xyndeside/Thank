const input = document.querySelector('.questions__search-input');
const clearIcon = document.querySelector('.questions__search-icon-delete');

function updateClearIconVisibility() {
    if (input.value.trim() !== '') {
        clearIcon.style.display = 'block';
    } else {
        clearIcon.style.display = 'none';
    }
}

input.addEventListener('input', updateClearIconVisibility);

clearIcon.addEventListener('click', () => {
    input.value = '';
    updateClearIconVisibility();
});

document.querySelectorAll('.questions__shortcuts-item').forEach(item => {
    item.addEventListener('click', function () {
        input.value = this.querySelector('.questions__shortcuts-value p').textContent;
        updateClearIconVisibility();
    });
});