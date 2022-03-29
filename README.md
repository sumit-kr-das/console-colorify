<h1 align='center'> Console Colorify</h1>

<p align='center'>JavaScript Library for colorify your console log</p>

<br/>

<img src="https://i.ibb.co/1M3rMkK/colorify-preview.png"
     alt="Colorify Preview" />

### Install

```js
$ npm i console-colorify
```

### Using React

```js
// ES6 Imports
import React from 'react';
import { Log } from 'console-colorify';

// Console anywhere
const StyledPaper = () => {
  Log.primary("Object is Called.")
  Log.success("Form submitted successfully :)")
  Log.denger("Error in your module !")
  Log.warning("Don't use this local variable !")
  Log.info("Information ")
  return (
    <>
        <h1>Basic Use of Console Colorify</h1>
    </>
  );
};

export default StyledPaper;
```