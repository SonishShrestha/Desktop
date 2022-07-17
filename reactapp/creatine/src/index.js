import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const books = [{
  img : 'https://m.media-amazon.com/images/I/618gYp5GJvL._AC_UY327_FMwebp_QL65_.jpg',
  title : 'High Performance Habits',
  author : 'Berdon Burchad'
},
{
  img : 'https://m.media-amazon.com/images/I/717GIpEKgSL._AC_UY327_FMwebp_QL65_.jpg',
  title : 'Elite: High Performance Lessons and Habits from a Former Navy SEAL',
  author : 'Nick Hays and Gildan Media'
},
{
  img : 'https://m.media-amazon.com/images/I/618gYp5GJvL._AC_UY327_FMwebp_QL65_.jpg',
  title : 'High Performance Habits',
  author : 'Berdon Burchad'
}

]

function Booklist(){
  return(
    <section className='booklist'>
      {books.map((item) => <Book {...item}/>)}  
          
    </section>
  )
}

function clickHandler(){
  alert('you clicked me')
}

const Book = ({img,title,author}) => {
  
  return(
    <article className='book'>
      <img src = {img} alt='' onMouseEnter={()=>console.log(title)}/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Click me</button>
      <button type='button' onClick={clickHandler}>Click me</button>
    </article>
  )
}

ReactDOM.render(<Booklist/>,document.getElementById('root'));

