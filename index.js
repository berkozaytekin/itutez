let wi

function bigCalc() {
    wi = document.querySelector('#isindeks').value
    console.log('wi', wi)
}



document.querySelector('#degirmenTur').addEventListener('click', () => {
    bigCalc()
})

$('#calcBtn').on('click', () => {
    bigCalc()
});

$('#degirmenTur').on('click', () => {
    if($('#degirmenTur option').filter(':selected').val() === 'cubukbilya') {
        $('#cubukluCikisWrapper').removeClass('hidden')
    } else {
        $('#cubukluCikisWrapper').addClass('hidden')
    }
});

