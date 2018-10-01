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
     * [ Drawing an Line ](#line)
     * [Drawing an image ](#image)
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
     * [ CDSys ](#CDsys)
     * [ sounds ](#sounds)
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
  so this is basically the basic syntax for using the library you can't draw any with calling the __canvas2d()__ funtion or you are bound to get and error so let's look at the function and it's parameters.
  so this is the general syntax for this __canvas2d(width,height,responsive?,centered?)__
  
  | paramters | Meaning |
  | --- | --- |
  | width |`optional`:Specifies the width of the drawing element,`default`:600px|
  | height|`optional`:Specifies the height of the drawing element,`default`:600px|
  | responsive? | `optional`:Tells whether the drawing element is media responsive or not (adapts it's size to screen size) `default`: false|
  | centered? | `optional`: Tells whether the drawing elemet is centered or not `default`: false|
  
   ## Rectangle
     ### GENERIC SYNTAX
     the syntax for
     ### EXAMPLE 
   ``` javascript
   var canvas = canvas2d();
   var square = rec({x:10,y:20,w:20,h:20});
   square.draw();
   ```
   ### Circle
