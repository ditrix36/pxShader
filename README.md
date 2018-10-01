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
         <-- Here is where you place your code-->
         <script></script>
      </html>   
      
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
