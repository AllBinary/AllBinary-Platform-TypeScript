
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
        
import { VelocityProperties } from '../../../../../org/allbinary/game/physics/velocity/VelocityProperties.js';
      //not GWT import const VelocityProperties = globalThis.org.allbinary.game.physics.velocity.VelocityProperties;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
      //not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      //not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
import { GeographicMapCellType } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
      //not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;

      
import { BasicTopViewGeographicMapCellTypeFactory } from '../../../../../org/allbinary/media/graphics/geography/map/topview/BasicTopViewGeographicMapCellTypeFactory.js';
      //not GWT import const BasicTopViewGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.topview.BasicTopViewGeographicMapCellTypeFactory;

      
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TopViewGameLayerBehavior } from './TopViewGameLayerBehavior.js';
//not GWT import const  = globalThis.org.allbinary.game.behavior.topview.TopViewGameLayerBehavior;

                
export class GeographicMapTopViewLayerBehavior extends TopViewGameLayerBehavior {
        

public constructor (maxGravityActionIndex: number){
            super(maxGravityActionIndex);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


                //@Throws(Exception.constructor)
            
    public getGeographicMapCellPositionIfNotSolidBlockOrOffMapLocation(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition, velocityProperties: VelocityProperties, layer: AllBinaryLayer): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public getGeographicMapCellPositionFromListIfNotSolidBlockOrOffMap(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPositionList: BasicArrayList, velocityProperties: VelocityProperties, layer: AllBinaryLayer): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public gravity(velocityProperties: VelocityProperties, geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition){
}


                //@Throws(Exception.constructor)
            
    public left(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer){
}


                //@Throws(Exception.constructor)
            
    public move(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Exception.constructor)
            
    public moveAndLand(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], geographicMapCellPosition: GeographicMapCellPosition, velocityProperties: VelocityProperties, layer: AllBinaryLayer, x: number, y: number){
}


                //@Throws(Exception.constructor)
            
    public right(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[], velocityProperties: VelocityProperties, layer: AllBinaryLayer){
}


    public hasSolidBlock(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[]): boolean{

    var size: number = geographicMapInterfaceArray!.length
                ;;
    

    var basicTopViewGeographicMapCellTypeFactory: BasicTopViewGeographicMapCellTypeFactory;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
basicTopViewGeographicMapCellTypeFactory= geographicMapInterfaceArray[index]!.getGeographicMapCellTypeFactory() as BasicTopViewGeographicMapCellTypeFactory;
    

                        if(basicTopViewGeographicMapCellTypeFactory!.BLOCK_CELL_TYPE.isType(geographicMapCellTypeArray[index]!))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public isOffMap(geographicMapInterfaceArray: BasicGeographicMap[], geographicMapCellTypeArray: GeographicMapCellType[]): boolean{

    var size: number = geographicMapInterfaceArray!.length
                ;;
    

    var basicTopViewGeographicMapCellTypeFactory: BasicTopViewGeographicMapCellTypeFactory;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
basicTopViewGeographicMapCellTypeFactory= geographicMapInterfaceArray[index]!.getGeographicMapCellTypeFactory() as BasicTopViewGeographicMapCellTypeFactory;
    

                        if(basicTopViewGeographicMapCellTypeFactory!.OFF_MAP_CELL_TYPE.isType(geographicMapCellTypeArray[index]!))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



