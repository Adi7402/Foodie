const menuItems = [
  {
    name: "Paneer Butter Masala",
    image: "https://source.unsplash.com/250x150/?paneer",
    type: "Veg"
  },
  {
    name: "Chicken Biryani",
    image: "https://source.unsplash.com/250x150/?biryani",
    type: "Non-Veg"
  },
  {
    name: "Veg Burger",
    image: "https://source.unsplash.com/250x150/?burger,veg",
    type: "Veg"
  },
  {
    name: "Grilled Chicken",
    image: "https://source.unsplash.com/250x150/?chicken,grill",
    type: "Non-Veg"
  },
  {
    name: "Margherita Pizza",
    image: "https://source.unsplash.com/250x150/?pizza,veg",
    type: "Veg"
  },
  {
    name: "Mutton Curry",
    image: "https://source.unsplash.com/250x150/?mutton,curry",
    type: "Non-Veg"
  }
];

function renderMenu() {
  const menuList = document.getElementById("menuList");
  if (!menuList) return;

  menuList.innerHTML = "";

  menuItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Type: ${item.type}</p>
      <button class="add-btn" onclick="alert('Added ${item.name} to your cart!')">Add</button>
      <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
    `;
    menuList.appendChild(div);
  });
}

function deleteItem(index) {
  menuItems.splice(index, 1);
  renderMenu();
}

document.addEventListener("DOMContentLoaded", renderMenu);
