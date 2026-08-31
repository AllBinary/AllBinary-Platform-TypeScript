
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { AllBinaryGameCanvasInterface } from '../../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvasInterface.js';
      //not GWT import const AllBinaryGameCanvasInterface = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvasInterface;

      
import { AllBinaryLayer } from '../../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SimpleGeographicMapCellPositionFactory } from './SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

                import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

                import { GeographicMapCellType } from './GeographicMapCellType.js';
//not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

                import { BasicGeographicMap } from './BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

                import { GeographicMapCompositeInterface } from './GeographicMapCompositeInterface.js';
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

                
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


                //@Throws(Exception.constructor)
            
    public getCurrentOverCellType(geographicMap: BasicGeographicMap): GeographicMapCellType{

    var geographicMapCellPosition: GeographicMapCellPosition = this.currentGeographicMapCellPosition;;
    

                        if(geographicMapCellPosition != this.previousGeographicMapCellPosition)
                        
                                    {
                                    this.currentCellType= geographicMap!.getCellTypeAt(geographicMapCellPosition);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentCellType;
    
}


                //@Throws(Exception.constructor)
            
    public updateStart(gameCanvasInterface: AllBinaryGameCanvasInterface, layer: AllBinaryLayer): boolean{

                        if(gameCanvasInterface != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION)
                        
                                    {
                                    
    var geographicMapCompositeInterface: GeographicMapCompositeInterface = gameCanvasInterface!.getLayerManager() as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    
this.newGeographicMapCellPosition= geographicMapInterface!.getCellPositionAtXY(layer.getXP() +layer.getHalfWidth(), layer.getYP() +layer.getHalfHeight());
    

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
                        return this.previousGeographicMapCellPosition;
    
}


    public getCurrentGeographicMapCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentGeographicMapCellPosition;
    
}


}



