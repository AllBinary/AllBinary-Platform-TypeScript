
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
        



            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not game specific package import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { AllBinaryTiledLayer } from '../../../../../../../org/allbinary/game/layer/AllBinaryTiledLayer.js';
      const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;

      
//not game specific package import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
//not game specific package import { GeographicMapCellPositionBaseFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionBaseFactory.js';
      const GeographicMapCellPositionBaseFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionBaseFactory;

      
//not game specific package import { GeographicMapCellPositionFactoryInterface } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionFactoryInterface.js';
      const GeographicMapCellPositionFactoryInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactoryInterface;

      
//not game specific package import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
      const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RaceTrackGeographicMapInterface } from './RaceTrackGeographicMapInterface.js';
import { RaceTrackInfo } from './RaceTrackInfo.js';
import { RaceTrackData } from './RaceTrackData.js';

export class BaseRaceTrackGeographicMap extends BasicGeographicMap implements RaceTrackGeographicMapInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private raceTrackInfo: RaceTrackInfo;

    private raceTrackData: RaceTrackData;

    private miniGeographicMap: BasicGeographicMap;

public constructor (raceTrackInfo: RaceTrackInfo, raceTrackData: RaceTrackData, tiledLayer: AllBinaryTiledLayer, miniGeographicMap: BasicGeographicMap, geographicMapCellPositionFactoryInterface: GeographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory: GeographicMapCellPositionBaseFactory, geographicMapCellTypeFactory: GeographicMapCellTypeFactory){
            super(raceTrackInfo!.getId(), raceTrackInfo!.getName(), raceTrackData!.getCellTypeIdToGeographicMapCellTypeArray(), tiledLayer, raceTrackInfo!.getForegroundBasicColor(), raceTrackInfo!.getBackgroundBasicColor(), geographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory, geographicMapCellTypeFactory);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.raceTrackInfo= raceTrackInfo;
    
this.raceTrackData= raceTrackData;
    
this.miniGeographicMap= miniGeographicMap;
    

    var miniTiledLayer: AllBinaryTiledLayer = this.miniGeographicMap!.getAllBinaryTiledLayer()!;;
    

                        if(miniTiledLayer!.getColumns() != this.getGeographicMapCellPositionFactory()!.getColumns())
                        
                                    {
                                    
    var error: string = new StringMaker().append("RaceTrackMap has incorrect Mini Map columns: ")!.appendint(miniTiledLayer!.getColumns())!.append(" != ")!.appendint(this.getGeographicMapCellPositionFactory()!.getColumns())!.toString()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR);
    



                            throw new Exception(error);
                    

                                    }
                                

                        if(miniTiledLayer!.getRows() != this.getGeographicMapCellPositionFactory()!.getRows())
                        
                                    {
                                    
    var error: string = "RaceTrackMap has incorrect Mini Map rows";;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR);
    



                            throw new Exception(error);
                    

                                    }
                                
}


    public getRaceTrackInfo(): RaceTrackInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.raceTrackInfo;
    
}


    public setRaceTrackInfo(aRaceTrackInfo: RaceTrackInfo){
this.raceTrackInfo= aRaceTrackInfo;
    
}


    public setMiniBasicGeographicMap(miniBasicGeographicMap: BasicGeographicMap){
this.miniGeographicMap= miniBasicGeographicMap;
    
}


    public getMiniBasicGeographicMap(): BasicGeographicMap{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.miniGeographicMap;
    
}


    public getRaceTrackData(): RaceTrackData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.raceTrackData;
    
}


    public setRaceTrackData(raceTrackData: RaceTrackData){
this.raceTrackData= raceTrackData;
    
}


}
                
            

