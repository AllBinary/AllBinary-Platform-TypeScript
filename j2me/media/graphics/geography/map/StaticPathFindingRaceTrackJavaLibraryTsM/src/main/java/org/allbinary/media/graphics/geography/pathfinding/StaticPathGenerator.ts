
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
        
//not game specific package import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { CellPosition } from '../../../../../../org/allbinary/graphics/CellPosition.js';
      const CellPosition = globalThis.org.allbinary.graphics.CellPosition;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not game specific package import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { BasicGeographicMapCellPositionFactory } from '../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMapCellPositionFactory.js';
      const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

      
//not game specific package import { GeographicMapCellHistory } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellHistory.js';
      const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { PathData } from '../../../../../../org/allbinary/media/graphics/geography/map/PathData.js';
      const PathData = globalThis.org.allbinary.media.graphics.geography.map.PathData;

      
//not game specific package import { BasicArrayListUtil } from '../../../../../../org/allbinary/util/BasicArrayListUtil.js';
      const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PathGeneratorInterface } from './PathGeneratorInterface.js';
import { PathCacheFactory } from './PathCacheFactory.js';
import { PathFindingInfo } from './PathFindingInfo.js';

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
            
    public init(geographicMapInterface: any = {}, totalPaths: number){
}


                //@Throws(Exception.constructor)
            
    getGeographicMapCellPositionListFromBasicGeographicMapCellPositionList(geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory, pathList: BasicArrayList): BasicArrayList{

    var list: BasicArrayList = new BasicArrayListD();;
    

    var size: number = pathList!.size()!;;
    

    var basicGeographicMapCellPosition: CellPosition;;
    

    var geographicMapCellPosition: GeographicMapCellPosition;;
    




                        for (
    var index: number = 0;index < size; index++)
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

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

        try {
            
    var pathCacheFactory: PathCacheFactory = PathCacheFactory.getInstance()!;;
    

    var mapIdInteger: Integer = geographicMapInterface!.getAllBinaryTiledLayer()!.getDataId()!;;
    

    var list: BasicArrayList = pathCacheFactory!.getOrCreate(mapIdInteger)!;;
    

                        if(list == this.basicArrayListUtil!.getImmutableInstance())
                        
                                    {
                                    list= new BasicArrayListD();
    

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    var geographicMapCellPositionFactory: BasicGeographicMapCellPositionFactory = geographicMapInterface!.getGeographicMapCellPositionFactory()!;;
    

    var id: number = PathData.getInstance()!.OFFSET +mapIdInteger!.intValue();;
    

    var basicList: BasicArrayList = pathCacheFactory!.getOrCreate(smallIntegerSingletonFactory!.getAt(id))!;;
    

    var size: number = basicList!.size()!;;
    

    var pathList: BasicArrayList;;
    




                        for (
    var index: number = 0;index < size; index++)
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
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET_INSTANCE, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicArrayListD();
    
}

}


}
                
            

