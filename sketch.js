function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(mouseX, mouseY, 237);
  text("lala test", 20, 20)
  text('I thought you told Marie to stop talking to you', 30, 30);
  text("Yellow submarine should have a comeback", 170, 135)
  let r= random(10);
  textSize(10+mouseX/width*30)
  textSize()
  text('l', 31,40, r);
  text('o', 29,50, r);
  text('v', 29,60, r);
  text('e', 29,70, r);
  text('y', 29,90, r);
  text('o', 29,100, r);
  text('u', 29,110, r);
  text('N', 20,100, r);
  text('o', 127,30, r);
  text('n', 127,40, r);
  text('i', 127,50, r);
  text('c', 127,60, r);
  text('a', 127,70, r);
  text('H', 118,70, r);
  text('v', 134,70, r);
  text('e', 140,70, r);
  text('y', 151,70, r);
  text('o', 157,70, r);
  text('u', 164,70, r);
  text('b', 174,70, r);
  text('e', 181,70, r);
  text('e', 188,70, r);
  text('n', 195,70, r);
  text('g', 205,70, r);
  text('o', 212,70, r);
  text('i', 219,70, r);
  text('n', 222,70, r);
  text('g', 229,70, r);
  text('t', 239,70, r);
  text('o', 243,70, r);
  text('t', 253,70, r);
  text('h', 257,70, r);
  text('e', 264,70, r);
  text('g', 274,70, r);
  text('y', 281,70, r);
  text('m', 287,70, r);
  text('a', 188,80, r);
  text('t', 188,90, r);
  text('M', 188,105, r);
  text('e', 188,113, r);

  
  translate(windowWidth/2, windowHeight/2)
  rotate(mouseX/50)
  
  text(" Whitechapel Gallery, 11.02. around 2 pm, 3yo toddler rolling on the floor -look mom, Im like her- (referring to Carolee Schneeman in her piece up to and beyond her limits)", 0,0);
  text ("2 women on the overground on a sunday: ...eyeball cellulitis?", 15,20)
  rotate(mouseY/25)
  text("Berlin, Pipasso in Neuköln, last week: Habibti, you make this grey city smile ", 30,40);
  rotate(mouseX/10);
  text("my roommate, last night: Coffe and Pasteries at 7am before going to the good morning rave...", 40,60)
  textAlign(LEFT)


}