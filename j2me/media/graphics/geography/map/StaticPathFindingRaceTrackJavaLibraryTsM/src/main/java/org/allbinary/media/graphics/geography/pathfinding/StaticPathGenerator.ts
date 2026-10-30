
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
        
            import { Integer } from '../../../../../../java/lang/Integer.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { CellPosition } from '../../../../../../org/allbinary/graphics/CellPosition.js';
//not GWT import const CellPosition

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap

import { BasicGeographicMapCellPositionFactory } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
//not GWT import const BasicGeographicMapCellPositionFactory

import { GeographicMapCellHistory } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory

import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import const GeographicMapCellPosition

import { PathData } from '../../../../../../org/allbinary/media/graphics/geography/map/PathData.js';
//not GWT import const PathData

//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
type BasicArrayListUtil<T = any, U = any> = typeof BasicArrayListUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathGeneratorInterface } from './PathGeneratorInterface.js';
//not GWT import - same folder const PathGeneratorInterface
import { PathCacheFactory } from './PathCacheFactory.js';
//not GWT import - same folder const PathCacheFactory
import { PathFindingInfo } from './PathFindingInfo.js';
//not GWT import - same folder const PathFindingInfo

export class StaticPathGenerator
            extends Object
         implements PathGeneratorInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

protected constructor (){

            super();
        PreLogUtil.put("Using Static Path Finding", this, CommonStrings.getInstance()!.CONSTRUCTOR);
    
}


                //@Throws(Exception.constructor)
            
    public init(geographicMapInterface: any, totalPaths: number){
}


                //@Throws(Exception.constructor)
            
    getGeographicMapCellPositionListFromBasicGeographicMapCellPositionList(geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory, pathList: BasicArrayList): BasicArrayList{

    let list: BasicArrayList = new BasicArrayListD();;
    

    let size: number = pathList!.size()!;;
    

    let basicGeographicMapCellPosition: CellPosition;;
    

    let geographicMapCellPosition: GeographicMapCellPosition;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
basicGeographicMapCellPosition= pathList!.get(index) as CellPosition;
    
geographicMapCellPosition= geographicMapCellPositionFactory!.getAt(basicGeographicMapCellPosition!.getColumn(), basicGeographicMapCellPosition!.getRow());
    
list.add(geographicMapCellPosition);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


                //@Throws(Exception.constructor)
            
    public createList(geographicMapInterface: BasicGeographicMap, geographicMapCellHistory: GeographicMapCellHistory, pathFindingInfo: PathFindingInfo, totalPaths: number): BasicArrayList{

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

 try { 
    let pathCacheFactory: PathCacheFactory = PathCacheFactory.getInstance()!;;
    

    let mapIdInteger: Integer = geographicMapInterface!.getAllBinaryTiledLayer()!.getDataId()!;;
    

    let list: BasicArrayList = pathCacheFactory!.getOrCreate(mapIdInteger)!;;
    

                        if(list == this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    list= new BasicArrayListD();
    

    let smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    let geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    let id: number = PathData.getInstance()!.OFFSET +mapIdInteger!.intValue();;
    

    let basicList: BasicArrayList = pathCacheFactory!.getOrCreate(smallIntegerSingletonFactory!.getAt(id))!;;
    

    let size: number = basicList!.size()!;;
    

    let pathList: BasicArrayList;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
pathList= this.getGeographicMapCellPositionListFromBasicGeographicMapCellPositionList(geographicMapCellPositionFactory, basicList!.get(index) as BasicArrayList);
    
list.add(pathList);
    
}

pathCacheFactory!.add(mapIdInteger, list);
    
pathCacheFactory!.remove(smallIntegerSingletonFactory!.getAt(id));
    

                                    }
                                
this.logUtil!.putF(new StringMaker().append("Using Cached Path(s): ")!.append(StringUtil.getInstance()!.toString(list))!.toString(), this, commonStrings!.GET_INSTANCE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayListD();
    

 }
   }
 
}


}

