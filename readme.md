Ulam Spiral
====

A Javascript based Ulam Spiral generator. I created it with pure javascript. Ulam spiral project is licensed under MIT.

Usage
====

You can use it on your projects in three steps.

1.
Add our script to your website.
```html
<script src="ulam.js"></script>
```

2. Add a container div
```html
<div id="container"></div>
```

3. Call ulam function at bottom
```javascript
container = document.getElementById("container");
ulam(container, 750, 750, 2, 100000, "red");
//params are:
//container element, canvas width, canvas.height, prime cube width, number count to check and cube fill color
```

Function will add your div a canvas, which is our spiral.