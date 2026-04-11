
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryTiledLayer } from "../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    

export class GeographicMapCellPositionFactory extends GeographicMapCellPositionBaseFactory {
        

    private static readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        

    public static getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public getInstance(geographicMapInterface: BasicGeographicMap): BasicGeographicMapCellPositionFactory{
    //var geographicMapInterface = geographicMapInterface

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var allBinaryTiledLayer: AllBinaryTiledLayer = geographicMapInterface!.getAllBinaryTiledLayer()!;
        
        
;
    

    var geographicMapCellPositionFactoryCanBeNull: any? = hashtable.get(allBinaryTiledLayer!.getDataId());
        
        
;
    

                        if(geographicMapCellPositionFactoryCanBeNull == 
                                    null
                                )
                        
                                    {
                                    logUtil!.put(StringMaker().
                            append("Creating GeographicMapCellPositionFactory for TileLayer: ")!.appendint(allBinaryTiledLayer!.getDataId()!.toInt())!.toString(), this, commonStrings!.GET_INSTANCE);
    
geographicMapCellPositionFactoryCanBeNull= BasicGeographicMapCellPositionFactory(geographicMapInterface);
    
hashtable.put(allBinaryTiledLayer!.getDataId(), geographicMapCellPositionFactoryCanBeNull);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactoryCanBeNull as BasicGeographicMapCellPositionFactory;
    

                                    }
                                
                        else {
                            logUtil!.put(StringMaker().
                            append("Reusing GeographicMapCellPositionFactory for TileLayer: ")!.appendint(allBinaryTiledLayer!.getDataId()!.toInt())!.toString(), this, commonStrings!.GET_INSTANCE);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPositionFactoryCanBeNull as BasicGeographicMapCellPositionFactory;
    

                        }
                            
}


}
                
            

