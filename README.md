# Getting Started

npm start to use the app

# Introduction

This is an example repo to explain context. It is a mock shopping site with only two pages: 
a home page and a basket page. You can access the homepage by clicking the shopping icon 
in the top left of the header and you can click the basket icon on the top right of the header 
to get to the basket page.

# How context is used

Here context is used to store the basket and the setBasket function. As the basket is used in 
several places in the app, it needs to be initialised in App so that all of the children can 
access it.

## STEP 1: creating the context

First, the context is made and exported using the createContext method from react. You can find this 
in the BasketContext file in the utils folder. As you can see, this isn't a very complicated step. All 
you need to do is create the context using createContext, export it, and make sure it's named using pascal 
case as we will be using it like a component.

## Step 2: using the context provider

Now we've created the context, we can use it to make a context provider. In App, we have 
imported the BasketContext that we created in step 1 and used it to create
```js 
<BasketContext.Provider> 
```
which we use to wrap everything. Also in our App, we have created a basket 
and setBasket hook using useState. We can store both of these in the context as an object by doing
```js
<BasketContext.Provider value={{basket, setBasket}}> 
```
on line 12. (this is shorthand for 
{{basket: basket, setBasket: setBasket}}). Now every child of our provider will have access to both 
basket and setBasket.

## Step 3: consuming the context with useContext

To access the context we will need to use the useContext hook. If we have a look at Basket.jsx for example.Here we have imported the useContext hook from React (just like you would do for useState or useEffect). 
We will also need to import the BasketContext itself. Then to access the values stored within the context, 
all we need to do is invoke useContext and put the context itself in the parameters. If we use object destructuring, we can access these values by doing:
```js
const {basket, setBasket} = useContext(BasketContext)
```
which we can see on line 5. Now we can use these to access the basket and all the items in it, and also 
access the setBasket function which we can use to set the state. Notice that because we used context, we 
didn't have to pass the props down the component tree and we can now have access to basket and setBasket anywhere in the app.


