# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot


### Links

- Solution URL: (https://github.com/Ohiole/ecommerce-product-page)
- Live Site URL: (https://ohiole.github.io/ecommerce-product-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library


### What I learned

I learnt how to use the useState and useContext hooks properly with this project, useContext makes it very easy to pass down props instead of doing too much prop drilling


```react
Context File
import { createContext } from "react";

export const CartContext = createContext ({});

App.js File
  <CartContext.Provider value={{count, setCount, clickBtn, setClickBtn, setShowImg}}>
    <Header />
    <Main />
    {showImg && <ImageBox />}
  </CartContext.Provider>
```

### Continued development

I will continue to learn more hooks, Up next is useReducer, useRef and most especially useEffect.


### Useful resources

- [Web Dev Simplified on Youtube](https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h) - This helped me for react hooks.He explains it very well in short  time

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@__ojoo](https://www.twitter.com/__ojoo)


## Acknowledgments

Youtube Videos and Meta: Front-End Development have helped me a lot. Also thanks to a friend of mine who has been a good guide
