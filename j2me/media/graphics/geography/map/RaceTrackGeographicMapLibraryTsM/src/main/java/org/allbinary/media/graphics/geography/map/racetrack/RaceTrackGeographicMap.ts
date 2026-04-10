
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
        



import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { GeographicMapCellPosition } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { GeographicMapCellPositionBaseFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionBaseFactory.js";

    
import { GeographicMapCellPositionFactoryInterface } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    

export class RaceTrackGeographicMap extends BaseRaceTrackGeographicMap {
        

    private readonly customMapGenerator: CustomMapGeneratorBase
public constructor (raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData, tiledLayerFactoryInterface: AllBinaryTiledLayerFactoryInterface, geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory: GeographicMapCellPositionBaseFactory, geographicMapCellTypeFactory: GeographicMapCellTypeFactory, customMapGeneratorBaseFactory: CustomMapGeneratorBaseFactory)                        

                            : super(raceTrackInfo, raceTrackData, tiledLayerFactoryInterface!.getInstance(raceTrackInfo, raceTrackData), BasicGeographicMapFactory().
                            getInstance(raceTrackInfo, raceTrackData, tiledLayerFactoryInterface, geographicMapCellPositionFactoryInterface, geographicMapCellTypeFactory), geographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory, geographicMapCellTypeFactory){

            super();
                //var raceTrackInfo = raceTrackInfo
    //var raceTrackData = raceTrackData
    //var tiledLayerFactoryInterface = tiledLayerFactoryInterface
    //var geographicMapCellPositionFactoryInterface = geographicMapCellPositionFactoryInterface
    //var geographicMapCellPositionBaseFactory = geographicMapCellPositionBaseFactory
    //var geographicMapCellTypeFactory = geographicMapCellTypeFactory
    //var customMapGeneratorBaseFactory = customMapGeneratorBaseFactory


                            //For kotlin this is before the body of the constructor.
                    
this.customMapGenerator= customMapGeneratorBaseFactory!.getInstance(this)
}

public constructor (raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData, tiledLayerFactoryInterface: AllBinaryTiledLayerFactoryInterface, geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface, geographicMapCellTypeFactory: GeographicMapCellTypeFactory, customMapGeneratorBaseFactory: CustomMapGeneratorBaseFactory)                        

                            : this(raceTrackInfo, raceTrackData, tiledLayerFactoryInterface, geographicMapCellPositionFactoryInterface, GeographicMapCellPositionBaseFactory(), geographicMapCellTypeFactory, customMapGeneratorBaseFactory){

            super();
                //var raceTrackInfo = raceTrackInfo
    //var raceTrackData = raceTrackData
    //var tiledLayerFactoryInterface = tiledLayerFactoryInterface
    //var geographicMapCellPositionFactoryInterface = geographicMapCellPositionFactoryInterface
    //var geographicMapCellTypeFactory = geographicMapCellTypeFactory
    //var customMapGeneratorBaseFactory = customMapGeneratorBaseFactory


                            //For kotlin this is before the body of the constructor.
                    
}


    public getCustomMapGenerator(): CustomMapGeneratorBase{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return customMapGenerator;
    
}


                @Throws(Exception::class)
            
    public isValid(geographicMapCellPosition: GeographicMapCellPosition): boolean{
    //var geographicMapCellPosition = geographicMapCellPosition

    var customMapArray: IntArray[] = this.customMapGenerator!.getCustomMapArray()!;
        
        


    
                        if(geographicMapCellPosition!.getColumn() >= customMapArray[0]!.length)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Column: ")
appendint(geographicMapCellPosition!.getColumn())
append(" not in: ")
appendint(customMapArray[0]!.length)
put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

    
                        if(geographicMapCellPosition!.getColumn() == customMapArray[0]!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                
                             else 
    
                        if(geographicMapCellPosition!.getRow() > customMapArray!.length)
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Row: ")
appendint(geographicMapCellPosition!.getRow())
append(" not in: ")
appendint(customMapArray!.length)
put(stringBuffer!.toString(), this, commonStrings!.IS_VALID)

    
                        if(geographicMapCellPosition!.getRow() == customMapArray!.length)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

