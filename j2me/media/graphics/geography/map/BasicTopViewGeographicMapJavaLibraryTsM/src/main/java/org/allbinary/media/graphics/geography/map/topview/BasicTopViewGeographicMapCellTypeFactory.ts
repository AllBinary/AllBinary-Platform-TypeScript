
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
        



import { Hashtable } from "../../../../../../../java/util/Hashtable.js";

    
import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { GeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    
import { RaceTrackGeographicMapCellType } from "../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { HashtableUtil } from "../../../../../../../org/allbinary/util/HashtableUtil.js";

    

import { BasicTopViewGeographicMapStrings } from "./BasicTopViewGeographicMapStrings.js";

import { BasicTopViewGeographicMapStrings } from "./BasicTopViewGeographicMapStrings.js";

export class BasicTopViewGeographicMapCellTypeFactory extends GeographicMapCellTypeFactory {
        

    public readonly BLOCK_CELL_TYPE: BasicTopViewGeographicMapCellType

    public readonly OFF_MAP_CELL_TYPE: BasicTopViewGeographicMapCellType

    public readonly FLOOR_CELL_TYPE: BasicTopViewGeographicMapCellType

    public readonly DOOR_CELL_TYPE: BasicTopViewGeographicMapCellType

    public readonly STAIRS_UP_CELL_TYPE: BasicTopViewGeographicMapCellType

    public readonly STAIRS_DOWN_CELL_TYPE: BasicTopViewGeographicMapCellType

    public readonly OTHER_CELL_TYPE: BasicTopViewGeographicMapCellType

    private readonly maxTileId: number
private constructor (){

            super();
            this.maxTileId= 9;
    

    var basicTopViewGeographicMapStrings: BasicTopViewGeographicMapStrings = BasicTopViewGeographicMapStrings.getInstance()!;
        
        
;
    
new RaceTrackGeographicMapCellType(0, 999);
    

    var BLOCK_CELL_TYPE: BasicTopViewGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.DEFAULT, 1, 1);
        
        
;
    

    var OFF_MAP_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var FLOOR_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var DOOR_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var STAIRS_UP_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var STAIRS_DOWN_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var OTHER_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    
this.BLOCK_CELL_TYPE= BLOCK_CELL_TYPE;
    
this.OFF_MAP_CELL_TYPE= OFF_MAP_CELL_TYPE;
    
this.FLOOR_CELL_TYPE= FLOOR_CELL_TYPE;
    
this.DOOR_CELL_TYPE= DOOR_CELL_TYPE;
    
this.STAIRS_UP_CELL_TYPE= STAIRS_UP_CELL_TYPE;
    
this.STAIRS_DOWN_CELL_TYPE= STAIRS_DOWN_CELL_TYPE;
    
this.OTHER_CELL_TYPE= OTHER_CELL_TYPE;
    
}

public constructor (tileTypeToTileIdsMap: Hashtable<any, any>, maxTileId: number){

            super();
                //var tileTypeToTileIdsMap = tileTypeToTileIdsMap
    //var maxTileId = maxTileId

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    
this.maxTileId= maxTileId;
    

    var basicTopViewGeographicMapStrings: BasicTopViewGeographicMapStrings = BasicTopViewGeographicMapStrings.getInstance()!;
        
        
;
    

    var geographicMapCellTypeFactory: GeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance()!;
        
        
;
    

    var geographicMapCellTypeArray: GeographicMapCellType[] = geographicMapCellTypeFactory!.getGeographicMapCellTypeArray()!;
        
        
;
    

    var type: number = 0;
        
        
;
    

                        if(geographicMapCellTypeArray[type] == 
                                    null
                                )
                        
                                    {
                                    new RaceTrackGeographicMapCellType(type, 999);
    

                                    }
                                
                        else {
                            
                        }
                            

    var BLOCK_CELL_TYPE: BasicTopViewGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.DEFAULT, 1, 1);
        
        
;
    

    var OFF_MAP_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var FLOOR_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var DOOR_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var STAIRS_UP_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var STAIRS_DOWN_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var OTHER_CELL_TYPE: BasicTopViewGeographicMapCellType = BLOCK_CELL_TYPE;
        
        
;
    

    var keyArray: any[] = HashtableUtil.getInstance()!.getKeysAsArray(tileTypeToTileIdsMap)!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    

    var idsWithTypeList: BasicArrayList
;
    

    var key: string
;
    

    var basicPlatormGeographicMapCellType: BasicTopViewGeographicMapCellType
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
key= keyArray[index]! as String;
    
idsWithTypeList= tileTypeToTileIdsMap!.get(key);

                         as BasicArrayList;
    

                        if(key.equals(basicTopViewGeographicMapStrings!.WALL))
                        
                                    {
                                    basicPlatormGeographicMapCellType= new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.WALL, idsWithTypeList, 1000);
    
BLOCK_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                
                             else 
                        if(key.equals(basicTopViewGeographicMapStrings!.OFF_MAP))
                        
                                    {
                                    basicPlatormGeographicMapCellType= new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.OFF_MAP, idsWithTypeList, 1001);
    
OFF_MAP_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                
                             else 
                        if(key.equals(basicTopViewGeographicMapStrings!.FLOOR))
                        
                                    {
                                    basicPlatormGeographicMapCellType= new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.FLOOR, idsWithTypeList, 1);
    
FLOOR_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                
                             else 
                        if(key.equals(basicTopViewGeographicMapStrings!.DOOR))
                        
                                    {
                                    basicPlatormGeographicMapCellType= new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.DOOR, idsWithTypeList, 1);
    
DOOR_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                
                             else 
                        if(key.equals(basicTopViewGeographicMapStrings!.STAIRS_UP))
                        
                                    {
                                    basicPlatormGeographicMapCellType= new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.STAIRS_UP, idsWithTypeList, 1);
    
STAIRS_UP_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                
                             else 
                        if(key.equals(basicTopViewGeographicMapStrings!.STAIRS_DOWN))
                        
                                    {
                                    basicPlatormGeographicMapCellType= new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.STAIRS_DOWN, idsWithTypeList, 1);
    
STAIRS_DOWN_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                
                             else 
                        if(key.equals(basicTopViewGeographicMapStrings!.OTHER))
                        
                                    {
                                    basicPlatormGeographicMapCellType= new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings!.OTHER, idsWithTypeList, 1);
    
OTHER_CELL_TYPE= basicPlatormGeographicMapCellType;
    

                                    }
                                
}

this.BLOCK_CELL_TYPE= BLOCK_CELL_TYPE;
    
this.OFF_MAP_CELL_TYPE= OFF_MAP_CELL_TYPE;
    
this.FLOOR_CELL_TYPE= FLOOR_CELL_TYPE;
    
this.DOOR_CELL_TYPE= DOOR_CELL_TYPE;
    
this.STAIRS_UP_CELL_TYPE= STAIRS_UP_CELL_TYPE;
    
this.STAIRS_DOWN_CELL_TYPE= STAIRS_DOWN_CELL_TYPE;
    
this.OTHER_CELL_TYPE= OTHER_CELL_TYPE;
    
type= this.maxTileId -1;
    

                        if(geographicMapCellTypeArray[type] == 
                                    null
                                )
                        
                                    {
                                    new RaceTrackGeographicMapCellType(commonStrings!.START, type, 1);
    

                                    }
                                
                        else {
                            
                        }
                            
type= this.maxTileId -2;
    

                        if(geographicMapCellTypeArray[type] == 
                                    null
                                )
                        
                                    {
                                    new RaceTrackGeographicMapCellType(commonStrings!.START, type, 1);
    

                                    }
                                
                        else {
                            
                        }
                            
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
                        return this.FLOOR_CELL_TYPE.getTypes()[0]!;
    
}


    public isPath(cellType: GeographicMapCellType): boolean{
var cellType = cellType

                        if(this.FLOOR_CELL_TYPE.isType(cellType))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append("key: WALL/BLOCK_CELL_TYPE: ")!.append(this.BLOCK_CELL_TYPE.toString())!.append("key: FLOOR_CELL_TYPE: ")!.append(this.FLOOR_CELL_TYPE.toString())!.append("key: OTHER_CELL_TYPE: ")!.append(this.OTHER_CELL_TYPE.toString())!.append("key: OFF_MAP_CELL_TYPE: ")!.append(this.OFF_MAP_CELL_TYPE.toString())!.append("key: DOOR_CELL_TYPE: ")!.append(this.DOOR_CELL_TYPE.toString())!.append("key: STAIRS_DOWN_CELL_TYPE: ")!.append(this.STAIRS_DOWN_CELL_TYPE.toString())!.append("key: STAIRS_UP_CELL_TYPE: ")!.append(this.STAIRS_UP_CELL_TYPE.toString())!.toString();

                        ;
    
}


}
                
            

