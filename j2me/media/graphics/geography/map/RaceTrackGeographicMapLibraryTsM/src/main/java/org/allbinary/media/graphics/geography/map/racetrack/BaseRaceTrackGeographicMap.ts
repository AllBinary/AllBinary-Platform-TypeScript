
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
        



import { CommonStrings } from "../../../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { AllBinaryTiledLayer } from "../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js";

    
import { StringMaker } from "../../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicGeographicMap } from "../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCellPositionBaseFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionBaseFactory.js";

    
import { GeographicMapCellPositionFactoryInterface } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js";

    
import { GeographicMapCellTypeFactory } from "../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js";

    

export class BaseRaceTrackGeographicMap extends BasicGeographicMap
                , RaceTrackGeographicMapInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private raceTrackInfo: RaceTrackInfo

    private raceTrackData: RaceTrackData

    private miniGeographicMap: BasicGeographicMap
public constructor (raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData, tiledLayer: AllBinaryTiledLayer, miniGeographicMap: BasicGeographicMap, geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory: GeographicMapCellPositionBaseFactory, geographicMapCellTypeFactory: GeographicMapCellTypeFactory)                        

                            : super(raceTrackInfo!.getId(), raceTrackInfo!.getName(), raceTrackData!.getCellTypeIdToGeographicMapCellTypeArray(), tiledLayer, raceTrackInfo!.getForegroundBasicColor(), raceTrackInfo!.getBackgroundBasicColor(), geographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory, geographicMapCellTypeFactory){

            super();
                //var raceTrackInfo = raceTrackInfo
    //var raceTrackData = raceTrackData
    //var tiledLayer = tiledLayer
    //var miniGeographicMap = miniGeographicMap
    //var geographicMapCellPositionFactoryInterface = geographicMapCellPositionFactoryInterface
    //var geographicMapCellPositionBaseFactory = geographicMapCellPositionBaseFactory
    //var geographicMapCellTypeFactory = geographicMapCellTypeFactory


                            //For kotlin this is before the body of the constructor.
                    
this.raceTrackInfo= raceTrackInfo;
    
this.raceTrackData= raceTrackData;
    
this.miniGeographicMap= miniGeographicMap;
    

    var miniTiledLayer: AllBinaryTiledLayer = this.miniGeographicMap!.getAllBinaryTiledLayer()!;
        
        
;
    

                        if(miniTiledLayer!.getColumns() != this.getGeographicMapCellPositionFactory()!.getColumns())
                        
                                    {
                                    
    var error: string = new StringMaker().
                            append("RaceTrackMap has incorrect Mini Map columns: ")!.appendint(miniTiledLayer!.getColumns())!.append(" != ")!.appendint(this.getGeographicMapCellPositionFactory()!.getColumns())!.toString()!;
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR);
    



                            throw new Error(error)

                                    }
                                

                        if(miniTiledLayer!.getRows() != this.getGeographicMapCellPositionFactory()!.getRows())
                        
                                    {
                                    
    var error: string = "RaceTrackMap has incorrect Mini Map rows";
        
        
;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR);
    



                            throw new Error(error)

                                    }
                                
}


    public getRaceTrackInfo(): RaceTrackInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return raceTrackInfo;
    
}


    public setRaceTrackInfo(aRaceTrackInfo: RaceTrackInfo){
var aRaceTrackInfo = aRaceTrackInfo
raceTrackInfo= aRaceTrackInfo;
    
}


    public setMiniBasicGeographicMap(miniBasicGeographicMap: BasicGeographicMap){
var miniBasicGeographicMap = miniBasicGeographicMap
this.miniGeographicMap= miniBasicGeographicMap;
    
}


    public getMiniBasicGeographicMap(): BasicGeographicMap{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return miniGeographicMap;
    
}


    public getRaceTrackData(): RaceTrackData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return raceTrackData;
    
}


    public setRaceTrackData(raceTrackData: RaceTrackData){
var raceTrackData = raceTrackData
this.raceTrackData= raceTrackData;
    
}


}
                
            

