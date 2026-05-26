const state = {
    bpm: 72,
    steps: parseInt(localStorage.getItem('steps')) || 0,
    water: parseFloat(localStorage.getItem('water')) || 0
};

function updateUI() {
    document.getElementById('bpm-val').textContent = state.bpm;
    document.getElementById('steps-val').textContent = state.steps;
    document.getElementById('water-val').textContent = state.water;
    document.getElementById('date-display').textContent = new Date().toLocaleDateString();
}

function saveData() {
    localStorage.setItem('steps', state.steps);
    localStorage.setItem('water', state.water);
}

document.getElementById('add-water').addEventListener('click', () => {
    state.water += 0.25;
    saveData();
    updateUI();
});

document.getElementById('log-activity').addEventListener('click', () => {
    state.steps += 1000;
    saveData();
    updateUI();
});

// Simulate live heart rate
setInterval(() => {
    state.bpm = 60 + Math.floor(Math.random() * 20);
    updateUI();
}, 3000);

updateUI();