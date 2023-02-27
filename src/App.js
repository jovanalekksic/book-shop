import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import { useState } from 'react';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  const [cartBooks, setCartBooks]=useState([]);
  const [cartNum, setCartNum]=useState(0);
  const addToCart = (id) => {
    books.map((book)=>{
      if(book.id==id){
      book.amount = book.amount + 1;
      const num=cartNum+1;
      setCartNum(num);
      refreshCart();
      console.log("book id=", book.id, "amount=", book.amount);
      }
    })
    
  };
  const removeFromCart = (id) => {
    books.map((book)=>{
      if(book.id==id){
        if (book.amount > 0) {
          book.amount = book.amount - 1;
          const num=cartNum-1;
      setCartNum(num);
      refreshCart();
          console.log("book id=", book.id, "amount=", book.amount);
        }else{
          alert("Amount of books is already 0.")
        }
      }
    })
    
  };

  const refreshCart=()=>{
    const newBooks=books.filter((books)=> books.amount>0);
    setCartBooks(newBooks);
  }

  const [books,setBooks]=useState([
    {
      id:1,
      title: "Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R.Tolkien",
      description:"The first part of J R R Tolkien's epic masterpiece The Lord of the Rings, this is the story of young hobbit Frodo Baggins, who finds himself faced with an immense and terrible duty. Sauron has gathered to him all the Rings of Power.",
      amount:0,
    },
    {
      id:2,
      title: "Braiding Sweetgrass",
      author: "Robin Wall Kimmerer",
      description:"Drawing on her life as an indigenous scientist, and as a woman, Kimmerer shows how other living beings--asters and goldenrod, strawberries and squash, salamanders, algae, and sweetgrass--offer us gifts and lessons, even if we've forgotten how to hear their voices.",
      amount:0,
    },
    {
      id:3,
      title: "Twilight",
      author: "Stephenie Meyer",
      description:"Isabella Swan's move to Forks, a perpetually rainy town in Washington, could have been the most boring move she ever made. When she meets the mysterious, alluring and sweet Edward Cullen - a vampire - her life takes a thrilling and terrifying romantic turn that she never expected.",
      amount:0,
    },
    {
      id:4,
      title: "How to Paint Without a Brush",
      author: "Red Hong Yi",
      description:"From an internationally acclaimed artist and social media force, a visually captivating showcase of art made from everyday objects-including tea bags, flower petals, and eggshells-with several do-it-yourself projectsHow to Paint Without a Brush.",
      amount:0,
    },
  ]);

  return (
    <BrowserRouter className='App'>
      <NavBar cartNum={cartNum} />
      <Routes>
        <Route path='/' element={ <Books books={books} onAdd={addToCart} onRemove={removeFromCart}/> } />
        <Route path='/cart' element={<Cart cartBooks={cartBooks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
