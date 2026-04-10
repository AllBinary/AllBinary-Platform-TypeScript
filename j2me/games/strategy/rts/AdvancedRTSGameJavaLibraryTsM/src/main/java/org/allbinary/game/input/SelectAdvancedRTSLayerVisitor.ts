
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2006 AllBinary 
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
        



import { AssignWaypointsUtil } from "../../../../org/allbinary/game/input/form/AssignWaypointsUtil.js";

    
import { AdvancedRTSGameLayer } from "../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js";

    
import { RTSLayer } from "../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { BuildingLayer } from "../../../../org/allbinary/game/layer/building/BuildingLayer.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { UnitLayer } from "../../../../org/allbinary/game/layer/unit/UnitLayer.js";

    
import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { Visitor } from "../../../../org/allbinary/logic/util/visitor/Visitor.js";

    

export class SelectAdvancedRTSLayerVisitor extends Visitor {
        

    private readonly selectedRTSLayersPlayerGameInput: SelectedRTSLayersPlayerGameInput
public constructor (selectedRTSLayersPlayerGameInput: SelectedRTSLayersPlayerGameInput){

            super();
                //var selectedRTSLayersPlayerGameInput = selectedRTSLayersPlayerGameInput
this.selectedRTSLayersPlayerGameInput= selectedRTSLayersPlayerGameInput
}


    public visit(anyType: any = {}): any = {}{
var anyType = anyType

    var selectedLayer: CollidableDestroyableDamageableLayer = anyType as CollidableDestroyableDamageableLayer;
        
        


    
                        if(selectedLayer != CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER && selectedLayer!.getType() == BuildingLayer.getStaticType())
                        
                                    {
                                    
    var rtsGameLayer: AdvancedRTSGameLayer = selectedLayer as AdvancedRTSGameLayer;
        
        


    var assignWaypointsUtil: AssignWaypointsUtil = AssignWaypointsUtil.getInstance()!;
        
        


    var list: BasicArrayList = selectedRTSLayersPlayerGameInput!.getSelectedBasicArrayList()!;
        
        


    var currentRTSLayer: RTSLayer


    var unitLayer: UnitLayer





                        for (
    var index: number = list.size() -1;
        
        
index >= 0; index--)
        {
currentRTSLayer= list.get(index) as RTSLayer

    
                        if(currentRTSLayer!.getType() == UnitLayer.getStaticType())
                        
                                    {
                                    unitLayer= currentRTSLayer as UnitLayer
setParentLayer(rtsGameLayer)
set(unitLayer, rtsGameLayer)

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


}
                
            

