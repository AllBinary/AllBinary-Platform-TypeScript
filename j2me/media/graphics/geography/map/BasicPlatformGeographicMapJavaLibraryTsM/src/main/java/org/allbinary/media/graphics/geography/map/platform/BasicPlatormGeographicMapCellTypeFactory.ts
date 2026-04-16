
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
        



import { Enumeration } from "../../../../../../../java/util/Enumeration.js";

    
import { Hashtable } from "../../../../../../../java/util/Hashtable.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    

export class BasicPlatormGeographicMapCellTypeFactory extends GeographicMapCellTypeFactory {
        

    public readonly BLOCK_CELL_TYPE: BasicPlatormGeographicMapCellType

    public readonly JUMP_THRU_CELL_TYPE: BasicPlatormGeographicMapCellType

    public readonly LADDER_CELL_TYPE: BasicPlatormGeographicMapCellType

    private readonly maxTileId: number
public constructor (tileTypeToTileIdsMap: Hashtable<any, any>, maxTileId: number){

            super();
                //var tileTypeToTileIdsMap = tileTypeToTileIdsMap
    //var maxTileId = maxTileId

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.INIT);
    
this.maxTileId= maxTileId;
    
new GeographicMapCellType(0);
    

    var BLOCK_CELL_TYPE: BasicPlatormGeographicMapCellType = new BasicPlatormGeographicMapCellType(1);
        
        
;
    

    var JUMP_THRU_CELL_TYPE: BasicPlatormGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var LADDER_CELL_TYPE: BasicPlatormGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var PLATFORM: string = "Platform";
        
        
;
    

    var JUMP_TRHU: string = "JumpThru";
        
        
;
    

    var LADDER: string = "Ladder";
        
        
;
    

    var enumeration: Enumeration<any?> = tileTypeToTileIdsMap!.keys()!;
        
        
;
    

    var idsWithTypeList: BasicArrayList
;
    

    var key: string
;
    

    var basicPlatormGeographicMapCellType: BasicPlatormGeographicMapCellType
;
    

        while(enumeration.hasMoreElements())
        {
key= enumeration.nextElement()!;

                         as String;
    
this.logUtil!.putF(key, this, commonStrings!.INIT);
    
idsWithTypeList= tileTypeToTileIdsMap!.get(key);

                         as BasicArrayList;
    
basicPlatormGeographicMapCellType= new BasicPlatormGeographicMapCellType(idsWithTypeList);
    

                        if(key.equals(PLATFORM))
                        
                                    {
                                    BLOCK_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                

                        if(key.equals(JUMP_TRHU))
                        
                                    {
                                    JUMP_THRU_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                

                        if(key.equals(LADDER))
                        
                                    {
                                    LADDER_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                
}

this.BLOCK_CELL_TYPE= BLOCK_CELL_TYPE;
    
this.JUMP_THRU_CELL_TYPE= JUMP_THRU_CELL_TYPE;
    
this.LADDER_CELL_TYPE= LADDER_CELL_TYPE;
    
new GeographicMapCellType(this.maxTileId -1);
    
new GeographicMapCellType(this.maxTileId -2);
    
}


    public getStartType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxTileId -1;
    
}


    public getEndType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxTileId -2;
    
}


    public getEmptyType(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    
}


    public isPath(cellType: GeographicMapCellType): boolean{
    //var cellType = cellType

                        if(cellType!.getType() == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

