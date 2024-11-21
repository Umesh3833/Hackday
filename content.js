


const links=document.querySelectorAll('.question-landing-title a')
const ids=[]
links.forEach((i)=>{
    link=i.getAttribute('href');
    const match = link.match(/\/(\d+)-/); // Regex to find the number before the dash

    if (match && match[1]) {
      ids.push(match[1]);
    }
    console.log(match[1])
})
const names = [
    '', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 
    'Grace', 'Hannah', 'Isaac', 'Jack', 'Karen', 'Leo', 
    'Mia', 'Nina', 'Oscar', 'Paul', 'Quincy', 'Rachel', 
    'Sam', 'Tina', 'Uma', 'Victor', 'Wendy', 'Xander', 
    'Yara', 'Zane', 'Amy', 'Ben', 'Cara', 'Dan', 
    'Ella', 'Finn', 'Gina', 'Harry', 'Ivy', 'Jake', 
    'Liam', 'Mila', 'Noah', 'Olivia', 'Pete', 'Quinn', 
    'Rose', 'Sara', 'Tom', 'Uri', 'Vera', 'Will', 
    'Xena', 'Yuri'
];
console.log(window.location.href)
// Create a JSON object with IDs as keys and names as values
const jsonObject = {};
ids.forEach((id, index) => {
    jsonObject[id] = names[index % names.length]; // Use modulo to loop names if not enough
});

// Convert the object to a JSON string
const jsonString = JSON.stringify(jsonObject, null, 2);

  // Function to add a div next to every h4 element
function addDivNextToH4() {
    const headings = document.querySelectorAll('h4');
   
    headings.forEach((heading,id) => {
      
      
      // Create a new div element
      const newDiv = document.createElement('div');
      const jsonObject = JSON.parse(jsonString);
      if(jsonObject[ids[id]]){
        // Ensure the ID exists in jsonObject to prevent undefined errors
        const assignedName = jsonObject[ids[id]] || 'Unknown';
        newDiv.textContent = `Assigned to ${assignedName}`;
    //   newDiv.textContent = `Assigned to ${jsonString[ids[id]]}`;
      
  
      // Apply styles for rounded borders and positioning
      newDiv.style.display = 'inline-block';
      newDiv.style.marginLeft = '10px';
      newDiv.style.padding = '5px 10px';
      newDiv.style.border = '1px solid #ccc';
      newDiv.style.borderRadius = '10px';
      newDiv.style.backgroundColor = '#f0f0f0';
  
      // Insert the new div after the h4 element
      heading.parentNode.insertBefore(newDiv, heading.nextSibling);
      }
    });
  }
  
  // Run the function
  addDivNextToH4();
// Function to add an "Assign to me" button if the URL matches a specific pattern
function addAssignButtonIfNeeded() {
  // Get the current URL
  const currentUrl = window.location.href;

  // Define the pattern to match the specific page URL
  const urlPattern = /\/answers\/2167768-/; // Adjust the pattern as needed

  // Check if the current URL matches the pattern
  if (urlPattern.test(currentUrl)) {
    console.log("asdfasdfadsf")
      const buttonContainer = document.createElement('div');
      buttonContainer.style.marginTop = '20px';

      // Create the button
      const assignButton = document.createElement('button');
      assignButton.textContent = 'Assign to me';

      // Style the button
      assignButton.style.padding = '10px 20px';
      assignButton.style.border = '1px solid #007bff';
      assignButton.style.borderRadius = '5px';
      assignButton.style.backgroundColor = '#007bff';
      assignButton.style.color = '#fff';
      assignButton.style.cursor = 'pointer';
      assignButton.style.fontSize = '16px';

      // Add click event listener to the button
      assignButton.addEventListener('click', () => {
          alert('You have been assigned this task!');
          // Add additional logic here to handle the assignment
      });

      // Insert the button into the DOM
      // Assuming you want to add it to a specific container or at the end of the body
      document.body.appendChild(buttonContainer);
      buttonContainer.appendChild(assignButton);
  }
}

addAssignButtonIfNeeded()
