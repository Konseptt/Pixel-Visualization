let rColorSlider;
let gColorSlider;
let bColorSlider;
let pxWSlider;
let pxTotalN;
var landS;
var refPxLen;
var pxTotalCanvas;
var pxGap;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rColorSlider = createSlider(0, 100, 100, 1);
  gColorSlider = createSlider(0, 100, 100, 1);
  bColorSlider = createSlider(0, 100, 100, 1);
  pxLenSlider = createSlider(0.39, 2, 2, .01);

  if (width > 1.125 * height) {
    landS = true;
    refPxLen = height / 5;
    txtStd = height / 24;
    widthStd = width / 16;
    pxTotalCanvas = height / 2;

    rColorSlider.style('width', pxTotalCanvas + 'px');
    rColorSlider.position(width / 2 - widthStd, txtStd * 4.3);
    gColorSlider.style('width', pxTotalCanvas + 'px');
    gColorSlider.position(width / 2- widthStd, txtStd * 5.3);
    bColorSlider.style('width', pxTotalCanvas + 'px');
    bColorSlider.position(width / 2- widthStd, txtStd * 6.3);
    pxLenSlider.style('width', pxTotalCanvas + 'px');
    pxLenSlider.position(width / 2- widthStd, txtStd * 7.3);

  } else if (height > 2.07 * width) {
    refPxLen = width / 5;
    txtStd = width / 15;
    pxTotalCanvas = width - txtStd * 2;
    offset = 0;

    rColorSlider.style('width', width - txtStd * 2 + 'px');
    rColorSlider.position(txtStd, txtStd * 4.8);
    gColorSlider.style('width', width - txtStd * 2 + 'px');
    gColorSlider.position(txtStd, txtStd * 6.8);
    bColorSlider.style('width', width - txtStd * 2 + 'px');
    bColorSlider.position(txtStd, txtStd * 8.8);
    pxLenSlider.style('width', width - txtStd * 2 + 'px');
    pxLenSlider.position(txtStd, txtStd * 10.8);
  } else {
    refPxLen = height * .09;
    txtStd = height * .032;
    pxTotalCanvas = height * .481 - txtStd * 2;
    offset = (width - height * .481) / 2;

    rColorSlider.style('width', width - txtStd * 2 - offset + 'px');
    rColorSlider.position(txtStd + offset / 2, txtStd * 4.8);
    gColorSlider.style('width', width - txtStd * 2 - offset + 'px');
    gColorSlider.position(txtStd + offset / 2, txtStd * 6.8);
    bColorSlider.style('width', width - txtStd * 2 - offset + 'px');
    bColorSlider.position(txtStd + offset / 2, txtStd * 8.8);
    pxLenSlider.style('width', width - txtStd * 2 - offset + 'px');
    pxLenSlider.position(txtStd + offset / 2, txtStd * 10.8);
  }

  textAlign(RIGHT);
  noStroke();
}

function draw() {
  background(51);

  rColor = rColorSlider.value() * 2.55;
  gColor = gColorSlider.value() * 2.55;
  bColor = bColorSlider.value() * 2.55;
  pxLen = (pxLenSlider.value() * pxLenSlider.value()) / 4 * pxTotalCanvas;
  // pxLen = map(pxLenSlider.value(), 0, 2, 9, pxTotalCanvas);
  pxGap = pxLen * .01;
  if (landS) {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(txtStd * 1.4);
    text("Pixels", width / 2, txtStd * 1.75);
    textSize(txtStd * 0.8);
    text("V1.0.3 Coded by: Ranjan Sharma", width / 2, txtStd * 3.2);
    translate(width / 2 - txtStd * 4 - widthStd, txtStd * 5);
    textAlign(RIGHT);
    text("Red", 0, 0);
    text("Green", 0, txtStd * 1);
    text("Blue", 0, txtStd * 2);
    fill(255, 0, 0);
    rect(-txtStd * 4, txtStd * -0.7, txtStd * .8, txtStd * .8);
    fill(0, 255, 0);
    rect(-txtStd * 4, txtStd * 0.3, txtStd * .8, txtStd * .8);
    fill(0, 0, 255);
    rect(-txtStd * 4, txtStd * 1.3, txtStd * .8, txtStd * .8);
    fill(255);
    text(rColorSlider.value() + "%", txtStd * 3, 0);
    text(gColorSlider.value() + "%", txtStd * 3, txtStd * 1);
    text(bColorSlider.value() + "%", txtStd * 3, txtStd * 2);
    text("Size", 0, txtStd * 3);
    pop();

    push();
    translate(width / 2 - height / 3 - widthStd, pxTotalCanvas - txtStd * 2);
    fill(0);
    rect(0, 0, refPxLen, refPxLen);
    showPixel(rColor, gColor, bColor, refPxLen, 5, 5);
    translate(0, height / 3.5);
    fill(rColor, gColor, bColor);
    rect(0, 0, refPxLen, refPxLen);
    pop();
    pxTotalN = pxTotalCanvas / pxLen - 1;
    pxTotalN = pxTotalN - pxTotalN % 2 + 1;
    transX = (pxTotalCanvas - (pxLen * pxTotalN)) / 2;
    transY = (pxTotalCanvas - (pxLen * pxTotalN)) / 2;
    push();
    translate(width * 3 / 4 - width / 4 - widthStd, pxTotalCanvas - txtStd * 2);
    fill(0);
    rect(0, 0, pxTotalCanvas, pxTotalCanvas);
    translate(transX, transY);
    for (x = 0; x < pxTotalN; x++) {
      push();
      for (y = 0; y < pxTotalN; y++) {
        showPixel(rColor, gColor, bColor, pxLen, 0, pxGap);
        translate(0, pxLen);
      }
      pop();
      translate(pxLen, 0);
    }
    pop();

  } else {

    push();
    fill(255);
    textAlign(CENTER);
    textSize(txtStd * 1.4);
    text("Pixels", width / 2, txtStd * 1.75);
    textSize(txtStd * 0.8);
    text("V 1.0.2 Coded by: Joon Shakya", width / 2, txtStd * 3.2);
    translate(width / 3, txtStd * 5);
    textAlign(RIGHT);
    text("Red", 0, 0);
    text("Green", 0, txtStd * 2);
    text("Blue", 0, txtStd * 4);
    fill(255, 0, 0);
    rect(-txtStd * 4, txtStd * -0.7, txtStd * .8, txtStd * .8);
    fill(0, 255, 0);
    rect(-txtStd * 4, txtStd * 1.3, txtStd * .8, txtStd * .8);
    fill(0, 0, 255);
    rect(-txtStd * 4, txtStd * 3.3, txtStd * .8, txtStd * .8);
    fill(255);
    text(rColorSlider.value() + "%", txtStd * 3, 0);
    text(gColorSlider.value() + "%", txtStd * 3, txtStd * 2);
    text(bColorSlider.value() + "%", txtStd * 3, txtStd * 4);
    text("Size", 0, txtStd * 6);
    pop();

    push();
    translate(width / 2 + offset - (width / 2 - txtStd), pxTotalCanvas);
    fill(0);
    rect(0, 0, refPxLen, refPxLen);
    showPixel(rColor, gColor, bColor, refPxLen, 5, 5);
    push();
    translate(width - refPxLen - txtStd * 2 - offset * 2, 0);
    fill(rColor, gColor, bColor);
    rect(0, 0, refPxLen, refPxLen);
    pop();
    pxTotalN = pxTotalCanvas / pxLen - 1;
    pxTotalN = pxTotalN - pxTotalN % 2 + 1;
    transX = (pxTotalCanvas - (pxLen * pxTotalN)) / 2;
    transY = (pxTotalCanvas - (pxLen * pxTotalN)) / 2;
    translate(0, refPxLen + txtStd);
    fill(0);
    rect(0, 0, pxTotalCanvas, pxTotalCanvas);
    translate(transX, transY);
    for (x = 0; x < pxTotalN; x++) {
      push();
      for (y = 0; y < pxTotalN; y++) {
        showPixel(rColor, gColor, bColor, pxLen, 0, pxGap);
        translate(0, pxLen);
      }
      pop();
      translate(pxLen, 0);
    }
    pop();
  }
  // end of draw()
}


function showPixel(r, g, b, len, inGap, outGap) {
  pWidth = (len - inGap * 2 - outGap * 2) / 3;
  pHeight = len - outGap * 2;
  fill(r, 0, 0);
  rect(outGap, outGap, pWidth, pHeight);
  fill(0, g, 0);
  rect(pWidth + inGap + outGap, outGap, pWidth, pHeight);
  fill(0, 0, b);
  rect(outGap + 2 * inGap + 2 * pWidth, outGap, pWidth, pHeight);
}