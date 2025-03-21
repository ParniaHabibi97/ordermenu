// script.js

document.addEventListener('DOMContentLoaded', () => {
    const categories = [
      "HAI LA MASA, DAR ATENTIE. CA VINE SI FELUL DOI",
      "pita",
      "PIDE-BARCUTE DIN ALUAT MATURAT. COAPTE PE VATRA INCINSA",
      "zupa",
      "INABUSITE LENT LA SOBA CU RABDARE. LA FOC DOMOL",
      "GRATAREALA",
      "RUMENITE LA TEMPERATURI MARI SI TINUTE LA BRONZAT",
      "SALATE. CA CICA AU MAI PUTINE CALORII",
      "DULCECARII SI NOSTALGI"
    ];
  
    const menuItems = {
      "HAI LA MASA, DAR ATENTIE. CA VINE SI FELUL DOI": [
        { name: "Dish 1", description: "Description of dish 1", price: "30 LEI" },
        { name: "Dish 2", description: "Description of dish 2", price: "40 LEI" },
      ],
      "pita": [
        { name: "Pita 1", description: "Description of pita 1", price: "20 LEI" },
        { name: "Pita 2", description: "Description of pita 2", price: "25 LEI" },
      ],
      // Add more categories and items as needed
    };
  
    const categoriesContainer = document.getElementById('categories');
    const menuItemsContainer = document.getElementById('menu-items');
    const itemsContainer = document.getElementById('items-container');
    const backBtn = document.getElementById('back-btn');
  
    // Dynamically create category buttons
    categories.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('category-item');
      categoryDiv.textContent = category;
      categoryDiv.addEventListener('click', () => showCategoryItems(category));
      categoriesContainer.appendChild(categoryDiv);
    });
  
    // Show menu items for a specific category
    function showCategoryItems(category) {
      // Hide categories and show menu items
      document.getElementById('categories').classList.add('hidden');
      menuItemsContainer.classList.remove('hidden');
      
      // Clear previous items
      itemsContainer.innerHTML = '';
      
      // Get items for the selected category
      const items = menuItems[category] || [];
      
      items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>${item.price}</p>
        `;
        itemsContainer.appendChild(itemDiv);
      });
    }
  
    // Go back to categories page
    backBtn.addEventListener('click', () => {
      document.getElementById('categories').classList.remove('hidden');
      menuItemsContainer.classList.add('hidden');
    });
  });
  