
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
//not GWT import const AssignWaypointsUtil

import { AdvancedRTSGameLayer } from '../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
//not GWT import const AdvancedRTSGameLayer

import { RTSLayer } from '../../../../org/allbinary/game/layer/RTSLayer.js';
//not GWT import const RTSLayer

import { BuildingLayer } from '../../../../org/allbinary/game/layer/building/BuildingLayer.js';
//not GWT import const BuildingLayer

import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer

import { UnitLayer } from '../../../../org/allbinary/game/layer/unit/UnitLayer.js';
//not GWT import const UnitLayer

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

import { Visitor } from '../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectedRTSLayersPlayerGameInput } from './SelectedRTSLayersPlayerGameInput.js';
//sameFolderImports - not GWT import - same folder const SelectedRTSLayersPlayerGameInput

export class SelectAdvancedRTSLayerVisitor extends Visitor {
        

    private readonly selectedRTSLayersPlayerGameInput: SelectedRTSLayersPlayerGameInput;

public constructor (selectedRTSLayersPlayerGameInput: SelectedRTSLayersPlayerGameInput){

            super();
        this.selectedRTSLayersPlayerGameInput= selectedRTSLayersPlayerGameInput;
    
}


    public visit(anyType: any): any{

    let selectedLayer: CollidableDestroyableDamageableLayer = anyType as CollidableDestroyableDamageableLayer;;
    

                        if(selectedLayer != CollidableDestroyableDamageableLayer.getNullInstance() && selectedLayer!.getType() == BuildingLayer.getStaticType())
                        
                                    {
                                    
    let rtsGameLayer: AdvancedRTSGameLayer = selectedLayer as AdvancedRTSGameLayer;;
    

    let assignWaypointsUtil: AssignWaypointsUtil = AssignWaypointsUtil.getInstance()!;;
    

    let list: BasicArrayList = this.selectedRTSLayersPlayerGameInput!.getSelectedBasicArrayList()!;;
    

    let currentRTSLayer: RTSLayer;;
    

    let unitLayer: UnitLayer;;
    




                        for (
    let index: number = list.size() -1;index >= 0; index--)
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

