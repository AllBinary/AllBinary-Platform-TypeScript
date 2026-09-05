
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;

      
import { GroupInterfaceCompositeInterface } from '../../../../../org/allbinary/game/identification/GroupInterfaceCompositeInterface.js';
//not GWT import const GroupInterfaceCompositeInterface = globalThis.org.allbinary.game.identification.GroupInterfaceCompositeInterface;

      
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;

      
import { LayerManagerEvent } from '../../../../../org/allbinary/layer/event/LayerManagerEvent.js';
//not GWT import const LayerManagerEvent = globalThis.org.allbinary.layer.event.LayerManagerEvent;

      
import { LayerManagerEventHandler } from '../../../../../org/allbinary/layer/event/LayerManagerEventHandler.js';
//not GWT import const LayerManagerEventHandler = globalThis.org.allbinary.layer.event.LayerManagerEventHandler;

      
import { LayerManagerEventListener } from '../../../../../org/allbinary/layer/event/LayerManagerEventListener.js';
//not GWT import const LayerManagerEventListener = globalThis.org.allbinary.layer.event.LayerManagerEventListener;

      
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GroupLayerManagerListener extends LayerManagerEventListener {
        

    private static SINGLETON: GroupLayerManagerListener = new GroupLayerManagerListener();

    public static getInstance(): GroupLayerManagerListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GroupLayerManagerListener.SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly list: BasicArrayList = new BasicArrayListD();

private constructor (){

            super();
        LayerManagerEventHandler.getInstance()!.addListener(this);
    
}


    public clear(){

    var groupList: BasicArrayList;;
    

    var size: number = this.list.size()!;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {
groupList= this.list.objectArray[index]! as BasicArrayList;
    
groupList!.clear();
    
}

}


    public getGroupSizeFromInterface(groupInterfaceCompositeInterface: GroupInterfaceCompositeInterface): number{

    var groupInterfaceArray: Group[] = groupInterfaceCompositeInterface!.getGroupInterface()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getGroupSize(groupInterfaceArray[0]!);;
    
}


    public getGroupSize(groupInterface: Group): number{

    var id: number = Math.round(groupInterface!.getGroupId());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getGroupSizeById(id);;
    
}


    public getList(groupInterface: Group): BasicArrayList{

    var id: number = Math.round(groupInterface!.getGroupId());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getListById(id);;
    
}


    getListById(groupId: number): BasicArrayList{

    var groupList: BasicArrayList = this.list.objectArray[groupId]! as BasicArrayList;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return groupList;
    
}


    getGroupSizeById(groupId: number): number{

    var groupList: BasicArrayList = this.list.objectArray[groupId]! as BasicArrayList;;
    

    var size: number = groupList!.size()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


    public areAllOtherGroupsEmpty(groupInterface: Group): boolean{

    var id: number = Math.round(groupInterface!.getGroupId());;
    

    var size: number = this.list.size()!;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {

                        if(id != index)
                        
                                    {
                                    
    var groupSize: number = this.getGroupSizeById(index)!;;
    

                        if(groupSize != 0)
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("Group Size: ")!.appendint(groupSize)!.toString(), this, "areAllOtherGroupsEmpty");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    isIdInList(id: number, excludeGroupList: BasicArrayList): boolean{

    var size: number = excludeGroupList!.size()!;;
    

    var groupInterfaceArray: Group[];;
    

    var groupInterface: Group;;
    

    var groupId: number= 0;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {
groupInterfaceArray= excludeGroupList!.objectArray[index]! as Group[];
    

    var size2: number = groupInterfaceArray!.length
                ;;
    




                        for (
    var index2: number = 0;index2 < size2; index2++)
        {
groupInterface= groupInterfaceArray[index2]!;
    
groupId= Math.round(groupInterface!.getGroupId());
    

                        if(groupId == id)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}

}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public areAllOtherGroupsLessThan(excludeGroupList: BasicArrayList, maxSize: number): boolean{

    var size: number = this.list.size()!;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {

                        if(!this.isIdInList(index, excludeGroupList))
                        
                                    {
                                    
    var groupSize: number = this.getGroupSizeById(index)!;;
    

                        if(groupSize >= maxSize)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public init(total: number){

        while(this.list.size() <= total +1)
        {
this.list.add(new BasicArrayListD());
    
}

}


    public onEvent(eventObject: AllBinaryEventObject){
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Exception.constructor)
            
    public onCreateLayerManagerEvent(layerManagerEvent: LayerManagerEvent){

    var layerInterface: AllBinaryLayer = layerManagerEvent!.getLayerInterface()!;;
    

    var groupInterfaceArray: Group[] = layerInterface!.getGroupInterface()!;;
    

    var size: number = groupInterfaceArray!.length
                ;;
    

    var id: number= 0;;
    

    var groupList: BasicArrayList;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
id= Math.round(groupInterfaceArray[index]!.getGroupId());
    
groupList= this.list.objectArray[id]! as BasicArrayList;
    

                        if(groupList == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append("id: ")!.appendint(id)!.toString(), this, "onCreateLayerManagerEvent");
    

                                    }
                                

                        if(!groupList!.contains(layerInterface))
                        
                                    {
                                    groupList!.add(layerInterface);
    

                                    }
                                
                        else {
                            
                        }
                            
}

}


                //@Throws(Exception.constructor)
            
    public onDeleteLayerManagerEvent(layerManagerEvent: LayerManagerEvent){

    var layerInterface: AllBinaryLayer = layerManagerEvent!.getLayerInterface()!;;
    

    var groupInterfaceArray: Group[] = layerInterface!.getGroupInterface()!;;
    

    var size: number = groupInterfaceArray!.length
                ;;
    

    var id: number= 0;;
    

    var groupList: BasicArrayList;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
id= Math.round(groupInterfaceArray[index]!.getGroupId());
    
groupList= this.list.objectArray[id]! as BasicArrayList;
    
groupList!.remove(layerInterface);
    
}

}


    public log(){

    var stringBuffer: StringMaker = new StringMaker();;
    

    var GROUP: string = "Group: ";;
    

    var SPACE: string = CommonSeps.getInstance()!.SPACE;;
    

    var TOTAL_LABEL: string = CommonLabels.getInstance()!.TOTAL_LABEL;;
    

    var size: number = this.list.size()!;;
    




                        for (
    var index: number = size -1;index >= 0; index--)
        {

    var groupList: BasicArrayList = this.list.objectArray[index]! as BasicArrayList;;
    
stringBuffer!.append(GROUP);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(SPACE);
    
stringBuffer!.append(TOTAL_LABEL);
    
stringBuffer!.appendint(groupList!.size());
    
stringBuffer!.append(SPACE);
    
}

this.logUtil!.putF(stringBuffer!.toString(), this, "log");
    
}


}



