
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
        



import { MyRandomFactory } from "../../../../../../org/allbinary/game/rand/MyRandomFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { TileLayer } from "../../../../../../org/mapeditor/core/TileLayer.js";

    
import { TiledMap } from "../../../../../../org/mapeditor/core/TiledMap.js";

    

export class PropsTileMapPlacementVisitor extends TileMapPlacementVisitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly randomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;
        
        

    public visit(lastMap: TiledMap, mapData: IntArray[]){
    //var lastMap = lastMap
    //var mapData = mapData

    var layerIndex: number = 0;
        
        


    var tileLayer: TileLayer = (lastMap!.getLayer(layerIndex) as TileLayer);
        
        


    var mapArray: IntArray[] = tileLayer!.getMapArray()!;
        
        


    var size: number = mapData!.length
                ;
        
        


    var size2: number = mapData[0]!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {




                        for (
    var index2: number = 0;
        
        
index2 < size2; index2++)
        {

    
                        if(mapArray[index]![index2] == 14)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.visit2(mapArray, mapData, index, index2)

                        }
                            

    
                        if(index % 7 == 0)
                        
                                    {
                                    
    
                        if(mapArray[index]![index2] == 19)
                        
                                    {
                                    
    var randomInt: number = randomFactory!.getAbsoluteNextIntAllowZero(3)!;
        
        


    
                        if(randomInt == 0)
                        
                                    {
                                    mapData[index]![index2]= 1

                                    }
                                
                             else 
    
                        if(randomInt == 1)
                        
                                    {
                                    mapData[index]![index2]= 81

                                    }
                                
                             else 
    
                        if(randomInt == 2)
                        
                                    {
                                    mapData[index]![index2]= 97

                                    }
                                

                                    }
                                
                             else 
    
                        if(mapArray[index]![index2] == 17)
                        
                                    {
                                    
    var randomInt: number = randomFactory!.getAbsoluteNextIntAllowZero(3)!;
        
        


    
                        if(randomInt == 0)
                        
                                    {
                                    mapData[index]![index2]= 17

                                    }
                                
                             else 
    
                        if(randomInt == 1)
                        
                                    {
                                    mapData[index]![index2]= 81

                                    }
                                
                             else 
    
                        if(randomInt == 2)
                        
                                    {
                                    mapData[index]![index2]= 97

                                    }
                                

                                    }
                                

                                    }
                                

    
                        if(index2 % 7 == 0)
                        
                                    {
                                    
    
                        if(mapArray[index]![index2] == 34)
                        
                                    {
                                    
    var randomInt: number = randomFactory!.getAbsoluteNextIntAllowZero(4)!;
        
        


    
                        if(randomInt == 0)
                        
                                    {
                                    mapData[index]![index2]= 33

                                    }
                                
                             else 
    
                        if(randomInt == 1)
                        
                                    {
                                    mapData[index]![index2]= 65

                                    }
                                
                             else 
    
                        if(randomInt == 2)
                        
                                    {
                                    mapData[index]![index2]= 81

                                    }
                                
                             else 
    
                        if(randomInt == 3)
                        
                                    {
                                    mapData[index]![index2]= 97

                                    }
                                

                                    }
                                

                                    }
                                
}

}

}


    public visit2(mapArray: IntArray[], mapData: IntArray[], index: number, index2: number){
    //var mapArray = mapArray
    //var mapData = mapData
    //var index = index
    //var index2 = index2

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


    var countX: number = 0;
        
        


    var countY: number = 0;
        
        


    var index3: number = index -1;
        
        





                        for (
    var index4: number = index2 -1;
        
        
index4 > 0; index4--)
        {
index3--

    
                        if(index3 < 0 || index4 < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    
                        if(mapArray[index3]![index4] != 14 || mapData[index3]![index4] != 0)
                        
                                    {
                                    
    
                        if(countX > 10 && countY > 10)
                        
                                    {
                                    



                        for (
    var index5: number = index3 +1;
        
        
index5 < index -1; index5++)
        {




                        for (
    var index6: number = index4 +1;
        
        
index6 < index2 -1; index6++)
        {

    
                        if(mapArray[index5]![index6] != 14 || mapData[index5]![index6] != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}

}


    var x: number = index -(countX /2);
        
        


    var y: number = index2 -(countY /2);
        
        


    
                        if(x >= 0 && y >= 0 && x < mapData!.length && y < mapData[0]!.length)
                        
                                    {
                                    
                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
countY++
countX++
}

}


}
                
            

