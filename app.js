// for multiple select

// const inputs = document.getElementsByClassName('js-fake-input');
// const selects = document.getElementsByClassName('js-select');

// for (let i = 0; i < inputs.length; i++) {
//   getSelected(i);
//   selects[i].addEventListener("change", function() {
//     getSelected(i);
//   });
// }

// function getSelected(i){
//   inputs[i].value = selects[i].options[selects[i].selectedIndex].text;
// }


const input = document.querySelector('.js-fake-input');
const menuSelect = document.querySelector('.js-select');

function getSelected(){
    input.value = menuSelect.options[menuSelect.selectedIndex].text;
}


$('.truckItem').show().css("display", "block").css("margin", "0 auto")

  getSelected();
  menuSelect.addEventListener("change", function(e) {
    getSelected();

    switch(e.target.value) {
        case '1':
            $('.menuItem').hide()
           $('.truckItem').show().css("display", "block").css("margin", "0 auto")
           break;
        case '2':
            $('.menuItem').hide()
            $('.crusherItem').show().css("display", "block").css("margin", "0 auto")
            break;
        case '3':
            $('.menuItem').hide()
            $('.ballmillItem').show().css("display", "block").css("margin", "0 auto")
            break;
        case '4':
            $('.menuItem').hide()
            $('.vibratingItem').show().css("display", "block").css("margin", "0 auto")
            break;
        case '5':
            $('.menuItem').hide()
            $('.beltItem').show().css("display", "block").css("margin", "0 auto")
            break;

        default:
        $('.menuItem').hide()
    }
    console.log('eeee',e)

  });



