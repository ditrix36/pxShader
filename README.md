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
     * [ objectArray ](#objectarray)
     * [ path objects ](#path)
* __More Drawing Parameters__
     * [ COLORS ](#colors)
     * [ Stroke ](#stroke)
* [__Global Variables__](#globals)
* [__More Functions__](#functions)
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
  So basically when most of the shapes in pxShader you are likely to use a coordinate to sepcify where in the canvas you want your shape   to be drawn else it is not drawn or you well *sweet error* . So how do we specify those coordinates for an object we are drawing?
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
    #### OUTPUT
     ![ grid image ](grid.PNG)
     
     :bulb: Any  point on that grid corresponds to that point multiplied by the interval of the grid so the point (2,5) will be (50,125)       when drawing your shape 
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
   So here we use the function arc to initialize an object shape and return it to the variable circle then call the buit-in method          `circle.draw();` that all object shapes pocess to draw the circle. So let's look at the general syntax:
   
   | paramter | meaning |
   | ---      | ----    |
   | x  | specifies the x coordinate of the center of the arc/circle|
   | y  | specifes the y coordimaet of the center of the arc/circle |
   | r  | specifies the raduis of the arc/circle|
   |deg | `optinal`: Specifies the number of degrees in the arc/circle in radians, `default:2*PI`|
   :bulb: Setting the deg parameter only to PI will only draw half a circle.
 ## Text
   ### GENERAL SYNTAX
   `text({x:x-coord,y:y-coord,txt:text-content});`
   ### EXAMPLE  
   ``` javascript
   var canvas = canvas2d();
   var myText = text({x:10,y:20,text:"Hello world"});
   myText.draw();
   ```
   So here we use the function text to initialize an object shape and return it to the variable myText then call the buit-in method          `myText.draw();` that all object shapes pocess to draw the text. So let's look at the general syntax:
   
   | paramter | meaning |
   | ---      | ----    |
   | x  | specifies the x coordinate of the top left corner of the text|
   | y  | specifes the y coordimaet of the top corner of the text |
   | txt  | specifies the content or the value of the text|
  
   :bulb: the text object shape (object return by the text function) has another method apart from the `draw()` method which is the        `toBox()` method and this method returns an object which contains the dimensions of the object. that is:
   ``` javascript
   var canvas = canvas2d();
   var myText = text({x:10,y:20,txt:"Hello world"});
   console.log(myText.toBox());//outputs:{x: 10, y: -5, h: 30, w: 148.388671875}
   ```
   ## Image
   ### GENERAL SYNTAX
     ` img({x:x-coord,y:y-coord,src:path,h:height,w:width});`
   ### EXAMPLE  
   ``` javascript
   var canvas = canvas2d();
   var myImage = img({x:10,y:20,src:"logo.png"});
   myImage.draw();
   ```
   So here we use the function arc to initialize an object shape and return it to the variable myImage then call the buit-in method          `myImage.draw();` that all object shapes pocess to draw the image. So let's look at the general syntax:
   
   | paramter | meaning |
   | ---      | ----    |
   | x  | specifies the x coordinate of the top left corner of the image|
   | y  | specifes the y coordimaet of the top corner of the image |
   | src  | specifies the url/path to the image file want to draw|
   | h | `optional`:specifies the height of the image in the canvas ,`default`:The height of the loaded image |
   | w | `optional`:specifies the width of the image in th canvas, `default`:The width of the loaded image|
   ## Line
   ### GENERAL SYNTAX
   `line({from:[x1,y1],to:[x2,y2],w:width});`
   ### EXAMPLE     
   ``` javascript
      var canvas = canvas2d();
      var myline = line({from:[10,20],to:[400,300],w:width});;
      myLine.draw();
  ```
   | paramter | meaning |
   | ---      | ----    |
   | from  | specifies the array x and y coordinate of begining of the line `ex`:`from:[x,y]`|
   | to  | specifies the array x and y coordinate of end of the line `ex`:`to:[x,y]` |
   | w | specifies the width of the line|   
## objectArray
   So we are actually moving into a more complex shape here remember that we've seen the basics of drawing shape well the objectArray is 
   a complex object shape formed from the variety of other simple shapes seen above. An objectArray is a cluster of basic shapes this is    a really intersting concepts since it allows a variety of possibilities like drawing a car from 2 rectangles and a two circles. 
   ### GENERAL SYNTAX
      ` objArray(array);`
   ### EXAMPLE
   ``` javascript
         canvas2d();// actually this function don't need to be assigned to a variable as far as it is called
        var r1 = rec({x: 10, y: 540, w: 200, h: 40});
        var r2 = rec({x: 75, y: 510, w: 60, h: 30});
        var c1 = arc({x: 35, y: 585, r: 15});
        var c2 = arc({x: 175, y: 585, r: 15});
        var car = objArray([r1, r2, c1, c2]);
        car.draw()
   ```
  So as you can see we created two circles/arcs c1 and c2 and two rectangles r1 and  r2 which we used to create an object array in the     form of a car. So we gave all the initialized objects into `objArray()` function to create a new objectArray which is returned into     the variable car.Then we call the method present in all object Shapes which is the `draw()` method. So let's analyse the genera syntax
  
   | paramter | meaning |
   | ---      | ----    |
   | array    | Specifies an array of all the objects that make up the object array| 
   
   :bulb: objectArrays are one of the expections to the *specify coordinate rule* since it turns out they don't need any thing to          specify thier coordinates. It Intializes using the coordinates of all elements contituiting it (You will better understand as we get    to animations).
 ## Path
   ### GENERAL SYNTAX
   
   
   ### EXAMPLE
   
   
   ## COLORS
   for those who may already know colors are the main elements when creating drawing , games and any design scene thus important. And      since the begening of this, we've been just talking about boring stuffs and if you tried any of the codes in this tutorial you must      have realized that actually all the objects we created where in white. But from now this will change because now we are introducting
   colors :smile::tulip::dolphin: so all the basic shapes we've see from now can have thier color changed by adding an attribute color 
   to thier paramter object. that is,
   ``` javascript
        canvas2d();
        l1 =line({from:[12,30],to:[125,60],color:"red"});
        l1.draw();
   ```
   If you can recall this is the syntax we used to initialize a line object expect that in the object we are a new attribute on to the      object parameter which is simply red. So here we have now specified a color on the object which is red so you go on and do same with    other examples we've covered go on and color those shapes.
   So if you are done whith this coloring, we can actually continue.So we can color those shapes as we want with basic css                  colors("red","violet","blue","green") but pxShader has a more diverse variety of colors. It has an object called `COLORS` in which      you can find values of more that __130__ colors. so let's go on and actually use one of these in the next code.
   ``` javascript
        canvas2d();
        rec({x:300,y:200,w:30,h:50,color:COLORS.CORAL});
        arc({x:300,y:400,r:30,color:COLORS.AQUA});
        draw();
   ```
   so there will be a variety of colors in the COLORS object a if you look at the file colors.html in the repo you can actually see        all the colors in the COLORS object.
   :bulb: the colors can be replaced with numbers from __0__ to __139__ so these values corresponds to the range of colors in the          COLORS object and for each number in that range there will be a corresponding color.
   ## Stroke   
   The  Stroke parameter is very similar that of the color parameter in that it helps to bring more life and beautify the objects which    are drawn.
   Let's look at this example where it is combined with color attribute to give more life to our car from the objectArray section.
   ``` javascript
      canvas2d();
      var r1 = rec({x: 10, y: 540, w: 200, h: 40,color:COLORS.LIGHTCORAL});
      var r2 = rec({x: 75, y: 510, w: 60, h: 30,color:COLORS.LIGHTBLUE,stroke:{color:COLORS.LIGHTCORAL,width:7,coop:true}});
      var c1 = arc({x: 35, y: 585, r: 15,color:COLORS.WHITE,stroke:{color:COLORS.BLACK,width:10,coop:true}});
      var c2 = arc({x: 175, y: 585, r: 15,color:COLORS.WHITE,stroke:{color:COLORS.BLACK,width:10,coop:true}});
      var car = objArray([r1, r2, c1, c2]);
      car.draw();
   ```
   So as you can see the stroke paramter makes things look weird without necessary them being. the stroke is an object that specifies      the border of our shapes. So it's value is an object of atleast 1 attribute and atmost 4 attributes.
   so let's look at the general format for our stroke object.
   `{color:String,width:real,coop:boolean,cap:string}`
   
   | attribute | Meaning |
   | ---       | ---     |
   |color| `optional`:specifies the value of color of the border (Can take the same values as the color parameter),`default`:"black"|
   | width     |`optional`:Specifies the width of the border ,`default`:"1px"|
   |coop       |`optional`:Specifies whether the color attribute is to be used in same time width the stroke attribute,`default`:false|
   | cap       |`optional`:specifies the shape of the edge of the border in a non closed shape(line,semi-circle) `values`:"butt\|round\|square",`default`: "butt"|
   
:bulb: If the coop attribute of the stroke is not set or set to false the color attribute is eliminated when drawing the shape
 ## Globals
 ## functions
| function | parameters | meaning | example |
| ---      | ----       | --------|-------- | 
|Background|(#background)|        |         |
| Clear    |(#clear)    |        |       |
| Translate|(#translate)|     |
| Transparency|(#transparency)|        |
| Rotate|(#rotate)|            |             |
| Scale|(#scale)|          |                |
| Save|(#save)|                  |         |
| Restore|(#restore)|             |            |
| Math Functions |(#Math)|              |      |
| EraseShape|(#eraseShape)|             |        |
| CopyObj() |#copyoObj)|                |       |
| Dist() |#dist)|                       |        |
| toPoints() |toPoints)             |           |
 ## Functions
