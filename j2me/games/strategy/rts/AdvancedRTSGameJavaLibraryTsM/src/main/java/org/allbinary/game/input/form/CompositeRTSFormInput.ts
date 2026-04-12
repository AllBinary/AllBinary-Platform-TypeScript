
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
        



import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { ScrollSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { BasicGeographicMap } from "../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js";

    
import { GeographicMapCompositeInterface } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    

export class CompositeRTSFormInput extends RTSFormInput {
        

    private readonly rtsFormInputArray: RTSFormInput[]

    private readonly itemIndex: number[]

    private readonly isPrimaryWaypointCreator: boolean
public constructor (groupInterface: Group[], isPrimaryWaypointCreator: boolean)                        

                            : this(groupInterface, isPrimaryWaypointCreator, intArrayOf(0;
        
        )){

            super();
                //var groupInterface = groupInterface
    //var isPrimaryWaypointCreator = isPrimaryWaypointCreator


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (groupInterface: Group[], isPrimaryWaypointCreator: boolean, itemIndex: number[])                        

                            : super(groupInterface){

            super();
                //var groupInterface = groupInterface
    //var isPrimaryWaypointCreator = isPrimaryWaypointCreator
    //var itemIndex = itemIndex


                            //For kotlin this is before the body of the constructor.
                    
this.itemIndex= itemIndex;
    
this.isPrimaryWaypointCreator= isPrimaryWaypointCreator;
    
this.rtsFormInputArray= new Array(2);
    
this.rtsFormInputArray[0]= new WaypointRTSFormInput(this.groupInterfaceArray, isPrimaryWaypointCreator);
    
this.rtsFormInputArray[1]= new UnitRTSFormInput(this.groupInterfaceArray);
    
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;
        
        
;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;
        
        
;
    

    var size: number = this.rtsFormInputArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.rtsFormInputArray[index]!.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    
}

}


                //@Throws(Error::class)
            
    public process(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint){
    //var associatedRtsLayer = associatedRtsLayer
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
var layerManager = layerManager
var point = point

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;
        
        
;
    

    var index: number = scrollSelectionForm!.getSelectedIndex(point)!;
        
        
;
    

                        if(this.isStickyItemSelected() && associatedRtsLayer == 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getSelectedStickyItemIndex() <= this.itemIndex[0])
                        
                                    {
                                    this.rtsFormInputArray[0]!.process(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);
    

                                    }
                                

                                    }
                                
                             else 
                        if(index > this.itemIndex[0])
                        
                                    {
                                    this.rtsFormInputArray[1]!.process(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public process(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: CustomItem, index: number){
    //var associatedRtsLayer = associatedRtsLayer
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
var layerManager = layerManager
var item = item
var index = index

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(CommonLabels.getInstance()!.INDEX_LABEL +index +" > " +this.itemIndex[0], this, commonStrings!.PROCESS);
    

                        if(this.isStickyItemSelected() && associatedRtsLayer == 
                                    null
                                )
                        
                                    {
                                    
                        if(this.getSelectedStickyItemIndex() <= this.itemIndex[0])
                        
                                    {
                                    this.rtsFormInputArray[0]!.process(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    

                                    }
                                

                                    }
                                
                             else 
                        if(index > this.itemIndex[0])
                        
                                    {
                                    this.rtsFormInputArray[1]!.process(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public processSticky(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint): boolean{
    //var associatedRtsLayer = associatedRtsLayer
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
var layerManager = layerManager
var point = point



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInputArray[0]!.processSticky(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);

                        ;
    
}


                //@Throws(Error::class)
            
    public processSticky(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: CustomItem, index: number){
    //var associatedRtsLayer = associatedRtsLayer
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
var layerManager = layerManager
var item = item
var index = index
this.rtsFormInputArray[0]!.processSticky(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    
}


    public getSelectedStickyItemIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInputArray[0]!.getSelectedStickyItemIndex();

                        ;
    
}


    public isStickyItemSelected(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInputArray[0]!.isStickyItemSelected();

                        ;
    
}


    public setStickyItemSelected(stickyItemSelected: boolean){
var stickyItemSelected = stickyItemSelected
this.rtsFormInputArray[0]!.setStickyItemSelected(stickyItemSelected);
    
}


    public getSelectedStickyItem(): CustomItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInputArray[0]!.getSelectedStickyItem();

                        ;
    
}


    public setSelectedStickyItem(selectedStickyItem: CustomItem){
var selectedStickyItem = selectedStickyItem
this.rtsFormInputArray[0]!.setSelectedStickyItem(selectedStickyItem);
    
}


}
                
            

