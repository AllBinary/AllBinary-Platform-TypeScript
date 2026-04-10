
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2003 AllBinary 
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
        



import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    
import { LayerCoveringCellPositionsUtil } from "../../../../org/allbinary/game/layer/geographic/map/LayerCoveringCellPositionsUtil.js";

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { BasicGeographicMap } from "../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { CellPositionsUtil } from "../../../../org/allbinary/media/graphics/geography/map/CellPositionsUtil.js";

    
import { GeographicMapCellPosition } from "../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class GeographicMapCellPositionArea extends GeographicMapCellPositionAreaBase {
        

    private readonly cellPositionsUtil: CellPositionsUtil = CellPositionsUtil.getInstance()!;
        
        

    private readonly layerCoveringCellPositionsUtil: LayerCoveringCellPositionsUtil = LayerCoveringCellPositionsUtil.getInstance()!;
        
        

    private readonly reusableOccupyingGeographicMapCellPositionList: BasicArrayList = new BasicArrayList(4);
        
        

    private readonly reusableSurroundingGeographicMapCellPositionList: BasicArrayList = new BasicArrayList(12);
        
        

    private readonly surroundingCircularIndexUtil: CircularIndexUtil = CircularIndexUtil.getInstance(0)!;
        
        

    private readonly layerInterface: AllBinaryLayer

    private LIST: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    private occupyingGeographicMapCellPositionList: BasicArrayList = LIST;
        
        

    private surroundingGeographicMapCellPositionList: BasicArrayList = LIST;
        
        
public constructor (layerInterface: AllBinaryLayer){

            super();
                //var layerInterface = layerInterface
this.layerInterface= layerInterface
}


                //@Throws(Error::class)
            
    public update(geographicMapInterface: BasicGeographicMap){
    //var geographicMapInterface = geographicMapInterface
this.occupyingGeographicMapCellPositionList= layerCoveringCellPositionsUtil!.getAll(geographicMapInterface, layerInterface, layerInterface!.getXP(), layerInterface!.getYP(), reusableOccupyingGeographicMapCellPositionList)
this.surroundingGeographicMapCellPositionList= cellPositionsUtil!.getAllSurrounding(geographicMapInterface, occupyingGeographicMapCellPositionList, reusableSurroundingGeographicMapCellPositionList)
this.surroundingCircularIndexUtil!.setSize(this.surroundingGeographicMapCellPositionList!.size())
}


    public getOccupyingGeographicMapCellPositionList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return occupyingGeographicMapCellPositionList;
    
}


    public getSurroundingGeographicMapCellPositionList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return surroundingGeographicMapCellPositionList;
    
}


    public getNextSurroundingGeographicMapCellPosition(): GeographicMapCellPosition{

    var geographicMapCellPosition: GeographicMapCellPosition = this.surroundingGeographicMapCellPositionList!.get(this.surroundingCircularIndexUtil!.getIndex()) as GeographicMapCellPosition;
        
        

this.surroundingCircularIndexUtil!.next()



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return geographicMapCellPosition;
    
}


}
                
            

