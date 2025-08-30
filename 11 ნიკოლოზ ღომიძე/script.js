
document.addEventListener('DOMContentLoaded', function() {
      document.addEventListener('DOMContentLoaded', function() {
                 const sidebarButton = document.getElementById('sidebar-btn');
                 const catalogElement = document.getElementById('catalog');
                 const bodyElement = document.body; 
      
                 if (sidebarButton && catalogElement) {
                     sidebarButton.addEventListener('click', function() {
                         
                         catalogElement.classList.toggle('catalog-sidebar-active');
      
                         
                         if (catalogElement.classList.contains('catalog-sidebar-active')) {
                             bodyElement.classList.add('sidebar-open-no-scroll');
                             
                         } else {
                             bodyElement.classList.remove('sidebar-open-no-scroll');
                         }
                     });
      
                     
                 } else {
                     console.error('Sidebar button or catalog element not found!');
                 }
             });
           
            const sidebarButton = document.getElementById('sidebar-btn');
            const catalogElement = document.getElementById('catalog');
            const bodyElement = document.body;

            if (sidebarButton && catalogElement) {
                sidebarButton.addEventListener('click', function() {
                    catalogElement.classList.toggle('catalog-sidebar-active');
                    if (catalogElement.classList.contains('catalog-sidebar-active')) {
                        bodyElement.classList.add('sidebar-open-no-scroll');
                    } else {
                        bodyElement.classList.remove('sidebar-open-no-scroll');
                    }
                });
            } else {
                if (!sidebarButton) console.error('Sidebar button (#sidebar-btn) not found!');
                if (!catalogElement) console.error('Catalog element (#catalog) not found!');
            }

            // --- New Search Button Code ---
            const searchButton = document.getElementById('search-btn');
            const navSearchInput = document.getElementById('nav-search');

            if (searchButton && navSearchInput) {
                searchButton.addEventListener('click', function() {
                    
                    navSearchInput.classList.add('search-active');

                    
                    navSearchInput.focus();
                });
            } else {
                if (!searchButton) console.error('Search button (#search-btn) not found!');
                if (!navSearchInput) console.error('Nav search input (#nav-search) not found!');
            }
        });
// Hovered boxes
const styles = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  color: '#0B3954',
  fontWeight: 'bold'
};

document.querySelectorAll('.catalog-child').forEach(item => {
  item.addEventListener('mouseover', () => {
    const box = document.createElement('div');
    box.classList.add('card-box');

    const heading = document.createElement('p');
    heading.classList.add('box-header');
    Object.assign(heading.style, styles); // ✅ apply styles correctly
    heading.textContent = 'WE RECOMMEND';

    box.appendChild(heading);
    item.appendChild(box);
  });

  item.addEventListener('mouseout', () => {
    const box = item.querySelector('.card-box');
    if (box) {
      box.remove();
    }
  });
});


// animation for the products section
const products = document.getElementsByClassName('lis-item-wrapper');

for (let product of products) {
  product.addEventListener('mouseover', () => {
    product.style.transform = "translateY(-10px)";
  });

  product.addEventListener('mouseout', () => {
    product.style.transform = "translateY(0)";
  });
}

