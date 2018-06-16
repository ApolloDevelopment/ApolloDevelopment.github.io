function showDescription(game) {
  GTAdescription = document.getElementById('GTAdescription');
  BO2description = document.getElementById('BO2description');
  MW3description = document.getElementById('MW3description');
  MW2description = document.getElementById('MW2description');
  if(game == 'GTA') {
    GTAdescription.style.display = "block";
  } else if(game == 'BO2') {
    BO2description.style.display = "block";
  } else if(game == 'MW3') {
    MW3description.style.display = "block";
  } else if(game == 'MW2') {
    MW2description.style.display = "block";
  }
}

function hideDescription(game) {
  GTAdescription = document.getElementById('GTAdescription');
  BO2description = document.getElementById('BO2description');
  MW3description = document.getElementById('MW3description');
  MW2description = document.getElementById('MW2description');
  if(game == 'GTA') {
    GTAdescription.style.display = "none";
  } else if(game == 'BO2') {
    BO2description.style.display = "none";
  } else if(game == 'MW3') {
    MW3description.style.display = "none";
  } else if(game == 'MW2') {
    MW2description.style.display = "none";
  }
}


function showPreviewImage(image) {
  var theme1 = document.getElementById('theme1');
  if(image == 'zFormulatedPicTheme') {
    theme1.style.height = "3.375em";
  }
}

function hidePreviewImage(image) {
  var theme1 = document.getElementById('theme1');
  if(image == 'zFormulatedPicTheme') {
    theme1.style.height = "0";
  }
}





//  ------- this is pure JavaScript --------
/*
function nav2(x) {
  var menu = document.getElementById(x);
  var visibility = 'block';
  if(menu.style.display == visibility) {
    menu.style.display = 'none';
  } else {
    menu.style.display = visibility;
  }
}
*/


//  -------- this is THAT ^ but a lot more simple (with jQuery) -------
function toggleNav() {
  $('.nav2button').on('click', function() {
    $('.tabs2').toggle();
  });
}
$(document).ready(toggleNav);
