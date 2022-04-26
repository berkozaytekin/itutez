window.onload = () => {
	let button = document.querySelector("#submit");

	
	button.addEventListener("click", myFunction);
};
function myFunction(beslemeton, cubuklucikis) {
    let beslemeton = parseInt(document
        .querySelector("#beslemeton").value);

        let cubuklucikis = parseInt(document
			.querySelector("#cubuklucikis").value);

            let result = document.querySelector("#result");

            let sonuc = (beslemeton * cubuklucikis) 
                            
    result.innerHTML = sonuc
  }
  



	


