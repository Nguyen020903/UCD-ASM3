 // List of nations with their corresponding URLs
 const nations = [
    { name: 'United States', url: 'https://example.com/us' },
    { name: 'Canada', url: 'https://example.com/ca' },
    { name: 'United Kingdom', url: 'https://example.com/uk' },
    { name: 'Australia', url: 'https://example.com/au' },
    { name: 'Germany', url: 'https://example.com/de' },
    { name: 'France', url: 'https://example.com/fr' },
    { name: 'Italy', url: 'https://example.com/it' },
    { name: 'Japan', url: 'https://example.com/jp' },
    { name: 'China', url: 'https://example.com/cn' },
    { name: 'India', url: 'https://example.com/in' }
    // Add more nations as needed
  ];

  // Function to filter nations based on user input
  function filterNations(event) {
    const searchValue = event.target.value.toLowerCase();
    const dropdown = document.getElementById('nationDropdown');
    dropdown.innerHTML = '';

    const filteredNations = nations.filter(nation => nation.name.toLowerCase().startsWith(searchValue));
    filteredNations.forEach(nation => {
      const item = document.createElement('div');
      item.textContent = nation.name;
      item.classList.add('dropdown-menu-item');
      item.onclick = () => {
        window.location.href = nation.url;
      };
      dropdown.appendChild(item);
    });
  }
  // Event listener to close the dropdown menu when clicking outside
  document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('nationDropdown');
    if (!dropdown.contains(event.target)) {
      dropdown.innerHTML = '';
    }
  });