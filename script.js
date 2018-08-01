console.log('JS');

$(readyNow);

function readyNow(){
    console.log('JQ');
    //event handlers
    $('#content').on('click','#generate', appendDiv);
    $('#content').on('click','.swap-btn', swapColors);
    $('#content').on('click', '.delete-btn', deleteDiv);
    // call functions
    addBtn();
    
    let clicks = 0;

    // define functions
    function addBtn() {
        $('#content').html('<button id="generate">Generate</button>')
    }

    function appendDiv(){
        clicks++
        $('#content').append(`
            <div class="numberHouse">
                <p class="counter">${clicks}</p>
                <button class="swap-btn">Swap</button>
                <button class="delete-btn">Delete</button>
            </div>`
        );
    }

    function swapColors(){
        $(this).parent().toggleClass('numberShell');
    }

    function deleteDiv(){
        $(this).parent().remove();
    }
}