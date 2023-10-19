// Your Code Here
// uusing the fetch API to get the list of books from the
async function main() {
  let response = await fetch("http://localhost:3001/ListBooks");

  let books = await response.json();

  books.forEach(renderBook);
}
// made a function to render the books to the DOM through the book object.
function renderBook(book) {
  let root = document.querySelector("#root");

  let li = document.createElement("li");
  li.textContent = book.title;

  let quantityInput = document.createElement("input");
  quantityInput.value = book.quantity;

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";
// Adding event listener to the save button.
  saveButton.addEventListener("click", () => {
    fetch("http://localhost:3001/updateBook", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: book.id,
        quantity: quantityInput.value,
      }),
    });
  });

  li.append(quantityInput, saveButton);
// append li to the book form div container we have.
  root.append(li);
}

main();
