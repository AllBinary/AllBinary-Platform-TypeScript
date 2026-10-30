
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { MultiGeographicMapBehavior } from '../../../../../org/allbinary/media/graphics/geography/map/MultiGeographicMapBehavior.js';
//not GWT import const MultiGeographicMapBehavior

import { AllBinaryTiledLayer } from '../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
//not GWT import const AllBinaryTiledLayer

import { GravityUtil } from '../../../../../org/allbinary/game/physics/acceleration/GravityUtil.js';
//not GWT import const GravityUtil

import { VelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
//not GWT import const VelocityProperties

import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { GeographicMapCellType } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType

import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapTopViewLayerBehavior } from './GeographicMapTopViewLayerBehavior.js';
//not GWT import - same folder const GeographicMapTopViewLayerBehavior
import { TopViewCharacterInterface } from './TopViewCharacterInterface.js';
//not GWT import - same folder const TopViewCharacterInterface

export class GeographicMapTopViewGameLayerBehavior2 extends GeographicMapTopViewLayerBehavior {
        

    private readonly gravityUtil: GravityUtil = GravityUtil.getInstance()!;

    private readonly geographicMapBehavior: MultiGeographicMapBehavior = new MultiGeographicMapBehavior();

    private readonly autoStepBlocks: boolean;

    private readonly offsetY: number;

    private previousGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;

public constructor (maxGravityActionIndex: number, autoStepBlocks: boolean, offsetY: number){
            super(maxGravityActionIndex);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.autoStepBlocks= autoStepBlocks;
    
this.offsetY= offsetY;
    
}


                //@Throws(Exception.constructor)
            
    public gravity(velocityProperties: VelocityProperties, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition){

                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition);
    

    let hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;;
    

                        if(!hasSolidBlock)
                        
                                    {
                                    this.gravityUtil!.process(velocityProperties, this.gravityUtil!.GAME_GRAVITY_VELOCITY);
    
velocityProperties!.limitXYToForwardAndReverseMaxVelocity();
    
this.gravity();
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    getPositionTopLeft(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer, x: number, y: number): GeographicMapCellPosition{

    let xCellPosition: number = layer.getXP() + -x;;
    

    let yCellPosition: number = layer.getYP() + -y;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Exception.constructor)
            
    getPositionTopRight(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer, x: number, y: number): GeographicMapCellPosition{

    let xCellPosition: number = layer.getXP() + -x +layer.getWidth();;
    

    let yCellPosition: number = layer.getYP() + -y;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Exception.constructor)
            
    getPositionBottomLeft(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer, x: number, y: number): GeographicMapCellPosition{

    let xCellPosition: number = layer.getXP() + -x;;
    

    let yCellPosition: number = layer.getYP() + -y +layer.getHeight();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Exception.constructor)
            
    getPositionBottomRight(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer, x: number, y: number): GeographicMapCellPosition{

    let xCellPosition: number = layer.getXP() + -x +layer.getWidth();;
    

    let yCellPosition: number = layer.getYP() + -y +layer.getHeight();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Exception.constructor)
            
    getLeftPosition(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer): GeographicMapCellPosition{

    let xCellPosition: number = layer.getXP()!;;
    

    let yCellPosition: number = layer.getYP() +layer.getHeight();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Exception.constructor)
            
    getRightPosition(geographicMapInterfaceArray: BasicGeographicMap[], layer: AllBinaryLayer): GeographicMapCellPosition{

    let xCellPosition: number = layer.getXP() +layer.getWidth();;
    

    let yCellPosition: number = layer.getYP() +layer.getHeight();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray[0]!.getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);;
    
}


                //@Throws(Exception.constructor)
            
    public getGeographicMapCellPositionIfNotSolidBlockOrOffMapLocation(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number): GeographicMapCellPosition{

    let geographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;;
    

    let topLeftGeographicMapCellPosition: GeographicMapCellPosition = this.getPositionTopLeft(geographicMapInterfaceArray, layer, x, y)!;;
    
geographicMapCellPosition= this.getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray, topLeftGeographicMapCellPosition, velocityProperties, layer);
    

                        if(geographicMapCellPosition == SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                                    }
                                

    let topRightGeographicMapCellPosition: GeographicMapCellPosition = this.getPositionTopRight(geographicMapInterfaceArray, layer, x, y)!;;
    
geographicMapCellPosition= this.getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray, topRightGeographicMapCellPosition, velocityProperties, layer);
    

                        if(geographicMapCellPosition == SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                                    }
                                

    let bottomLeftGeographicMapCellPosition: GeographicMapCellPosition = this.getPositionBottomLeft(geographicMapInterfaceArray, layer, x, y)!;;
    
geographicMapCellPosition= this.getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray, bottomLeftGeographicMapCellPosition, velocityProperties, layer);
    

                        if(geographicMapCellPosition == SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                                    }
                                

    let bottomRightGeographicMapCellPosition: GeographicMapCellPosition = this.getPositionBottomRight(geographicMapInterfaceArray, layer, x, y)!;;
    
geographicMapCellPosition= this.getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray, bottomRightGeographicMapCellPosition, velocityProperties, layer);
    

                        if(geographicMapCellPosition == SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
                                    }
                                
                        else {
                            
                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPosition;
    
}


                //@Throws(Exception.constructor)
            
    public getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition, velocityProperties: VelocityProperties, layer: AllBinaryLayer): GeographicMapCellPosition{

                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    let possibleStepGeographicMapCellPosition: GeographicMapCellPosition = geographicMapCellPosition;;
    

    let tiledLayer: AllBinaryTiledLayer = geographicMapInterfaceArray[0]!.getAllBinaryTiledLayer()!;;
    

                        if(possibleStepGeographicMapCellPosition!.getColumn() > 0 && possibleStepGeographicMapCellPosition!.getRow() > 0 && possibleStepGeographicMapCellPosition!.getColumn() < tiledLayer!.getColumns() && possibleStepGeographicMapCellPosition!.getRow() < tiledLayer!.getRows())
                        
                                    {
                                    this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
    

    let hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;;
    

    let hasOffMap: boolean = this.isOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray)!;;
    

                        if(hasSolidBlock || hasOffMap)
                        
                                    {
                                    this.previousGeographicMapCellPosition= SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    

                                    }
                                
                        else {
                            this.previousGeographicMapCellPosition= possibleStepGeographicMapCellPosition;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return possibleStepGeographicMapCellPosition;
    

                        }
                            

                                    }
                                

                                    }
                                
                        else {
                            
                        }
                            
this.previousGeographicMapCellPosition= SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    
}


                //@Throws(Exception.constructor)
            
    public moveAndLand(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition, velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number){

                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    let topViewCharacterInterface: TopViewCharacterInterface = (layer as TopViewCharacterInterface);;
    
topViewCharacterInterface!.terrainMove(geographicMapInterfaceArray, geographicMapCellTypeArray, x, y);
    

                                    }
                                
                        else {
                            
                        }
                            
}


                //@Throws(Exception.constructor)
            
    public move(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number): boolean{

    let geographicMapCellPosition: GeographicMapCellPosition = this.getGeographicMapCellPositionIfNotSolidBlockOrOffMapLocation(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y)!;;
    
this.moveAndLand(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition, velocityProperties, layer, x, y);
    

                        if(geographicMapCellPosition == SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public left(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer){

    let geographicMapCellPosition: GeographicMapCellPosition = this.getLeftPosition(geographicMapInterfaceArray, layer)!;;
    

                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    let possibleStepGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterfaceArray[0]!.getGeographicMapCellPositionFactory()!.getAt(geographicMapCellPosition!.getColumn(), geographicMapCellPosition!.getRow() -1)!;;
    
this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
    

    let hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;;
    

                        if(hasSolidBlock)
                        
                                    {
                                    
                        if(this.autoStepBlocks)
                        
                                    {
                                    
    let topViewCharacterInterface: TopViewCharacterInterface = (layer as TopViewCharacterInterface);;
    
topViewCharacterInterface!.leftp();
    

                                    }
                                
                        else {
                            velocityProperties!.getVelocityXBasicDecimalP()!.setint(0);
    

                        }
                            

                                    }
                                
                        else {
                            
    let topViewCharacterInterface: TopViewCharacterInterface = (layer as TopViewCharacterInterface);;
    
topViewCharacterInterface!.leftp();
    

                        }
                            

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public right(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer){

    let geographicMapCellPosition: GeographicMapCellPosition = this.getRightPosition(geographicMapInterfaceArray, layer)!;;
    

                        if(geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    let possibleStepGeographicMapCellPosition: GeographicMapCellPosition = geographicMapInterfaceArray[0]!.getGeographicMapCellPositionFactory()!.getAt(geographicMapCellPosition!.getColumn(), geographicMapCellPosition!.getRow() -1)!;;
    
this.geographicMapBehavior!.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
    

    let hasSolidBlock: boolean = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray)!;;
    

                        if(hasSolidBlock)
                        
                                    {
                                    
                        if(this.autoStepBlocks)
                        
                                    {
                                    
    let topViewCharacterInterface: TopViewCharacterInterface = (layer as TopViewCharacterInterface);;
    
topViewCharacterInterface!.rightp();
    

                                    }
                                
                        else {
                            velocityProperties!.getVelocityXBasicDecimalP()!.setint(0);
    

                        }
                            

                                    }
                                
                        else {
                            
    let topViewCharacterInterface: TopViewCharacterInterface = (layer as TopViewCharacterInterface);;
    
topViewCharacterInterface!.rightp();
    

                        }
                            

                                    }
                                
}


}

