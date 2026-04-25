
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { MultiGeographicMapBehavior } from "../../../../../org/allbinary/media/graphics/geography/map/MultiGeographicMapBehavior.js";

    
import { AllBinaryTiledLayer } from "../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { GravityUtil } from "../../../../../org/allbinary/game/physics/acceleration/GravityUtil.js";

    
import { VelocityProperties } from "../../../../../org/allbinary/game/physics/velocity/VelocityProperties.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellType } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { BasicTopViewGeographicMapCellTypeFactory } from "../../../../../org/allbinary/media/graphics/geography/map/topview/BasicTopViewGeographicMapCellTypeFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GeographicMapTopViewLayerBehavior } from "./GeographicMapTopViewLayerBehavior.js";

export class GeographicMapTopViewGameLayerBehavior1 extends GeographicMapTopViewLayerBehavior {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly gravityUtil: GravityUtil = GravityUtil.getInstance()!;
        
        

    private readonly geographicMapBehavior: MultiGeographicMapBehavior = new MultiGeographicMapBehavior();
        
        

    private readonly autoStepBlocks: boolean

    private readonly offsetY: number

    private previousGeographicMapCellPosition: GeographicMapCellPosition
public constructor (maxGravityActionIndex: number, autoStepBlocks: boolean, offsetY: number){
            super(maxGravityActionIndex);
                        //var maxGravityActionIndex = maxGravityActionIndex
    //var autoStepBlocks = autoStepBlocks
    //var offsetY = offsetY


                            //For kotlin this is before the body of the constructor.
                    
this.autoStepBlocks= autoStepBlocks;
    
this.offsetY= offsetY;
    
}


                //@Throws(Error::class)
            
    public gravity(velocityProperties: VelocityProperties, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition){
    //var velocityProperties = velocityProperties
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray
    //var geographicMapCellPosition = geographicMapCellPosition

                        if(geographicMapCellPosition != 
                                    null
                                )
                        
                                    {
                                    this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition);
    

    var hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;
        
        
;
    

                        if(!hasSolidBlock)
                        
                                    {
                                    this.gravityUtil!.process(velocityProperties);
    
velocityProperties!.limitXYToForwardAndReverseMaxVelocity();
    
this.gravity();
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
}


                //@Throws(Error::class)
            
    public getPosition(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer, x: number, y: number): GeographicMapCellPosition{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var layer = layer
    //var x = x
    //var y = y

    var xCellPosition: number = layer.getXP() + -x +layer.getWidth();
        
        
;
    

    var yCellPosition: number = layer.getYP() + -y +layer.getHeight();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Error::class)
            
    getLeftPosition(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer): GeographicMapCellPosition{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var layer = layer

    var xCellPosition: number = layer.getXP()!;
        
        
;
    

    var yCellPosition: number = layer.getYP() +layer.getHeight();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Error::class)
            
    getRightPosition(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer): GeographicMapCellPosition{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var layer = layer

    var xCellPosition: number = layer.getXP() +layer.getWidth();
        
        
;
    

    var yCellPosition: number = layer.getYP() +layer.getHeight();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Error::class)
            
    public getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number): GeographicMapCellPosition{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray
    //var velocityProperties = velocityProperties
    //var layer = layer
    //var x = x
var y = y

    var geographicMapCellPosition: GeographicMapCellPosition = this.getPosition(geographicMapInterfaceArray, layer, x, y)!;
        
        
;
    

                        if(this.previousGeographicMapCellPosition != geographicMapCellPosition && geographicMapCellPosition != 
                                    null
                                )
                        
                                    {
                                    
    var possibleStepGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPosition;
        
        
;
    

    var tiledLayer: AllBinaryTiledLayer = geographicMapInterfaceArray[0]!.getAllBinaryTiledLayer()!;
        
        
;
    

                        if(possibleStepGeographicMapCellPosition!.getColumn() > 0 && possibleStepGeographicMapCellPosition!.getRow() > 0 && possibleStepGeographicMapCellPosition!.getColumn() < tiledLayer!.getColumns() && possibleStepGeographicMapCellPosition!.getRow() < tiledLayer!.getRows())
                        
                                    {
                                    this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
    

    var hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;
        
        
;
    

                        if(hasSolidBlock)
                        
                                    {
                                    velocityProperties!.getVelocityXBasicDecimalP()!.set(0);
    
this.previousGeographicMapCellPosition= 
                                        null
                                    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                                    }
                                
                        else {
                            this.previousGeographicMapCellPosition= possibleStepGeographicMapCellPosition;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return possibleStepGeographicMapCellPosition;
    

                        }
                            

                                    }
                                

                                    }
                                
this.previousGeographicMapCellPosition= 
                                        null
                                    ;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public moveAndLand(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition, velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number){
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray
    //var geographicMapCellPosition = geographicMapCellPosition
    //var velocityProperties = velocityProperties
    //var layer = layer
    //var x = x
    //var y = y

                        if(geographicMapCellPosition != 
                                    null
                                )
                        
                                    {
                                    layer = layerlayer as TopViewCharacterInterface
layer.
                    terrainMove(geographicMapInterfaceArray, geographicMapCellTypeArray, x, y);
    

                                    }
                                
                        else {
                            
                        }
                            
}


                //@Throws(Error::class)
            
    public move(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number): boolean{
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray
    //var velocityProperties = velocityProperties
    //var layer = layer
    //var x = x
    //var y = y

    var geographicMapCellPosition: GeographicMapCellPosition = this.getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y)!;
        
        
;
    
this.moveAndLand(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition, velocityProperties, layer, x, y);
    

                        if(geographicMapCellPosition == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


                //@Throws(Error::class)
            
    public left(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer){
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray
    //var velocityProperties = velocityProperties
    //var layer = layer

    var geographicMapCellPosition: GeographicMapCellPosition = this.getLeftPosition(geographicMapInterfaceArray, layer)!;
        
        
;
    

                        if(geographicMapCellPosition != 
                                    null
                                )
                        
                                    {
                                    
    var possibleStepGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterfaceArray[0]!.getGeographicMapCellPositionFactory()!.getInstance(geographicMapCellPosition!.getColumn(), geographicMapCellPosition!.getRow() -1)!;
        
        
;
    
this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
    

    var hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;
        
        
;
    

                        if(hasSolidBlock)
                        
                                    {
                                    
                        if(this.autoStepBlocks)
                        
                                    {
                                    layer = layerlayer as TopViewCharacterInterface
layer.
                    leftp();
    

                                    }
                                
                        else {
                            velocityProperties!.getVelocityXBasicDecimalP()!.set(0);
    

                        }
                            

                                    }
                                
                        else {
                            layer = layerlayer as TopViewCharacterInterface
layer.
                    leftp();
    

                        }
                            

                                    }
                                
}


                //@Throws(Error::class)
            
    public right(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer){
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
    //var geographicMapCellTypeArray = geographicMapCellTypeArray
    //var velocityProperties = velocityProperties
    //var layer = layer

    var geographicMapCellPosition: GeographicMapCellPosition = this.getRightPosition(geographicMapInterfaceArray, layer)!;
        
        
;
    

                        if(geographicMapCellPosition != 
                                    null
                                )
                        
                                    {
                                    
    var possibleStepGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterfaceArray[0]!.getGeographicMapCellPositionFactory()!.getInstance(geographicMapCellPosition!.getColumn(), geographicMapCellPosition!.getRow() -1)!;
        
        
;
    
this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
    

    var hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;
        
        
;
    

                        if(hasSolidBlock)
                        
                                    {
                                    
                        if(this.autoStepBlocks)
                        
                                    {
                                    layer = layerlayer as TopViewCharacterInterface
layer.
                    rightp();
    

                                    }
                                
                        else {
                            velocityProperties!.getVelocityXBasicDecimalP()!.set(0);
    

                        }
                            

                                    }
                                
                        else {
                            layer = layerlayer as TopViewCharacterInterface
layer.
                    rightp();
    

                        }
                            

                                    }
                                
}


}
                
            

