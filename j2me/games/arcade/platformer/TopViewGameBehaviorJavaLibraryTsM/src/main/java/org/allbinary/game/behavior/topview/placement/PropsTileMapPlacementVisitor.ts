
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

        


//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
type MyRandomFactory<T = any, U = any> = typeof MyRandomFactory extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MyRandomFactory;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { TileLayer } from '../../../../../../org/mapeditor/core/TileLayer.js';
//not GWT import const TileLayer

import { TiledMap } from '../../../../../../org/mapeditor/core/TiledMap.js';
//not GWT import const TiledMap

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TileMapPlacementVisitor } from './TileMapPlacementVisitor.js';
//sameFolderImports - not GWT import - same folder const TileMapPlacementVisitor

export class PropsTileMapPlacementVisitor extends TileMapPlacementVisitor {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly randomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;

    public visit(lastMap: TiledMap, mapData: number[][]){

    let layerIndex: number = 0;;
    

    let tileLayer: TileLayer = (lastMap!.getLayer(layerIndex) as TileLayer);;
    

    let mapArray: number[][] = tileLayer!.getMapArray()!;;
    

    let size: number = mapData!.length
                ;;
    

    let size2: number = mapData[0]!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {




                        for (
    let index2: number = 0;index2 < size2; index2++)
        {

                        if(mapArray[index]![index2] == 14)
                        
                                    {
                                    
                                    }
                                
                        else {
                            this.visit2(mapArray, mapData, index, index2);
    

                        }
                            

                        if(index % 7 == 0)
                        
                                    {
                                    
                        if(mapArray[index]![index2] == 19)
                        
                                    {
                                    
    let randomInt: number = this.randomFactory!.getAbsoluteNextIntAllowZero(3)!;;
    

                        if(randomInt == 0)
                        
                                    {
                                    mapData[index]![index2]= 1;
    

                                    }
                                
                             else 
                        if(randomInt == 1)
                        
                                    {
                                    mapData[index]![index2]= 81;
    

                                    }
                                
                             else 
                        if(randomInt == 2)
                        
                                    {
                                    mapData[index]![index2]= 97;
    

                                    }
                                

                                    }
                                
                             else 
                        if(mapArray[index]![index2] == 17)
                        
                                    {
                                    
    let randomInt: number = this.randomFactory!.getAbsoluteNextIntAllowZero(3)!;;
    

                        if(randomInt == 0)
                        
                                    {
                                    mapData[index]![index2]= 17;
    

                                    }
                                
                             else 
                        if(randomInt == 1)
                        
                                    {
                                    mapData[index]![index2]= 81;
    

                                    }
                                
                             else 
                        if(randomInt == 2)
                        
                                    {
                                    mapData[index]![index2]= 97;
    

                                    }
                                

                                    }
                                

                                    }
                                

                        if(index2 % 7 == 0)
                        
                                    {
                                    
                        if(mapArray[index]![index2] == 34)
                        
                                    {
                                    
    let randomInt: number = this.randomFactory!.getAbsoluteNextIntAllowZero(4)!;;
    

                        if(randomInt == 0)
                        
                                    {
                                    mapData[index]![index2]= 33;
    

                                    }
                                
                             else 
                        if(randomInt == 1)
                        
                                    {
                                    mapData[index]![index2]= 65;
    

                                    }
                                
                             else 
                        if(randomInt == 2)
                        
                                    {
                                    mapData[index]![index2]= 81;
    

                                    }
                                
                             else 
                        if(randomInt == 3)
                        
                                    {
                                    mapData[index]![index2]= 97;
    

                                    }
                                

                                    }
                                

                                    }
                                
}

}

}


    public visit2(mapArray: number[][], mapData: number[][], index: number, index2: number){

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let countX: number = 0;;
    

    let countY: number = 0;;
    

    let index3: number = index -1;;
    




                        for (
    let index4: number = index2 -1;index4 > 0; index4--)
        {
index3--;
    

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
    let index5: number = index3 +1;index5 < index -1; index5++)
        {




                        for (
    let index6: number = index4 +1;index6 < index2 -1; index6++)
        {

                        if(mapArray[index5]![index6] != 14 || mapData[index5]![index6] != 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
}

}


    let x: number = index -(globalThis.Math.trunc(countX /2));;
    

    let y: number = index2 -(globalThis.Math.trunc(countY /2));;
    

                        if(x >= 0 && y >= 0 && x < mapData!.length && y < mapData[0]!.length)
                        
                                    {
                                    
                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
countY++;
    
countX++;
    
}

}


}

