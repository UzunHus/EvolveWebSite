document.getElementById('results').style.display = 'none';

submit.addEventListener('click', function (e) { 
  e.preventDefault();

  getValues();
})

getValues = () => { 
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementsByName("gender");
  const height = parseInt(document.getElementById("cm").value);
  const weight = parseInt(document.getElementById("kg").value);

  x = calculateAge(age);
  y = calculateWeight(weight);
  z = calculateHeight(height);
  finalResult(x, y, z, gender); 
}


calculateAge = age => { 
  finalAge = age * 5;
  return finalAge;
}

calculateWeight = (weight) => {
  kilogramWeight = weight;
  finalWeight = kilogramWeight * 10;
  return finalWeight;
}

calculateHeight = (height) => { 
  centimeterHeight = height;
  finalHeight = centimeterHeight * 6.25;
  return finalHeight;
}

finalResult = (x, y, z, gender) => {
  result = z + y - x; 
  for (i = 0; i < gender.length; i++) { 
    if (gender[i].checked) {
      finalResult = result + 155;
      break;
    } else {
      finalResult = result - 61;
      break;
    }
  }

  revealResult(finalResult);

  return finalResult;
}

revealResult = finalResult => {
  finalResult = Math.floor(finalResult);
  let finalBmi = finalResult.toString()

  if (finalBmi > 0) {
    calorie.innerText = finalBmi;
  }


}

function BMI() {
  var w = document.getElementById('kg').value;
  var h = document.getElementById('cm').value;
  var bmi = w / (h / 100 * h / 100);
  bmi = bmi.toFixed(2);

  if (w == 0 || h == 0) {
    bmikilo.innerText = "";
  }
  else if (bmi < 18.5) {
    document.getElementById("endeksyazi").style.visibility = 'visible';
    document.getElementById("kaloriyazi").style.visibility = 'visible';
    bmikilo.innerText = "Zayıfsınız";
  }
  else if (18.5 <= bmi && bmi < 24.9) {
    document.getElementById("endeksyazi").style.visibility = 'visible';
    document.getElementById("kaloriyazi").style.visibility = 'visible';
    bmikilo.innerText = "İdeal kilodasınız";
  }
  else if (24.9 <= bmi && bmi <= 29.9) {
    document.getElementById("endeksyazi").style.visibility = 'visible';
    document.getElementById("kaloriyazi").style.visibility = 'visible';
    bmikilo.innerText = "Kilolusunuz";
  }
  else if (29.9 <= bmi) {
    document.getElementById("endeksyazi").style.visibility = 'visible';
    document.getElementById("kaloriyazi").style.visibility = 'visible';
    bmikilo.innerText = "Obezsiniz";
  }

  if (w == 0 || h == 0) {
    sonuckutusu.innerText = "";
  }
  else {
    sonuckutusu.innerText = bmi;
  }

}

function sıfırla() {

  document.getElementById("endeksyazi").style.visibility = 'hidden';
  document.getElementById("kaloriyazi").style.visibility = 'hidden';
  age=0;
  weight=0;
  height=0;
  sonuckutusu.innerText = "";
  bmikilo.innerText = "";
  calorie.innerText = "";
  

  document.getElementById('results').style.display = 'none';

submit.addEventListener('click', function (e) { 
  e.preventDefault();

  getValues();
})
finalResult = (x, y, z, gender) => {
  result = z + y - x; 
  for (i = 0; i < gender.length; i++) { 
    if (gender[i].checked) {
      finalResult = result + 155;
      break;
    } else {
      finalResult = result - 61;
      break;
    }
  }

  revealResult(finalResult);

  return finalResult;
}

revealResult = finalResult => {
  finalResult = Math.floor(finalResult);
  let finalBmi = finalResult.toString()

  if (finalBmi > 0) {
    calorie.innerText = finalBmi;
  }

}
}
