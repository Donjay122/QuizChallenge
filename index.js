/* JAVASCRIPT FOR QUIZ*/
/*@AYODEJI CODESPACE*/


////////VARIABLES/////////////////
/////////////////
let score =0;
let adder =0
let numberOfQuestion = 1;
////////SELECTORS/////////////////
let displayQuestion = document.querySelector('h2');
let responseInput = document.getElementsByClassName('answer-input');
let nextButton = document.getElementById('next-button');
let backButton = document.getElementById('back-button');
let resetButton = document.getElementById('reset-button');
////////////////VARIABLES/////////
/////////////////////////////////

/////////////////////////////////
///////ARRAYS//&///OBJECTS///////
let questionAndResponse = [
	{question:'1. What does HTML stand for ?', answer:['Hyper Text Markup Language','Home Tool Markup Language','Hyperlinks and Text Markup Language','I dont know','Hypertonic Modern Language']},
	{question:'2. Who is making the Web standards ?', answer:['Mozilla','Microsoft','The World Wide Web Consortium','Apple','Codespace']},
	{question:'3. What does CSS stand for ?', answer:['Creative Style Sheets','Colorful Style Sheets','Computer Style Sheets','Cascading Style Sheets','Crusading Site Seat']},
	{question:'4. Which is the correct CSS syntax ?', answer:['body:color=black','{body;color:black}',' {body:color=black(body}','body {color: black}','None of the above']},
	{question:'5. How do you insert a comment in a CSS file ?', answer:['this is a comment','/* this is a comment */','// this is a comment','// this is a comment //','..comment']},
	{question:'6. How can you make a list that lists the items with numbers ? ', answer:['items list','dl','ul','list','ol']},
	{question:'7. Choose the correct HTML tag for the largest heading.', answer:['head','heading','h1','header','h6']},
	{question:'8. Which property applies a color to text ?', answer:['text-color','foreground-color','background-color','color','color-display']},
	{question:'9. What selector should you use when applying a style to multiple elements ?', answer:['ID','Class','Type','Any of the above','SelectAll']},
	{question:'10. Which of the following does CSS not do ?', answer:['layout','design','style','content','format']},
	{question:'11. Which of the following is true about variable naming conventions in JavaScript ?', answer:['Begins with a letter or the underscore character.',' variable names are case sensitive.','Both of the above.','None of the above.','I dont know']},
	{question:'12. Which method removes the last element from an array and returns that element ?', answer:['last()','get()','pop()','1 and 2','None of the above.']},
	{question:'13. Which of the following is used to create Web Pages ?', answer:['C++','Java','HTML','JVM','Python']},
	{question:'14. HTML is considered as ?', answer:['High Level Language','OOP Language','Programming Language','Markup Language','Tribal Language']},
	{question:'15. Where is Codespace located ?', answer:['ProxySock','Mowbray','Woodstock','Hoodsock','Amsterdam']},
	{question:'16. An error is also known as ?', answer:['Cursor','Icon','Bug','Debug','Bedbug']},
	{question:'17. Microsoft Word is an example of ?', answer:['Application software','an operating system','Processing device','an input device','I dont know']},
	{question:'18. To use inline styles you use the style attribute in the ?', answer:['link tag','style tag','relevant tag','None of the above','All of the above']},
	{question:'19. The default attribute value of "target" is _____ in HTML ?', answer:['_self','_parent','_top','_blank','_open']},
	{question:'20. Which is smallest Heading Tag in HTML ?', answer:['H1','H3','H6','H4','H12']}
	// ALL QUESTIONS AND POSSIBLE RESPONSE//
];
let correctResponse = [ 'Hyper Text Markup Language',
					   'The World Wide Web Consortium',
					   'Cascading Style Sheets',
					   'body {color: black}', 
					   '/* this is a comment */',
					   'ol',
					   'h1', 
					   'color', 
					   'Class', 
					   'format', 
					   'Both of the above',
					   'pop()',
					   'HTML',
					   'Markup Language',
					   'Woodstock',
					   'Bug', 
					   'Application software',
					   'relevant tag', 
					   '_self',
					   'H6'
					  ];  //CORRECT ANSWERS STORED HERE
/////////////////////////////////
///////ARRAYS//&///OBJECTS///////


/////////ASSIGNMENTS////AND LISTENERS///////////////////////////////////
displayQuestion.innerHTML = questionAndResponse[adder].question;  // QUESTION TAGS



for(let j=0;j<responseInput.length;j++){
	responseInput[j].style.cursor = 'pointer';///////////////////////////
	responseInput[j].value = questionAndResponse[adder].answer[j];//////  HERE!!
	responseInput[j].addEventListener('click',()=> { //////////////////
		if (correctResponse.indexOf(responseInput[j].value) != -1 ){
			score+=1;
			}
if(adder>=19){
	document.write('<h1>'+'You got '+ score+ ' out of 20 questions correctly'+'</h1>');
	if(score >= 15){
	   document.write('<h3>'+'Because you scored up to 15, your profile has been upgraded to PRO!'+'</h3>');
	   }else if(score >=10 && score < 15){
				document.write('<h3>'+'Because you scored up to 10, your profile has been upgraded to PREMIUM!'+'</h3>');
				}else{
					document.write('<h3>'+'Unfortunately, you do not meet the minimum requirement for upgrade.'+'</h3>');
				}
	print();
    }
	});
}
//////////////INPUT BUTTON ENDS////////////////////////////////////

    nextButton.style.cursor = 'pointer';
	nextButton.addEventListener('click', ()=>{
	adder+=1;
if(adder>=20){
	document.write('<h1>'+'You got '+ score+ ' out of 20 questions correctly'+'</h1>');
	if(score >= 15){
	   document.write('<h3>'+'Because you scored up to 15, your profile has been upgraded to PRO!'+'</h3>');
	   }else if(score >=10 && score < 15){
				document.write('<h3>'+'Because you scored up to 10, your profile has been upgraded to PREMIUM!'+'</h3>');
				}else{
					document.write('<h3>'+'Unfortunately, you do not meet the minimum requirement for upgrade.'+'</h3>');
				}
	print();
    }
	displayQuestion.innerHTML = questionAndResponse[adder].question;
for(let s=0;s<responseInput.length;s++){
	responseInput[s].value = questionAndResponse[adder].answer[s];
	}
	
});
//////////////NEXT BUTTON ENDS/////////////////////////////////////

    backButton.style.cursor = 'pointer';
	backButton.addEventListener('click', ()=>{
	adder-=1;
if(adder< 0){
   adder = 0;
   }
	displayQuestion.innerHTML = questionAndResponse[adder].question;
for(let y=0;y<responseInput.length;y++){
	responseInput[y].value = questionAndResponse[adder].answer[y];
	}
	
});
//////////BACK BUTTON ENDS///////////////////////////////////////


resetButton.style.cursor = 'pointer';
//////////RESET BUTTON ENDS///////////////////////////////////////