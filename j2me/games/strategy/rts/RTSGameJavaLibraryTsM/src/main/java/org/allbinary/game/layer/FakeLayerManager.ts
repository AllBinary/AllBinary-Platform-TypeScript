
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2002 AllBinary 
                *   
                *  By agreeing to this license you and any business entity you represent are 
                *  legally bound to the AllBinary Open License Version 1 legal agreement. 
                *   
                *  You may obtain the AllBinary Open License Version 1 legal agreement from 
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository. 
                *    Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        



import { GameInfo } from "../../../../org/allbinary/game/GameInfo.js";

    
import { BasicColorFactory } from "../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellType } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapCompositeInterface } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    

export class FakeLayerManager extends AllBinaryGameLayerManager
                , GeographicMapCompositeInterface {
        

    private geographicMapInterfaceArray: BasicGeographicMap[] = BasicGeographicMap.NULL_BASIC_GEOGRAPHIC_MAP_ARRAY;
        
        

    private geographicMapCellTypeArray: GeographicMapCellType[] = GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE_ARRAY;
        
        
public constructor (gameInfo: GameInfo)                        

                            : super(BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE, gameInfo){

            super();
            var gameInfo = gameInfo


                            //For kotlin this is before the body of the constructor.
                    
}


    public getGeographicMapInterface(): BasicGeographicMap[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapInterfaceArray;
    
}


    public setGeographicMapInterface(geographicMapInterfaceArray: BasicGeographicMap[]){
    //var geographicMapInterfaceArray = geographicMapInterfaceArray
this.geographicMapInterfaceArray= geographicMapInterfaceArray
this.geographicMapCellTypeArray= new Array(this.geographicMapInterfaceArray!.length)
}


    public geographicMapCellTypeArray(): GeographicMapCellType[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.geographicMapCellTypeArray;
    
}


}
                
            

