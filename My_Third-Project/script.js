// JavaScript to toggle nostalgic theme
const toggleBtn = document.getElementById('themeToggleBtn');
const bodyEl = document.body;

toggleBtn.addEventListener('click', () => {
    bodyEl.classList.toggle('nostalgic');
    
    if(bodyEl.classList.contains('nostalgic')){
        toggleBtn.textContent = "Switch to Normal Theme";
    } else {
        toggleBtn.textContent = "Toggle Nostalgic Theme";
    }
});
