<script type="module"></script>
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";  
  const firebaseConfig = {
    apiKey: "AIzaSyC3wzO9QHKmYBYbZdP5jRrJAGjXrsnAEdM",
    authDomain: "online-book-store-e94f0.firebaseapp.com",
    databaseURL: "https://online-book-store-e94f0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "online-book-store-e94f0",
    storageBucket: "online-book-store-e94f0.appspot.com",
    messagingSenderId: "645039073221",
    appId: "1:645039073221:web:a041edc3e002a18e260dac",
    measurementId: "G-SNQGVXT26C"
  };
const appSettings = {
databaseURL:"https://online-book-store-e94f0-default-rtdb.asia-southeast1.firebasedatabase.app/"}

const app = initializeApp(appSettings)
const database = getDatabase(app)
export const todoDB = ref(database, "todos")

const shoppingList = document.getElementById('list');

onValue(todoDB, function (snapshot) {
  if (snapshot.exists()) {
    clearShoppingList();
    console.log('onvalue', snapshot.val())
    const data = Object.entries(snapshot.val());
    console.log("🚀 ~ file: index.js:41 ~ data:", data)

    for (let i = 0; i < data.length; i++) {
      appenItemToShoppingList(data[i]);
    }
  } else {
    shoppingList.innerHTML = `<li>No items to show...</li>`;
  }
});

function clearShoppingList() {
  shoppingList.innerHTML = "";
}

function appenItemToShoppingList(item) {
  let itemId = item[0];
  let itemData = item[1];

  let newLi = document.createElement("li");
  newLi.textContent = `${itemData.title} - ${itemData.price}/. Rs`;

  newLi.addEventListener("dblclick", function () {
    let locationToDelete = ref(database, `todos/${itemId}`);
    remove(locationToDelete);
  });

  shoppingList.append(newLi);
}