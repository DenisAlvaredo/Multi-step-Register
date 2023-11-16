let currentStep = 1;
const totalSteps = 3;

function next() {
    const pagination = document.getElementById('step-number');
    document.getElementById(`step${currentStep}`).classList.remove('active-step');
    
    currentStep++;
    pagination.textContent = currentStep;
    document.getElementById(`step${currentStep}`).classList.add('active-step');
}

function toStep2() {
    const name = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const summaryName = document.getElementById('displayedName');
    const summaryEmail = document.getElementById('displayedEmail');

    const isEmailValid = emailInput.checkValidity();
    
    if (name !== '' && isEmailValid && currentStep < totalSteps) {
        next();
        updateProgressCircles(currentStep)
        summaryName.textContent = name;
        summaryEmail.textContent = email;
    } else {
        alert('Please complete all fields with valid information.');
    }
}

function toStep3() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const ul = document.querySelector('ul');
    
    ul.innerHTML = '';

    selectedOptions = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const span = document.createElement('span');
            span.textContent = checkbox.parentElement.textContent.trim();

            const li = document.createElement('li');
            li.appendChild(span);

            ul.appendChild(li);
        }
    });

    if (ul.children.length > 0) {
        next();
        updateProgressCircles(currentStep)
    } else {
        alert('Please complete all fields.');
    }
}

function updateProgressCircles(currentStep) {
    const circles = document.querySelectorAll('.circle');

    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add(`circle-active`);
        } 
    });
}

function confirmAlert() {
    alert('✅ Success');
}