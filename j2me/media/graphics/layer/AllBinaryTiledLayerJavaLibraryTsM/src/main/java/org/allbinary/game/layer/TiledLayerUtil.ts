
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *   
                *  Created By: Travis Berthelot    
        */
        
        /* Generated Code Do Not Modify */
        



import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { AllBinaryTiledLayer } from "./AllBinaryTiledLayer.js";

export class TiledLayerUtil
            extends Object
         {
        

    private static readonly instance: TiledLayerUtil = new TiledLayerUtil();
        
        

    public static getInstance(): TiledLayerUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public keepOnMapX(terrainTiledLayer: AllBinaryTiledLayer, x: number, width: number, mapBorderBufferWidth: number): number{
var terrainTiledLayer = terrainTiledLayer
var x = x
var width = width
var mapBorderBufferWidth = mapBorderBufferWidth

    var newX: number = x;
        
        
;
    

    var maxRight: number = terrainTiledLayer!.getWidth() -width -mapBorderBufferWidth;
        
        
;
    

                        if(x +width > maxRight)
                        
                                    {
                                    newX= maxRight;
    

                                    }
                                

                        if(x < mapBorderBufferWidth)
                        
                                    {
                                    newX= mapBorderBufferWidth;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newX;
    
}


    public keepOnMapY(terrainTiledLayer: AllBinaryTiledLayer, y: number, height: number, mapBorderBufferHeight: number): number{
var terrainTiledLayer = terrainTiledLayer
var y = y
var height = height
var mapBorderBufferHeight = mapBorderBufferHeight

    var newY: number = y;
        
        
;
    

    var maxBottom: number = terrainTiledLayer!.getHeight() -height -mapBorderBufferHeight;
        
        
;
    

                        if(y +height > maxBottom)
                        
                                    {
                                    newY= maxBottom;
    

                                    }
                                

                        if(y < mapBorderBufferHeight)
                        
                                    {
                                    newY= mapBorderBufferHeight;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newY;
    
}


    public keepOnMapX(terrainTiledLayer: AllBinaryTiledLayer, x: number, width: number): number{
var terrainTiledLayer = terrainTiledLayer
var x = x
var width = width

    var newX: number = x;
        
        
;
    

    var maxRight: number = terrainTiledLayer!.getWidth() -width;
        
        
;
    

                        if(x >= maxRight)
                        
                                    {
                                    newX= maxRight;
    

                                    }
                                

                        if(x < 0)
                        
                                    {
                                    newX= 0;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newX;
    
}


    public keepOnMapY(terrainTiledLayer: AllBinaryTiledLayer, y: number, height: number): number{
var terrainTiledLayer = terrainTiledLayer
var y = y
var height = height

    var newY: number = y;
        
        
;
    

    var maxBottom: number = terrainTiledLayer!.getHeight() -height;
        
        
;
    

                        if(y >= maxBottom)
                        
                                    {
                                    newY= maxBottom;
    

                                    }
                                

                        if(y < 0)
                        
                                    {
                                    newY= 0;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newY;
    
}


}
                
            

