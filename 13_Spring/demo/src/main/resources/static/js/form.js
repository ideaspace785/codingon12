 window.addEventListener('DOMContentLoaded', (event) => {
        const yearSelect = document.getElementById('yearSelect');
        const monthSelect = document.getElementById('monthSelect');
        const daySelect = document.getElementById('daySelect');

        for (let i = 1900; i <= new Date().getFullYear(); i++) {
            const option = document.createElement('option');
            option.value = option.text = i;
            yearSelect.add(option);
        }
        for (let i = 1; i <= 12; i++) {
            const option = document.createElement('option');
            option.value = option.text = i;
            monthSelect.add(option);
        }
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = option.text = i;
            daySelect.add(option);
        }
    });