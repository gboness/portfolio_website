// radio button feature

function checkInput() {
    const inputText = document.getElementById('inputText').value;
    const submitButton = document.getElementById('submitButton');
    if (inputText.trim() !== '') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}


function generateCheckbox() {
// Get the input text and split it by commas
const inputText = document.getElementById('inputText').value;
const options = inputText.split(',').map(option => option.trim());

// Get the container for radio buttons
const container = document.getElementById('checkBoxesContainer');


// Generate checkbox
options.forEach((option) => {
    // Create a label element
    const label = document.createElement('label');
    label.innerText = option;
    label.style.marginRight = '10px';
    label.style.display = 'block'; // Ensure each check box is on a new line

    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = option;


    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            // Store the selected option
            console.log(`Stored: ${checkbox.value}`);
            displayDeletedItem(option);


            // Remove the checkbox and its label
            container.removeChild(label);
            console.log(`Finished: ${checkbox.value}`);
        
        }
    });

    // Append the radio button and label to the container
    label.prepend(checkbox);
    container.appendChild(label);
});

// Clear the input box
document.getElementById('inputText').value = '';
document.getElementById('submitButton').disabled = true;
}

function displayDeletedItem(item) {
    // Get the container for deleted items
    const deletedContainer = document.getElementById('deletedItemsContainer');

    // Create a new paragraph element to display the deleted item
    const deletedItem = document.createElement('p');
    deletedItem.innerText = item;

    // Append the deleted item to the container
    deletedContainer.appendChild(deletedItem);
}



// Tab Section

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tabs
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab content and add an active class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Set default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablinks').click();
});
