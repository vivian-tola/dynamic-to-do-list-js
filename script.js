  // Function to add a task
  const addTask = () => {
    // Get and trim the task text from the input field
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText === '') {
      alert('Please enter a task.'); // Prompt the user to input a task
      return;
    }

    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.textContent = taskText; // Set task text

    // Create a remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove'; // Button text
    removeButton.className = 'remove-btn'; // Add a class for styling (optional)

    // Add an event listener to remove the task when the button is clicked
    removeButton.onclick = () => {
      taskList.removeChild(listItem); // Remove the corresponding list item from the list
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the unordered list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  };

  // Add event listener to the Add Task button
  addButton.addEventListener('click', addTask);

  // Allow adding tasks by pressing the Enter key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Call addTask on page load (if required, you can remove this line if unnecessary)
  addTask();
});
