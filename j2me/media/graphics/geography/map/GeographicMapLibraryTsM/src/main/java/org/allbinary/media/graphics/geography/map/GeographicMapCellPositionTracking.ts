
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
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
        



import { AllBinaryGameCanvas } from "../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js";

    
import { AllBinaryGameCanvasInterface } from "../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvasInterface.js";

    
import { AllBinaryLayer } from "../../../../../../org/allbinary/layer/AllBinaryLayer.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { SimpleGeographicMapCellPositionFactory } from "./SimpleGeographicMapCellPositionFactory.js";

import { GeographicMapCellType } from "./GeographicMapCellType.js";

import { BasicGeographicMap } from "./BasicGeographicMap.js";

import { GeographicMapCellPosition } from "./GeographicMapCellPosition.js";

export class GeographicMapCellPositionTracking
            extends Object
         {
        

    private currentGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private previousGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private newGeographicMapCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private currentCellType: GeographicMapCellType = GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE;
        
        
public constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getCurrentOverCellType(geographicMap: BasicGeographicMap): GeographicMapCellType{
    //var geographicMap = geographicMap

    var geographicMapCellPosition: GeographicMapCellPosition = this.currentGeographicMapCellPosition;
        
        
;
    

                        if(geographicMapCellPosition != this.previousGeographicMapCellPosition)
                        
                                    {
                                    this.currentCellType= geographicMap!.getCellTypeAt(geographicMapCellPosition);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentCellType;
    
}


                //@Throws(Error::class)
            
    public updateStart(gameCanvasInterface: AllBinaryGameCanvasInterface, layer: AllBinaryLayer): boolean{
    //var gameCanvasInterface = gameCanvasInterface
    //var layer = layer

                        if(gameCanvasInterface != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    var geographicMapCompositeInterface: GeographicMapCompositeInterface = gameCanvasInterface!.getLayerManager();

                         as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    
this.newGeographicMapCellPosition= geographicMapInterface!.getCellPositionAt(layer.getXP() +layer.getHalfWidth(), layer.getYP() +layer.getHalfHeight());
    

                        if(this.newGeographicMapCellPosition != this.currentGeographicMapCellPosition)
                        
                                    {
                                    this.currentGeographicMapCellPosition= this.newGeographicMapCellPosition;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public updateEnd(): boolean{

                        if(this.currentGeographicMapCellPosition != this.previousGeographicMapCellPosition)
                        
                                    {
                                    this.previousGeographicMapCellPosition= this.currentGeographicMapCellPosition;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public getPreviousGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return previousGeographicMapCellPosition;
    
}


    public getCurrentGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentGeographicMapCellPosition;
    
}


}
                
            

