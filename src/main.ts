import './style.css'
// //queries for the item or grabs it basically 
// const firstListItem = document.querySelector('li')

let currentPlayer: 'X' | 'O' = 'X'
//start out as a const until it has to be a let 
//also added that that the string type can only be an X or an O so that if you try to do something else it will be an error

let moveCounter = 0

// //sets up the function that is generic and works for any li 
//the event tells us the target and that is the thing we clicked on 


function handleClickSquare(event: MouseEvent)
{


  const thingClickedOn = event.target
  //in JS null is the same thing as false and not null is the same thing as true 
  if (thingClickedOn instanceof HTMLLIElement) {
    
    //if the element already has taken then they cant click on the box again 
    //this is a guard clause so it end or (returns) from the function right away and wont execute the code after it 
    if (thingClickedOn.classList.contains('taken')){
      console.log('NOPES')
      return 
    }
    
    //this is the idea of type narrowing so now we know that the thingsclickedon is for sure an LI so we know it has a textContent
  //and the if statement makes sure the target isnt null 
  
  
  thingClickedOn.textContent = currentPlayer
  
  //Adds the taken class so that we show the user they cant select the item
  //remember that we have a class 'taken' in our CSS so were basically turning it on(toggling that class)
  thingClickedOn.classList.add('taken')
  
  if (currentPlayer === 'X')
  {
    currentPlayer = 'O'
  }
  else 
  {
    currentPlayer = 'X'        
    }
    
  
  
    //Increment the move counter 
    moveCounter++
    
    const header = document.querySelectorAll('h1')
    if (header instanceof HTMLHeadElement){
      header.textContent = `Move ${moveCounter} of Tic Tac Toe`
    }
  }
  
  
}


//if I did firstListItem.textContent ='X'
//this would only put the X in the top left box 

// //what does the ? do ask tricia do you always have to do it when you want to 
// //something to a variable that has a null type 
// //teaches the first list item that when you are clicked the listener for that event is this function 
// firstListItem?.addEventListener('click', handleClickSquare)

// const allSquares = document.querySelectorAll('li')
// //get in habbit fo checking it to see if it was what you thought it was 
// //for this scenario it was a a nodelist of 9 items aka all the squares 
// //console.log(allSquares)
// allSquares.forEach((square)=> square.addEventListener('click', handleClickSquare))

const gameBoard = document.querySelector('ul')

if (gameBoard instanceof HTMLUListElement){
  gameBoard?.addEventListener('click',handleClickSquare)
}

//make unbeatable tic tac toe game 
