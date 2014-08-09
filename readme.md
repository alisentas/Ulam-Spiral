Ulam Spiral
====

A Javascript based Ulam Spiral generator. I created it with pure javascript. 
A demo can be found on this **[Github Page](htttp://alisentas.github.io/Ulam-Spiral)**

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
ulam(opts);
/**
		opts are:
		[Name]     [Type]         [Description]
		container: DOM elemment   container element, in our case: document.getElementById("container")
		width:     int            canvas width
		height:    int            canvas.height
		cubeWidth: int            prime number cube width
		color:     string         fill color
		startNum:  int            number to start
		count:     int            number amount to check
	*/
```

Function will add your div a canvas, which is our spiral.

License
====

Ulam spiral project is licensed under MIT License.