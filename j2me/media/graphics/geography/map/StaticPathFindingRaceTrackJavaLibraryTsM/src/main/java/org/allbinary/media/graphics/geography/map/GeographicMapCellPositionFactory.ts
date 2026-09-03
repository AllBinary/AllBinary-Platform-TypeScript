
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      //not GWT import const Hashtable = globalThis.java.util.Hashtable;

      
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      //not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
import { StdUtil } from '../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPositionBaseFactory } from './GeographicMapCellPositionBaseFactory.js';
//not GWT import const GeographicMapCellPositionBaseFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionBaseFactory;

                import { BasicGeographicMapCellPositionFactory } from './BasicGeographicMapCellPositionFactory.js';
//not GWT import const BasicGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMapCellPositionFactory;

                import { BasicGeographicMap } from './BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

                
export class GeographicMapCellPositionFactory extends GeographicMapCellPositionBaseFactory {
        

    private static readonly hashtable: Hashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;

    public static getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GeographicMapCellPositionFactory.hashtable;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

                //@Throws(Exception.constructor)
            
    public getInstance(geographicMapInterface: BasicGeographicMap): BasicGeographicMapCellPositionFactory{

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;;
    

    var geographicMapCellPositionFactoryCanBeNull: any = GeographicMapCellPositionFactory.hashtable.get(allBinaryTiledLayer!.getDataId());;
    

                        if(geographicMapCellPositionFactoryCanBeNull == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("Creating GeographicMapCellPositionFactory for TileLayer: ")!.appendint(allBinaryTiledLayer!.getDataId()!.intValue())!.toString(), this, commonStrings!.GET_INSTANCE);
    
geographicMapCellPositionFactoryCanBeNull= new BasicGeographicMapCellPositionFactory(geographicMapInterface);
    
GeographicMapCellPositionFactory.hashtable.put(allBinaryTiledLayer!.getDataId(), geographicMapCellPositionFactoryCanBeNull);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactoryCanBeNull as BasicGeographicMapCellPositionFactory;
    

                                    }
                                
                        else {
                            this.logUtil!.putF(new StringMaker().append("Reusing GeographicMapCellPositionFactory for TileLayer: ")!.appendint(allBinaryTiledLayer!.getDataId()!.intValue())!.toString(), this, commonStrings!.GET_INSTANCE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactoryCanBeNull as BasicGeographicMapCellPositionFactory;
    

                        }
                            
}


}



