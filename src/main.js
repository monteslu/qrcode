var _ = require('lodash');
var $ = require ('jquery');
var QRious = require('qrious');

var genBtn, textInput, outputDiv;
var SIZE = 300;

function generateQR(input) {
  var div = document.createElement('div');
  div.className = 'qrBox';
  var tDiv = document.createElement('div');
  tDiv.className = 'qrTitle';
  div.appendChild(tDiv);
  //todo escape
  tDiv.innerHTML = input;
  var canvas = document.createElement('canvas');

  var qr = new QRious({
    element: canvas,
    value: input
  });
  qr.size = SIZE;

  div.appendChild(canvas);
  outputDiv.appendChild(div);
}


$(function(){
  textInput = document.getElementById('textInput');
  genBtn = document.getElementById('genBtn');
  outputDiv = document.getElementById('outputDiv');

  $(genBtn).click(function() {
    console.log('clicked', $(textInput).val());
    generateQR($(textInput).val());
  });
  $(textInput).keyup(function(e){
    if(e.keyCode == 13) {
      generateQR($(textInput).val());
    }
  });

});
