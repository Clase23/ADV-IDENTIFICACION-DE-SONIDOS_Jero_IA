//https://teachablemachine.withgoogle.com/models/Amn_iUIgh/

function startClassification(){
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Amn_iUIgh/model.json",modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

function gotResults(error, results){
  if (error) {
      console.error(error);
  } else {
      console.log(results); 
      
      
      console.log(results[0].label);

      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;

      document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = "Presición: "+ (results [0].confidence*100).toFixed(2)+"%";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

      img = document.getElementById("alien1");
      img2 = document.getElementById("alien2");
      img3 = document.getElementById("alien3");
      img4 = document.getElementById("alien4");

      if(results[0].label == "M&M"){
          img.src = "aliens-01.gif";
          img2.src = "aliens-02.png";
          img3.src = "aliens-03.png";
          img4.src = "aliens-04.png";
      } else if(results[0].label == "Mamichula"){
          img.src = "aliens-01.png";
          img2.src = "aliens-02.gif";
          img3.src = "aliens-03.png";
          img4.src = "aliens-04.png";
      } else if(results[0].label == "Patito"){
          img.src = "aliens-01.png";
          img2.src = "aliens-02.png";
          img3.src = "aliens-03.gif";
          img4.src = "aliens-04.png";
      } else{
          img.src = "aliens-01.png";
          img2.src = "aliens-02.png";
          img3.src = "aliens-03.png";
          img4.src = "aliens-04.gif";
      }
  }

}