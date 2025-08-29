// Part 1: JavaScript Basics - Variables, conditionals
function checkTemperature() {
    let temp = document.getElementById('tempInput').value;
    let output = document.getElementById('tempOutput');
    
    if (temp === '') {
        output.innerHTML = 'Please enter a temperature';
        return;
    }
    
    temp = Number(temp);
    let result;
    
    if (temp > 30) {
        result = `It's hot! ${temp}°C is perfect for swimming.`;
    } else if (temp >= 15 && temp <= 30) {
        result = `It's moderate. ${temp}°C is nice weather.`;
    } else {
        result = `It's cold! ${temp}°C requires a jacket.`;
    }
    
    output.innerHTML = result;
}

// Part 2: JavaScript Functions
function calculateDiscount() {
    const price = parseFloat(document.getElementById('priceInput').value);
    const discount = parseFloat(document.getElementById('discountInput').value);
    
    if (isNaN(price) || isNaN(discount)) {
        document.getElementById('discountOutput').innerHTML = 'Please enter valid numbers';
        return;
    }
    
    const discountedPrice = price - (price * (discount / 100));
    document.getElementById('discountOutput').innerHTML = 
        `Discounted price: $${discountedPrice.toFixed(2)} (${discount}% off)`;
}

function formatName() {
    const firstName = document.getElementById('firstNameInput').value.trim();
    const lastName = document.getElementById('lastNameInput').value.trim();
    
    if (!firstName || !lastName) {
        document.getElementById('nameOutput').innerHTML = 'Please enter both names';
        return;
    }
    
    const formattedName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`;
    document.getElementById('nameOutput').innerHTML = `Formatted name: ${formattedName}`;
}

// Part 3: JavaScript Loops
function generateTable() {
    const multiplier = parseInt(document.getElementById('multiplierInput').value);
    let output = document.getElementById('tableOutput');
    
    if (isNaN(multiplier)) {
        output.innerHTML = 'Please enter a valid number';
        return;
    }
    
    let tableHTML = '<ul>';
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<li>${multiplier} × ${i} = ${multiplier * i}</li>`;
    }
    tableHTML += '</ul>';
    
    output.innerHTML = tableHTML;
}

function startCountdown() {
    const seconds = parseInt(document.getElementById('countdownInput').value);
    let output = document.getElementById('countdownOutput');
    
    if (isNaN(seconds) || seconds <= 0) {
        output.innerHTML = 'Please enter a valid positive number';
        return;
    }
    
    output.innerHTML = `Countdown: ${seconds}`;
    
    let count = seconds;
    const countdownInterval = setInterval(() => {
        count--;
        
        if (count > 0) {
            output.innerHTML = `Countdown: ${count}`;
        } else {
            output.innerHTML = 'Countdown complete!';
            clearInterval(countdownInterval);
        }
    }, 1000);
}

// Part 4: DOM Manipulation
function switchTheme(theme) {
    const body = document.body;
    
    // Remove any existing theme classes
    body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
    
    // Add the selected theme class
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
    } else if (theme === 'blue') {
        body.classList.add('blue-theme');
        body.style.backgroundColor = '#e6f0ff';
        body.style.color = '#004280';
    } else {
        body.classList.add('light-theme');
        body.style.backgroundColor = '#f5f8fa';
        body.style.color = '#333';
    }
}

function addListItem() {
    const itemInput = document.getElementById('listItemInput');
    const list = document.getElementById('dynamicList');
    
    if (itemInput.value.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = itemInput.value;
        list.appendChild(newItem);
        itemInput.value = '';
    }
}

function clearList() {
    const list = document.getElementById('dynamicList');
    list.innerHTML = '';
}

function changeColor() {
    const box = document.getElementById('styleBox');
    const colors = ['#6e8efb', '#a777e3', '#5acfb0', '#e74c3c', '#f39c12'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

function toggleVisibility() {
    const box = document.getElementById('styleBox');
    if (box.style.visibility === 'hidden') {
        box.style.visibility = 'visible';
    } else {
        box.style.visibility = 'hidden';
    }
}

function rotateElement() {
    const box = document.getElementById('styleBox');
    box.style.transition = 'transform 0.5s';
    box.style.transform = box.style.transform === 'rotate(15deg)' ? 'rotate(0deg)' : 'rotate(15deg)';
}

// Initialize with some examples
window.onload = function() {
    generateTable();
};