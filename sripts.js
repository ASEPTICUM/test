var checkbox = document.getElementById('checkbox');
var grid_block = document.getElementById('grid');
var grid_items = grid_block.getElementsByClassName('grid-item');
var modal = document.getElementById('modal');
var black_block = document.getElementById('black');
var text = document.getElementById('text');
var butadd = document.getElementById('add');
var close = document.getElementById('close');

/*click (open modal) and for new elements(open)*/
for (var i = 0; i < grid_items.length; i++) {
    grid_items[i].addEventListener('click', function() {
        var info = this.textContent; 
        text.textContent = info;
        modal.classList.add('show');
    });
}
function openModal(info) {
    text.textContent = info;
    modal.classList.add('show');
}


/*close modal*/
close.addEventListener('click', function() {
    modal.classList.add('hide');
    setTimeout(() => {
        modal.classList.remove('show', 'hide');
    }, 300);
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('hide');
        setTimeout(() => {
            modal.classList.remove('show', 'hide');
        }, 300);
    }
}



/*checkbox, changes styles*/
checkbox.addEventListener('click', function () {
    for (var i = 0; i < grid_items.length; i++) {
        if (checkbox.checked == true) {
            if (i % 2 === 1) {
                grid_items[i].style.setProperty('--bagcolor', 'rgb(141, 141, 141)');
                grid_items[i].style.setProperty('--color', 'white');        
            } 
        } else {
            grid_items[i].style.setProperty('--bagcolor', '');
            grid_items[i].style.setProperty('--color', '');           
        }    
    }      
});
function applyStylesToGridItem(item) {
    if (checkbox.checked == true) {
        if (item.index % 2 === 1) {
            item.style.setProperty('--bagcolor', 'rgb(141, 141, 141)');
            item.style.setProperty('--color', 'white');
        }
    } else {
        item.style.setProperty('--bagcolor', '');
        item.style.setProperty('--color', '');
    }
}


/*add new elements*/
function addGridItem() {
    var newItem = document.createElement("div");
    var newItemIndex = grid_items.length + 1;
    newItem.textContent = newItemIndex;
    newItem.index = newItemIndex + 1;
    newItem.classList.add("grid-item");
    grid_block.append(newItem);
    
    newItem.addEventListener('click', function () {
        openModal(newItem.textContent);
    });

    applyStylesToGridItem(newItem);
}
butadd.addEventListener('click', function() {
    addGridItem();
});