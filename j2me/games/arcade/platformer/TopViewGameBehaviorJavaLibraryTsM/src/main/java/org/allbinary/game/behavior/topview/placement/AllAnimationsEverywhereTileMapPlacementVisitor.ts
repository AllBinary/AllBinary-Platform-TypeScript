
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
        



import { TiledMap } from "../../../../../../org/mapeditor/core/TiledMap.js";

    

export class AllAnimationsEverywhereTileMapPlacementVisitor extends TileMapPlacementVisitor {
        

    public visit(lastMap: TiledMap, mapData: number[][]){
    //var lastMap = lastMap
    //var mapData = mapData

    var size: number = mapData!.length
                ;
        
        
;
    

    var size2: number = mapData[0]!.length -7;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {




                        for (
    var index2: number = 0;
        
        
index2 < size2; )
        {
mapData[index]![index2]= 1;
    
mapData[index]![index2 +1]= 17;
    
mapData[index]![index2 +2]= 33;
    
mapData[index]![index2 +3]= 49;
    
mapData[index]![index2 +4]= 65;
    
mapData[index]![index2 +5]= 81;
    
mapData[index]![index2 +6]= 97;
    
}

}

}


}
                
            

