function displayit(classd) {
  document.getElementsByClassName(`${classd}`)[0].style.display = "block";
  document.querySelectorAll(`.containerallemoji > div:not(.${classd})`).forEach((closetabs) => {
    closetabs.style.display = "none";
  })
}

function copy(input_ref) {
  // console.log(input_ref);
  input_ref.select();                      // To select the items in input 
  input_ref.setSelectionRange(0, 99999);   // Add this to use multiple items. 
  document.execCommand("copy");            // To Copy the selected items
}


function push_emoji(ths) {
  document.getElementsByClassName("copied")[0].style.display = "block";
  document.getElementsByClassName("copied")[0].classList.add("elementToFadeInAndOut");
  document.getElementsByClassName('copied')[0].innerHTML = `${ths.innerHTML} Copied`;


  // console.log(ths);
  ths.style.backgroundColor = "skyblue";

  let emoji_cpy = ths.innerHTML; //"emoji"


  //Initialized
  if (this.arr == undefined) {
    this.arr = [];
  }


  // To empty the list 
  let ref = this;
  document.querySelector("#x").addEventListener("click", () => {
    ref.arr = [];
    document.getElementById("in2ins").value = "";
  });

  //Push to arr
  this.arr.push(emoji_cpy);
  //Making a string
  //Displaying on input
  document.getElementById("in2ins").value = this.arr.join("");

  //Reference to arr arr_ref
  // let arr_ref = this.arr;
  // console.log(ref.arr);
  // console.log(document.getElementById("in2ins").value);

  if (this.arr.length > 30) {
    this.arr.shift();
  }
  //On Change in Input create an array and reassign to arr
  document.getElementById("in2ins").addEventListener("blur", () => {
    ref.arr = Array.from(document.getElementById("in2ins").value);
  });

  var input_txt = document.createElement("textarea");
  input_txt.innerHTML = emoji_cpy;
  input_txt.id = "copy";
  document.body.appendChild(input_txt);
  var copyText = document.getElementById("copy");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById("copy").remove();


  if (this.prev_element != undefined) {
    if (this.prev_element === ths) {
    } else {
      this.prev_element.style.backgroundColor = "white";
    }
    this.flag++;
  }
  this.prev_element = ths;

  setTimeout(() => {
    document.getElementsByClassName("copied")[0].classList.remove("elementToFadeInAndOut")
    document.getElementsByClassName("copied")[0].style.display = "none";
  }, 600);
}




