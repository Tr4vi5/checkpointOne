console.log('JS');

$(readyNow);

function readyNow(){
    console.log('JQ');
    //event handlers
    $('#content').on('click','#generate', addDiv);
    $('#content').on('click','.swap-btn', swapColors);
    $('#content').on('click', '.delete-btn', deleteDiv);
    // call functions
    addBtn();
    
    let clicks = 0;

    // define functions
    function addBtn() {
        $('#content').html('<button id="generate">Generate</button>')
    }

    function addDiv(){
        $('#content').append('<div class="numberHouse"></div>');
        clickCounter();
        appendSwap();
        appendDelete();
    }

    function clickCounter(){
        clicks++;
        $('.counter').empty();
        $('.numberHouse').empty();
        $('.numberHouse').append('<p class="counter">'+ clicks +'</p>');
    }

    function appendSwap(){
        $('.numberHouse').append('<button class="swap-btn">Swap</button>')
    }

    function appendDelete() {
        $('.numberHouse').append('<button class="delete-btn">Delete</button>')
    }

    function swapColors(){
        $(this).parent().toggleClass('numberShell');
    }

    function deleteDiv(){
        $(this).parent().remove();
    }
}

//  I'm not understanding how to give each new div it's own target for updating the click count.