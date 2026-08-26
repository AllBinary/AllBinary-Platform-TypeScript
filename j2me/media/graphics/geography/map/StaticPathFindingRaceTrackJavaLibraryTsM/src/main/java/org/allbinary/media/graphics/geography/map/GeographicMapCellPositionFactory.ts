
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
        
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GeographicMapCellPositionBaseFactory } from './GeographicMapCellPositionBaseFactory.js';
import { BasicGeographicMapCellPositionFactory } from './BasicGeographicMapCellPositionFactory.js';
import { BasicGeographicMap } from './BasicGeographicMap.js';

export class GeographicMapCellPositionFactory extends GeographicMapCellPositionBaseFactory {
        

    private static readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();

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
                
            

