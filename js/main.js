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
  theme1 = document.getElementById('theme1');
  if(image == 'zFormulatedPicTheme') {
    theme1.style.height = "3.375em";
  }
}

function hidePreviewImage(image) {
  theme1 = document.getElementById('theme1');
  if(image == 'zFormulatedPicTheme') {
    theme1.style.height = "0";
  }
}
