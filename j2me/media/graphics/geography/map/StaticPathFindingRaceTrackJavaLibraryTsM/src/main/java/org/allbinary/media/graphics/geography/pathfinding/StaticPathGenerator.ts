
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
        



            import { Integer } from "../../../../../../java/lang/Integer.js";
        
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { CellPosition } from "../../../../../../org/allbinary/graphics/CellPosition.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { SmallIntegerSingletonFactory } from "../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicGeographicMap } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { BasicGeographicMapCellPositionFactory } from "../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js";

    
import { GeographicMapCellHistory } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js";

    
import { GeographicMapCellPosition } from "../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { PathData } from "../../../../../../org/allbinary/media/graphics/geography/map/PathData.js";

    
import { BasicArrayListUtil } from "../../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class StaticPathGenerator
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        
protected constructor (){

            super();
            PreLogUtil.put("Using Static Path Finding", this, CommonStrings.getInstance()!.CONSTRUCTOR);
    
}


                //@Throws(Error::class)
            
    public init(geographicMapInterface: any = {}, totalPaths: number){
    //var geographicMapInterface = geographicMapInterface
    //var totalPaths = totalPaths
}


                //@Throws(Error::class)
            
    getGeographicMapCellPositionListFromBasicGeographicMapCellPositionList(geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory, pathList: BasicArrayList): BasicArrayList{
    //var geographicMapCellPositionFactory = geographicMapCellPositionFactory
    //var pathList = pathList

    var list: BasicArrayList = new BasicArrayList();
        
        
;
    

    var size: number = pathList!.size()!;
        
        
;
    

    var basicGeographicMapCellPosition: CellPosition
;
    

    var geographicMapCellPosition: GeographicMapCellPosition
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
basicGeographicMapCellPosition= pathList!.get(index);

                         as CellPosition;
    
geographicMapCellPosition= geographicMapCellPositionFactory!.getInstance(basicGeographicMapCellPosition!.getColumn(), basicGeographicMapCellPosition!.getRow());
    
list.add(geographicMapCellPosition);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


                //@Throws(Error::class)
            
    public getInstance(geographicMapInterface: BasicGeographicMap, geographicMapCellHistory: GeographicMapCellHistory, pathFindingInfo: PathFindingInfo, totalPaths: number): BasicArrayList{
    //var geographicMapInterface = geographicMapInterface
    //var geographicMapCellHistory = geographicMapCellHistory
    //var pathFindingInfo = pathFindingInfo
    //var totalPaths = totalPaths

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            
    var pathCacheFactory: PathCacheFactory = PathCacheFactory.getInstance()!;
        
        
;
    

    var mapIdInteger: Integer = geographicMapInterface!.getAllBinaryTiledLayer()!.getDataId()!;
        
        
;
    

    var list: BasicArrayList = pathCacheFactory!.getInstance(mapIdInteger)!;
        
        
;
    

                        if(list == basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    list= new BasicArrayList();
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;
        
        
;
    

    var id: number = PathData.getInstance()!.OFFSET +mapIdInteger!.toInt();
        
        
;
    

    var basicList: BasicArrayList = pathCacheFactory!.getInstance(smallIntegerSingletonFactory!.getInstance(id))!;
        
        
;
    

    var size: number = basicList!.size()!;
        
        
;
    

    var pathList: BasicArrayList
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
pathList= this.getGeographicMapCellPositionListFromBasicGeographicMapCellPositionList(geographicMapCellPositionFactory, basicList!.get(index);

                         as BasicArrayList);
    
list.add(pathList);
    
}

pathCacheFactory!.add(mapIdInteger, list);
    
pathCacheFactory!.remove(smallIntegerSingletonFactory!.getInstance(id));
    

                                    }
                                
this.logUtil!.putF(new StringMaker().
                            append("Using Cached Path(s): ")!.append(StringUtil.getInstance()!.toString(list))!.toString(), this, commonStrings!.GET_INSTANCE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayList();
    
}

}


}
                
            

