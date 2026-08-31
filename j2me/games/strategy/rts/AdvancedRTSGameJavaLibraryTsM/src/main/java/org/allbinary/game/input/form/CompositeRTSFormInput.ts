
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      //not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      //not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      //not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      //not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      //not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      //not GWT import const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      //not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
import { BasicGeographicMap } from '../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
      //not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;

      
import { GeographicMapCompositeInterface } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCompositeInterface.js';
      //not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;

      
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RTSFormInput } from './RTSFormInput.js';
//not GWT import const  = globalThis.org.allbinary.game.input.form.RTSFormInput;

                import { WaypointRTSFormInput } from './WaypointRTSFormInput.js';
//not GWT import const  = globalThis.org.allbinary.game.input.form.WaypointRTSFormInput;

                import { UnitRTSFormInput } from './UnitRTSFormInput.js';
//not GWT import const  = globalThis.org.allbinary.game.input.form.UnitRTSFormInput;

                
export class CompositeRTSFormInput extends RTSFormInput {
        

    private readonly rtsFormInputArray: RTSFormInput[];

    private readonly itemIndex: number[];

    private readonly isPrimaryWaypointCreator: boolean;

public constructor (groupInterface: Group[], isPrimaryWaypointCreator: boolean, itemIndex: number[]){
            super(groupInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.itemIndex= itemIndex;
    
this.isPrimaryWaypointCreator= isPrimaryWaypointCreator;
    
this.rtsFormInputArray= new Array(2);
    
this.rtsFormInputArray[0]= new WaypointRTSFormInput(this.groupInterfaceArray, isPrimaryWaypointCreator);
    
this.rtsFormInputArray[1]= new UnitRTSFormInput(this.groupInterfaceArray);
    
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    

    var geographicMapCompositeInterface: GeographicMapCompositeInterface = allBinaryGameLayerManager as GeographicMapCompositeInterface;;
    

    var geographicMapInterface: BasicGeographicMap = geographicMapCompositeInterface!.getGeographicMapInterface()[0]!;;
    

    var size: number = this.rtsFormInputArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.rtsFormInputArray[index]!.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    
}

}


                //@Throws(Exception.constructor)
            
    public processAtPoint(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint){

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;;
    

    var index: number = scrollSelectionForm!.getSelectedIndexForPoint(point)!;;
    

                        if(this.isStickyItemSelected() && associatedRtsLayer == CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    
                        if(this.getSelectedStickyItemIndex() <= this.itemIndex[0])
                        
                                    {
                                    this.rtsFormInputArray[0]!.processAtPoint(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);
    

                                    }
                                

                                    }
                                
                             else 
                        if(index > this.itemIndex[0])
                        
                                    {
                                    this.rtsFormInputArray[1]!.processAtPoint(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public processGameSpecific(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, index: number){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.putF(CommonLabels.getInstance()!.INDEX_LABEL +index +" > " +this.itemIndex[0], this, commonStrings!.PROCESS);
    

                        if(this.isStickyItemSelected() && associatedRtsLayer == CollidableDestroyableDamageableLayer.getNullInstance())
                        
                                    {
                                    
                        if(this.getSelectedStickyItemIndex() <= this.itemIndex[0])
                        
                                    {
                                    this.rtsFormInputArray[0]!.processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    

                                    }
                                

                                    }
                                
                             else 
                        if(index > this.itemIndex[0])
                        
                                    {
                                    this.rtsFormInputArray[1]!.processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public processSticky(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInputArray[0]!.processSticky(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);;
    
}


                //@Throws(Exception.constructor)
            
    public processStickyGameSpecific(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, index: number){
this.rtsFormInputArray[0]!.processStickyGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    
}


    public getSelectedStickyItemIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInputArray[0]!.getSelectedStickyItemIndex();;
    
}


    public isStickyItemSelected(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInputArray[0]!.isStickyItemSelected();;
    
}


    public setStickyItemSelected(stickyItemSelected: boolean){
this.rtsFormInputArray[0]!.setStickyItemSelected(stickyItemSelected);
    
}


    public getSelectedStickyItem(): ABCustomItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.rtsFormInputArray[0]!.getSelectedStickyItem();;
    
}


    public setSelectedStickyItem(selectedStickyItem: ABCustomItem){
this.rtsFormInputArray[0]!.setSelectedStickyItem(selectedStickyItem);
    
}


}



