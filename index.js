//this variable contains the names of the items and whether it's completed
// or not, I will be pushing new items to this store 
let store=[
    {name: "bread", completed: false},
    {name: "milk", completed: false},
    {name: "apples", completed: false},
    {name: "oranges", completed: false}
]

function addItem(){
    $("#js-shopping-list-form").on("submit", function(evt){
        evt.preventDefault();
            let listItem= $("#shopping-list-entry").val();
            store.push({
                name: listItem,
                completed: false
            });
        renderShoppingList();
    });
}

function renderShoppingList(){
    let html = "";
    for(let i = 0; i < store.length; i++){
        html += generateListItem(store[i]);
    }
    $(".shopping-list").html(html);
}

function generateListItem(item){
    return `
    <li>
    <span class="shopping-item">${item.name}</span>
    <div class="shopping-item-controls">
        <button class="shopping-item-toggle checkButton">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete deleteButton">
            <span class="button-label">delete</span>
        </button>
        </div>
    </li>
    `
}
    // insert new item function

function main(){
    addItem();
    renderShoppingList();
}
$(main);