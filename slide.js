//TODO: Set và Reset property css cho các element
function CSSReset() {
    currentImage.css('border-radius', '10px').css('border', 'none');
}

function CSSSet() {
    currentImage.css('border-radius', '50px').css('border', '2px solid red');
}


//TODO: function di chuyển các element khi click element
var currentImage = $($('.box img')[0]);

$('.box img').on('click', function () {
    CSSReset();
    currentImage = $(this);
    $('#show img').attr('src', $(this).attr('src'));
    CSSSet();
})

let index_Img = $($('.box img')).length - 1;
//TODO: function di chuyển các element khi click next
$('#next').on('click', function () {
    CSSReset();

    if (currentImage.index() == index_Img) {
        let next = $($('.box img')[0]);
        $('#show img').attr('src', next.attr('src'));
        currentImage = next;
    }
    else {
        let next = currentImage.next('img');
        $('#show img').attr('src', next.attr('src'));
        currentImage = next;
    }

    CSSSet();
});

//TODO: function di chuyển các element khi click previous
$('#previous').on('click', function () {
    CSSReset();

    if (currentImage.index() == 0) {
        let prev = $($('.box img')[index_Img]);
        $('#show img').attr('src', prev.attr('src'));
        currentImage = prev;
    }
    else {
        let prev = currentImage.prev('img');
        $('#show img').attr('src', prev.attr('src'));
        currentImage = prev;
    }

    CSSSet();
});


