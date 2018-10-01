# pxShader
   ![image](pxShader.png)
## About
pxShader is a javascript library mearnt mainly for html5/canvas interactions. 

:bulb:This library is mainly object based.
for those who don't really like reading :scissors: :books: a video tutorial is available here
## Table of Contents
* __Getting Started__
     * [ Basic setup ](#setup)
     * [ The Grid System ](#grid)
* __Basic Shapes__
     * [ Drawing a Rectangle ](#rectangle)
     * [ Drawing a Circle ](#circle)
     * [ Drawing a Text ](#text)
     * [Drawing an image ](#image)
     * [ Drawing an Line ](#line)
* __Complex Shapes__
     * [ objectArray ](#objectArray)
     * [ path objects ](#path)
* __More Drawing Parameters__
     * [ Stroke ](#Stroke)
     * [ COLORS ](#COLORS)
* [__Global Variables__](#Globals)
* __More Functions__
     * [ Background() ](#background)
     * [ Clear() ](#clear)
     * [ Translate() ](#translate)
     * [ Rotate() ](#rotate)
     * [ Scale() ](#scale)
     * [ Transparency() ](#transparency)
     * [ Save() ](#save)
     * [ Restore() ](#restore)
     * [ Math Functions ](#Math)
     * [ EraseShape() ](#eraseShape)
     * [ CopyObj() ](#copyoObj)
     * [ Dist() ](#dist)
     * [ toPoints() ](toPoints)
 * __Animations__
     * [ Animate() ](#animate)
     * [ Update() ](#update)
     * [ StopAnim() ](#stopAnim)
     * [ Sprite Images ](#sprites)
     * [ Intersect() ](#intersect)
* [__More Examples__](#Examples)
   ## Setup
    So we will first see what are the basic requirements to start the tutorial,
    well fisrt you will actually need to download it and include it in your code in this way.

      <html>
         <body>
         </body>
         <!--Here is actually the link for the library-->
         <script href="pxShader.js"></script>
         <!-- Here is where you place your code-->
         <script></script>
      </html>   
  So an important thing to know when working with pxShader.js is that you are actually mainly working in a coordinate system 
  that is when drawing any thing using the library you need to specify the x and y coordinates of the object you want to draw.
  That said let's look at what we can actually put in our __empty__ script tag
  ``` javascript
      var c = canvas2d();
  ```
  The canvas2d() function initializes the drawing area or __canvas__ where you will draw all you shapes and returns the DOM object of     that canvas. so basically the variable c will contain the an object. if you are used to the __DOM (DOCUMENT OBJECT MODEL)__ if js you   can actually do funny things with it as giving it an id/class to further format it's style :smile: 
 
  so this is the basic syntax for using the library you can't draw any with calling the __canvas2d()__ funtion or you are bound to get     and error so let's look at the function and it's parameters.
  so this is the __General syntax for this : canvas2d(width,height,responsive?,centered?)__
  
  | paramters | Meaning |
  | --- | --- |
  | width |`optional`:Specifies the width of the drawing element,`default`:600px|
  | height|`optional`:Specifies the height of the drawing element,`default`:600px|
  | responsive? | `optional`:Tells whether the drawing element is media responsive or not (adapts it's size to screen size) `default`: false|
  | centered? | `optional`: Tells whether the drawing elemet is centered or not `default`: false|
 
  ## Grid 
  So basically when most of the shapes in pxShader you are likely to use a coordinate to sepcify where in the canvas you want your shape   to be drawn else it is not drawn or you well *sweet error* . So how do we specify those coordinates for an objectwe are drawing?
  ``` javascript
      var c = canvas2d();
      var Robj =  {
         x : 20,
         y: 40,
         w : 80,
         h : 80
      }
      var rect = rec(Robj);
  ```
   So this is in someway the answer in this code you can see that after intializing the canvas with __canvas2d();__ method we are are creating a new variable Robj which is an object with attributes x and y. So generall y that is always how you are going to specify the coordinates of the object you are about to draw. So this example we are going to a see it the next sections so don't worry much about the next line we are going to discuss further about it. 
   Another interesting question is to say how is the coordinate system scaled? 
   The coordinate system starts from 0 to the width of the element on the x-axis and from 0 to the height of the lement on the y-axis.
   and well for conviency pxShader has an in-build function for drawing that coordinate system so that you can actually place the object    where you want with a bit of precision.
    ``` javascript
      var c = canvas2d();
      grid(25);// the grid () function draws a grid and takes as paramter the space between each line on the grid
      draw();// the draw method draw all shapes that have been initialized
    ```
   ## Rectangle
     ### GENERAL SYNTAX
     ` rec({x:x-coord,y:y-coord,w:width,h:height});`
     ### EXAMPLE 
   ``` javascript
   var canvas = canvas2d();
   var square = rec({x:10,y:20,w:20,h:20});
   square.draw();
   ```
 So here we actually created our first shape. so the rec function initializes an object shape width a draw method and returns it      onto the the variable square so when `square.draw()` is called it actally draws the that object shape we have initialized alternatively we could just only say  `draw()` this will draw all the object shapes that have been initialized. So actually the main difference between these 2 is that the `square.draw()` will only  draw 1 shape that is specific object shape that is in the square variable that has been initialized while the `draw()` draws all the shapes that have been initialized. 
So let's explain more the general syntax     

 | paramter | meaning |
 | ---      | ----    |
 | x  | specifies the x coordinate of the top left corner of the rectangle|
 | y  | specifes the y coordimaet of the top corner of the rectangle |
 | w  | specifies the width of the rectangle|
 |h | Specifies the height of the rectangle|
  ## Circle
   ### GENERAL SYNTAX
   ` arc({x:x-coord,y:y-coord,r:radius,deg:degrees});`
   ### EXAMPLE 
   ``` javascript
   var canvas = canvas2d();
   var circle = arc({x:10,y:20,r:20});
   circle.draw();
   ```
   So here we use the function arc to initialize an object shape and return it to the variable circle then call the buit-in method          `circle.draw();` that all object shapes pocess to draw the circle. So let's look at the syntax:
   
   | paramter | meaning |
   | ---      | ----    |
   | x  | specifies the x coordinate of the top left corner of the arc/circle|
   | y  | specifes the y coordimaet of the top corner of the arc/circle |
   | r  | specifies the raduis of the arc/circle|
   |deg | `optinal`: Specifies the number of degrees in the arc/circle in radians, `default:2*PI`|
   :bulb: Setting the deg parameter only to PI will only draw half a circle.
 ## Text
   ### GENERAL SYNTAX
      ` text({x:x-coord,y:y-coord,txt:text-content});`
   ### EXAMPLE  
   ``` javascript
   var canvas = canvas2d();
   var myText = text({x:10,y:20,text:"Hello world"});
   myText.draw();
   ```
   So here we use the function text to initialize an object shape and return it to the variable myText then call the buit-in method          `myText.draw();` that all object shapes pocess to draw the text. So let's look at the syntax:
   
   | paramter | meaning |
   | ---      | ----    |
   | x  | specifies the x coordinate of the top left corner of the text|
   | y  | specifes the y coordimaet of the top corner of the text |
   | txt  | specifies the content or the value of the text|
  
   :bulb: the text object shape (object return by the text function) has another method apart from the `draw()` method which is the        `toBox()` method and this method returns an object which contains the dimeensions of the object. that is:
   ``` javascript
   var canvas = canvas2d();
   var myText = text({x:10,y:20,txt:"Hello world"});
   console.log(myText.toBox());//outputs:{x: 10, y: -5, h: 30, w: 148.388671875}
   ```
   ## Image
   ### GENERAL SYNTAX
     ` img({x:x-coord,y:y-coord,src:path});`
   ### EXAMPLES  
   ``` javascript
   var canvas = canvas2d();
   var myImage = img({x:10,y:20,src:"logo.png"});
   myImage.draw();
   ```
   So here we use the function arc to initialize an object shape and return it to the variable myImage then call the buit-in method          `myImage.draw();` that all object shapes pocess to draw the text. So let's look at the syntax:
      
