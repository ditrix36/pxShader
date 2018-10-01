# pxShader
   ![image](pxShader.png)
## About
pxShader is a javascript library mearnt mainly for html5/canvas interactions. 

:bulb:This library is mainly object based.
:
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
      * [ Math Functions ](#Math Functions)
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
   ### Rectangle
   ``` javascript
   var canvas = canvas2d();
   var square = rec({x:10,y:20,w:20,h:20});
   square.draw();
   ```
   ### Circle
