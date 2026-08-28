
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
        



            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { GroupCommonFactory } from '../../../../../org/allbinary/game/identification/GroupCommonFactory.js';
      const GroupCommonFactory = globalThis.org.allbinary.game.identification.GroupCommonFactory;

      
//not game specific package import { RTSLayer } from '../../../../../org/allbinary/game/layer/RTSLayer.js';
      const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;

      
//not game specific package import { RTSPlayerLayerInterface } from '../../../../../org/allbinary/game/layer/RTSPlayerLayerInterface.js';
      const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;

      
//not game specific package import { LayerInterfaceFactoryImageItem } from '../../../../../org/allbinary/game/layer/item/LayerInterfaceFactoryImageItem.js';
      const LayerInterfaceFactoryImageItem = globalThis.org.allbinary.game.layer.item.LayerInterfaceFactoryImageItem;

      
//not game specific package import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
      const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
      const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;

      
//not game specific package import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
      const Group = globalThis.org.allbinary.game.identification.Group;

      
//not game specific package import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
      const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;

      
//not game specific package import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
      const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;

      
//not game specific package import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
      const GPoint = globalThis.org.allbinary.graphics.GPoint;

      
//not game specific package import { ScrollSelectionForm } from '../../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
      const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;

      
//not game specific package import { AllBinaryLayerManager } from '../../../../../org/allbinary/layer/AllBinaryLayerManager.js';
      const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;

      
//not game specific package import { LayerInterfaceFactoryInterface } from '../../../../../org/allbinary/layer/LayerInterfaceFactoryInterface.js';
      const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { GeographicMapCellPosition } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
      const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;

      
//not game specific package import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
      const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RTSFormInput
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly groupCommonFactory: GroupCommonFactory = GroupCommonFactory.getInstance()!;

    private readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();

    readonly newUnconstructedRTSLayerInterfaceArray: CollidableDestroyableDamageableLayer[] = new Array(7);

    readonly groupInterfaceArray: Group[];

    private selectedGeographicCellPosition: GeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;

    private stickyItemSelected: boolean= false;

    private selectedStickyItemIndex: number= 0;

    private selectedStickyItem: ABCustomItem = ABCustomItem.getNullInstance()!;

public constructor (groupInterfaceArray: Group[]){

            super();
        
    var size: number = this.newUnconstructedRTSLayerInterfaceArray!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
this.newUnconstructedRTSLayerInterfaceArray[index]= CollidableDestroyableDamageableLayer.getNullInstance();
    
}

this.groupInterfaceArray= groupInterfaceArray;
    
this.hashtable.put(DirectionFactory.getInstance()!.NAME, DirectionFactory.getInstance()!.DOWN);
    

                        if(groupInterfaceArray != 
                                    null
                                )
                        
                                    {
                                    this.hashtable.put(this.groupCommonFactory!.ID, groupInterfaceArray);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public setAllBinaryGameLayerManager(allBinaryGameLayerManager: AllBinaryGameLayerManager){
}


                //@Throws(Exception.constructor)
            
    public processAtPoint(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint){

    var index: number = this.getIndexAt(rtsPlayerLayerInterface, point)!;;
    

                        if(index < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;;
    

    var item: ABCustomItem = scrollSelectionForm!.get(index)!;;
    

                        if(item == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    
}


                //@Throws(Exception.constructor)
            
    public process(layerManager: AllBinaryLayerManager){
this.setAllBinaryGameLayerManager(layerManager as AllBinaryGameLayerManager);
    
}


                //@Throws(Exception.constructor)
            
    public processGameSpecific(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, index: number){
}


                //@Throws(Exception.constructor)
            
    public processSticky(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, point: GPoint): boolean{

    var index: number = this.getIndexAt(rtsPlayerLayerInterface, point)!;;
    

                        if(index < 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;;
    

    var item: ABCustomItem = scrollSelectionForm!.get(index)!;;
    

                        if(item == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
this.processStickyGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Exception.constructor)
            
    public processStickyGameSpecific(associatedRtsLayer: CollidableDestroyableDamageableLayer, rtsPlayerLayerInterface: RTSPlayerLayerInterface, layerManager: AllBinaryLayerManager, item: ABCustomItem, index: number){
}


                //@Throws(Exception.constructor)
            
    getItemAt(rtsPlayerLayerInterface: RTSPlayerLayerInterface, point: GPoint): ABCustomItem{
this.logUtil!.putF(new StringMaker().append("Point: ")!.append(StringUtil.getInstance()!.toString(point))!.toString(), this, "getItemAt");
    

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scrollSelectionForm!.getSelectedItem(point);;
    
}


                //@Throws(Exception.constructor)
            
    getIndexAt(rtsPlayerLayerInterface: RTSPlayerLayerInterface, point: GPoint): number{
this.logUtil!.putF(new StringMaker().append("Point: ")!.append(StringUtil.getInstance()!.toString(point))!.toString(), this, "getItemAt");
    

    var scrollSelectionForm: ScrollSelectionForm = rtsPlayerLayerInterface!.getCurrentScrollSelectionForm()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return scrollSelectionForm!.getSelectedIndexForPoint(point);;
    
}


                //@Throws(Exception.constructor)
            
    getInstance(layerManager: AllBinaryLayerManager, aItem: ABCustomItem, geographicMapCellPosition: GeographicMapCellPosition): CollidableDestroyableDamageableLayer{

    var item: LayerInterfaceFactoryImageItem = aItem as LayerInterfaceFactoryImageItem;;
    

    var layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface = item.getLayerInterfaceFactoryInterface()!;;
    

    var cellPoint: GPoint = geographicMapCellPosition!.getPoint()!;;
    

                        if(layerInterfaceFactoryInterface != 
                                    null
                                )
                        
                                    {
                                    this.hashtable.put(AllBinaryGameLayerManager.ID, layerManager);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return layerInterfaceFactoryInterface!.getNextInstance(this.getHashtable(), cellPoint!.getX(), cellPoint!.getY(), cellPoint!.getZ()) as RTSLayer;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CollidableDestroyableDamageableLayer.getNullInstance();;
    
}


    public getSelectedGeographicCellPosition(): GeographicMapCellPosition{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedGeographicCellPosition;
    
}


    public setSelectedGeographicCellPosition(selectedGeographicCellPosition: GeographicMapCellPosition){
this.logUtil!.putF(new StringMaker().append("Selected GeographicMapCellPosition: ")!.append(selectedGeographicCellPosition!.toString())!.toString(), this, "setSelectedGeographicCellPosition");
    
this.selectedGeographicCellPosition= selectedGeographicCellPosition;
    
}


    public isStickyItemSelected(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.stickyItemSelected;
    
}


    public setStickyItemSelected(stickyItemSelected: boolean){
this.stickyItemSelected= stickyItemSelected;
    
}


    public getSelectedStickyItem(): ABCustomItem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedStickyItem;
    
}


    public setSelectedStickyItem(selectedStickyItem: ABCustomItem){
this.selectedStickyItem= selectedStickyItem;
    
}


    public getSelectedStickyItemIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedStickyItemIndex;
    
}


    public setSelectedStickyItemIndex(selectedStickyItemIndex: number){
this.selectedStickyItemIndex= selectedStickyItemIndex;
    
}


    public getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


}



