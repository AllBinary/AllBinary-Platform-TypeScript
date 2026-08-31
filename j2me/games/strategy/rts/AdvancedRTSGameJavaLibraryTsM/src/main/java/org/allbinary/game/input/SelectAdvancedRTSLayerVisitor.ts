
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

        


import { AssignWaypointsUtil } from '../../../../org/allbinary/game/input/form/AssignWaypointsUtil.js';
      //not GWT import const AssignWaypointsUtil = globalThis.org.allbinary.game.input.form.AssignWaypointsUtil;

      
import { AdvancedRTSGameLayer } from '../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
      //not GWT import const AdvancedRTSGameLayer = globalThis.org.allbinary.game.layer.AdvancedRTSGameLayer;

      
import { RTSLayer } from '../../../../org/allbinary/game/layer/RTSLayer.js';
      //not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
import { BuildingLayer } from '../../../../org/allbinary/game/layer/building/BuildingLayer.js';
      //not GWT import const BuildingLayer = globalThis.org.allbinary.game.layer.building.BuildingLayer;

      
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
import { UnitLayer } from '../../../../org/allbinary/game/layer/unit/UnitLayer.js';
      //not GWT import const UnitLayer = globalThis.org.allbinary.game.layer.unit.UnitLayer;

      
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { Visitor } from '../../../../org/allbinary/logic/util/visitor/Visitor.js';
      //not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectedRTSLayersPlayerGameInput } from './SelectedRTSLayersPlayerGameInput.js';
//not GWT import const  = globalThis.org.allbinary.game.input.SelectedRTSLayersPlayerGameInput;

                
export class SelectAdvancedRTSLayerVisitor extends Visitor {
        

    private readonly selectedRTSLayersPlayerGameInput: SelectedRTSLayersPlayerGameInput;

public constructor (selectedRTSLayersPlayerGameInput: SelectedRTSLayersPlayerGameInput){

            super();
        this.selectedRTSLayersPlayerGameInput= selectedRTSLayersPlayerGameInput;
    
}


    public visit(anyType: any = {}): any{

    var selectedLayer: CollidableDestroyableDamageableLayer = anyType as CollidableDestroyableDamageableLayer;;
    

                        if(selectedLayer != CollidableDestroyableDamageableLayer.getNullInstance() && selectedLayer!.getType() == BuildingLayer.getStaticType())
                        
                                    {
                                    
    var rtsGameLayer: AdvancedRTSGameLayer = selectedLayer as AdvancedRTSGameLayer;;
    

    var assignWaypointsUtil: AssignWaypointsUtil = AssignWaypointsUtil.getInstance()!;;
    

    var list: BasicArrayList = this.selectedRTSLayersPlayerGameInput!.getSelectedBasicArrayList()!;;
    

    var currentRTSLayer: RTSLayer;;
    

    var unitLayer: UnitLayer;;
    




                        for (
    var index: number = list.size() -1;index >= 0; index--)
        {
currentRTSLayer= list.get(index) as RTSLayer;
    

                        if(currentRTSLayer!.getType() == UnitLayer.getStaticType())
                        
                                    {
                                    unitLayer= currentRTSLayer as UnitLayer;
    
unitLayer!.setParentLayer(rtsGameLayer);
    
assignWaypointsUtil!.set(unitLayer, rtsGameLayer);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


}



