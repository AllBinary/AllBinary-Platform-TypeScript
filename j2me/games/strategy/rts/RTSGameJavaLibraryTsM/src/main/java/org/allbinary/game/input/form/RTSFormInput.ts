
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
        



            import Hashtable from "@ohos.util.HashMap";
        

//import { Hashtable } from "../../../../../java/util/Hashtable.js";

    
import { RTSLayer } from "../../../../../org/allbinary/game/layer/RTSLayer.js";

    
import { RTSPlayerLayerInterface } from "../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js";

    
import { LayerInterfaceFactoryImageItem } from "../../../../../org/allbinary/game/layer/item/LayerInterfaceFactoryImageItem.js";

    
import { CustomItem } from "../../../../../org/allbinary/graphics/form/item/CustomItem.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { DirectionFactory } from "../../../../../org/allbinary/direction/DirectionFactory.js";

    
import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { AllBinaryGameLayerManager } from "../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js";

    
import { CollidableDestroyableDamageableLayer } from "../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js";

    
import { GPoint } from "../../../../../org/allbinary/graphics/GPoint.js";

    
import { ScrollSelectionForm } from "../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js";

    
import { AllBinaryLayerManager } from "../../../../../org/allbinary/layer/AllBinaryLayerManager.js";

    
import { LayerInterfaceFactoryInterface } from "../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { GeographicMapCellPosition } from "../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js";

    
import { SimpleGeographicMapCellPositionFactory } from "../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js";

    

export class RTSFormInput
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();
        
        

    readonly newUnconstructedRTSLayerInterfaceArray: CollidableDestroyableDamageableLayer[] = new Array(7);
        
        

    readonly groupInterfaceArray: Group[]

    private selectedGeographicCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        
        

    private stickyItemSelected: boolean= false

    private selectedStickyItemIndex: number= 0

    private selectedStickyItem: CustomItem = CustomItem.NULL_CUSTOM_ITEM;
        
        
public constructor (groupInterfaceArray: Group[]){

            super();
                //var groupInterfaceArray = groupInterfaceArray

    var size: number = newUnconstructedRTSLayerInterfaceArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
newUnconstructedRTSLayerInterfaceArray[index]= CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
    
}

this.groupInterfaceArray= groupInterfaceArray;
    
this.hashtable.put(DirectionFactory.getInstance()!.NAME, DirectionFactory.getInstance()!.DOWN);
    

                        if(groupInterfaceArray != 
                                    null
                                )
                        
                                    {
                                    this.hashtable.put(Group.ID, groupInterfaceArray);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
    //var allBinaryGameLayerManager = allBinaryGameLayerManager
}


                //@Throws(Error::class)
            
    public process(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint){
    //var associatedRtsLayer = associatedRtsLayer
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var point = point

    var index: number = this.getIndexAt(rtsPlayerLayerInterface, point)!;
        
        
;
    

                        if(index < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;
        
        
;
    

    var item: CustomItem = scrollSelectionForm!.get(index)!;
        
        
;
    

                        if(item == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.process(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    
}


                //@Throws(Error::class)
            
    public process(layerManager: AllBinaryLayerManager){
    //var layerManager = layerManager
this.setAllBinaryGameLayerManager(layerManager as AllBinaryGameLayerManager);
    
}


                //@Throws(Error::class)
            
    public process(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: CustomItem, index: number){
    //var associatedRtsLayer = associatedRtsLayer
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var item = item
    //var index = index
}


                //@Throws(Error::class)
            
    public processSticky(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint): boolean{
    //var associatedRtsLayer = associatedRtsLayer
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var layerManager = layerManager
    //var point = point

    var index: number = this.getIndexAt(rtsPlayerLayerInterface, point)!;
        
        
;
    

                        if(index < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;
        
        
;
    

    var item: CustomItem = scrollSelectionForm!.get(index)!;
        
        
;
    

                        if(item == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
this.processSticky(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public processSticky(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: CustomItem, index: number){
var associatedRtsLayer = associatedRtsLayer
var rtsPlayerLayerInterface = rtsPlayerLayerInterface
var layerManager = layerManager
var item = item
var index = index
}


                //@Throws(Error::class)
            
    getItemAt(rtsPlayerLayerInterface: RTSPlayerLayerInterface, point: GPoint): CustomItem{
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var point = point
logUtil!.put(StringMaker().
                            append("Point: ")!.append(StringUtil.getInstance()!.toString(point))!.toString(), this, "getItemAt");
    

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scrollSelectionForm!.getSelectedItem(point);

                        ;
    
}


                //@Throws(Error::class)
            
    getIndexAt(rtsPlayerLayerInterface: RTSPlayerLayerInterface, point: GPoint): number{
    //var rtsPlayerLayerInterface = rtsPlayerLayerInterface
    //var point = point
logUtil!.put(StringMaker().
                            append("Point: ")!.append(StringUtil.getInstance()!.toString(point))!.toString(), this, "getItemAt");
    

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scrollSelectionForm!.getSelectedIndex(point);

                        ;
    
}


                //@Throws(Error::class)
            
    getInstance(layerManager: AllBinaryLayerManager, aItem: CustomItem, geographicMapCellPosition: GeographicMapCellPosition): CollidableDestroyableDamageableLayer{
    //var layerManager = layerManager
    //var aItem = aItem
    //var geographicMapCellPosition = geographicMapCellPosition

    var item: LayerInterfaceFactoryImageItem = aItem as LayerInterfaceFactoryImageItem;
        
        
;
    

    var layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface = item.getLayerInterfaceFactoryInterface()!;
        
        
;
    

    var cellPoint: GPoint = geographicMapCellPosition!.getPoint()!;
        
        
;
    

                        if(layerInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    hashtable.put(AllBinaryGameLayerManager.ID, layerManager);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerInterfaceFactoryInterface!.getInstance(getHashtable(), cellPoint!.getX(), cellPoint!.getY(), cellPoint!.getZ());

                         as RTSLayer;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollidableDestroyableDamageableLayer.NULL_COLLIDABLE_DESTROYABLE_DAMAGE_LAYER;
    
}


    public getSelectedGeographicCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return selectedGeographicCellPosition;
    
}


    public setSelectedGeographicCellPosition(selectedGeographicCellPosition: GeographicMapCellPosition){
var selectedGeographicCellPosition = selectedGeographicCellPosition
logUtil!.put(StringMaker().
                            append("Selected GeographicMapCellPosition: ")!.append(selectedGeographicCellPosition!.toString())!.toString(), this, "setSelectedGeographicCellPosition");
    
this.selectedGeographicCellPosition= selectedGeographicCellPosition;
    
}


    public isStickyItemSelected(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stickyItemSelected;
    
}


    public setStickyItemSelected(stickyItemSelected: boolean){
var stickyItemSelected = stickyItemSelected
this.stickyItemSelected= stickyItemSelected;
    
}


    public getSelectedStickyItem(): CustomItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return selectedStickyItem;
    
}


    public setSelectedStickyItem(selectedStickyItem: CustomItem){
var selectedStickyItem = selectedStickyItem
this.selectedStickyItem= selectedStickyItem;
    
}


    public getSelectedStickyItemIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return selectedStickyItemIndex;
    
}


    public setSelectedStickyItemIndex(selectedStickyItemIndex: number){
var selectedStickyItemIndex = selectedStickyItemIndex
this.selectedStickyItemIndex= selectedStickyItemIndex;
    
}


    public getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable;
    
}


}
                
            

