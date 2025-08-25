// script.js

// Array to hold uploaded scripts in memory
let scripts = [];

// Password check
const checkBtn = document.getElementById('check-password-btn');
checkBtn.addEventListener('click', () => {
  const passwordInput = document.getElementById('password-input').value;
  if (passwordInput === 'test123') {
    // Show upload form
    document.getElementById('password-section').style.display = 'none';
    document.getElementById('upload-form').style.display = 'block';
  } else {
    alert('Incorrect password.');
  }
});

// Handle script upload
const uploadBtn = document.getElementById('upload-btn');
uploadBtn.addEventListener('click', () => {
  const name = document.getElementById('script-name').value.trim();
  const code = document.getElementById('script-code').value.trim();
  const desc = document.getElementById('script-desc').value.trim();
  
  if (name && code && desc) {
    // Create a script object and add to array
    scripts.push({ name, code, desc });
    // Update displayed list
    displayScripts();
    // Clear form fields
    document.getElementById('script-name').value = '';
    document.getElementById('script-code').value = '';
    document.getElementById('script-desc').value = '';
  } else {
    alert('Please fill in all fields.');
  }
});

// Function to display all scripts from the array
function displayScripts() {
  const listDiv = document.getElementById('scripts-list');
  
  // Clear previous content (except header)
  listDiv.innerHTML = '<h2>Uploaded Scripts</h2>';
  
  scripts.forEach((script, index) => {
    // Create card container
    const card = document.createElement('div');
    card.className = 'script-card';
    
    // Placeholder image (could be any image or icon)
    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/50';
    img.alt = 'Script icon';
    card.appendChild(img);
    
    // Script name
    const title = document.createElement('h3');
    title.textContent = script.name;
    card.appendChild(title);
    
    // Script description
    const para = document.createElement('p');
    para.textContent = script.desc;
    card.appendChild(para);
    
    // Copy button
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy Script';
    copyBtn.style.display = 'inline-block';
    copyBtn.style.fontWeight = 'bold';
    copyBtn.addEventListener('click', () => {
      // Copy script.code to clipboard
      navigator.clipboard.writeText(script.code)
        .then(() => alert('Script copied to clipboard!'))
        .catch(err => console.error('Copy failed', err));
    });
    card.appendChild(copyBtn);
    
    listDiv.appendChild(card);
  });
}
