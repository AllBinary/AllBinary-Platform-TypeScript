
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
        



import { Group } from "../../../../../org/allbinary/game/identification/Group.js";

    
import { GroupInterfaceCompositeInterface } from "../../../../../org/allbinary/game/identification/GroupInterfaceCompositeInterface.js";

    
import { AllBinaryLayer } from "../../../../../org/allbinary/layer/AllBinaryLayer.js";

    
import { LayerManagerEvent } from "../../../../../org/allbinary/layer/event/LayerManagerEvent.js";

    
import { LayerManagerEventHandler } from "../../../../../org/allbinary/layer/event/LayerManagerEventHandler.js";

    
import { LayerManagerEventListener } from "../../../../../org/allbinary/layer/event/LayerManagerEventListener.js";

    
import { ForcedLogUtil } from "../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    
import { EventStrings } from "../../../../../org/allbinary/logic/util/event/EventStrings.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

import {  } from "./.js";

import {  } from "./.js";

export class GroupLayerManagerListener extends LayerManagerEventListener {
        

    private SINGLETON: GroupLayerManagerListener = new GroupLayerManagerListener();
        
        

    public static getInstance(): GroupLayerManagerListener{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        
private constructor (){

            super();
            LayerManagerEventHandler.getInstance()!.addListener(this);
    
}


    public clear(){

    var groupList: BasicArrayList
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
groupList= this.list.objectArray[index]! as BasicArrayList;
    
groupList!.clear();
    
}

}


    public getGroupSize(groupInterfaceCompositeInterface: GroupInterfaceCompositeInterface): number{
    //var groupInterfaceCompositeInterface = groupInterfaceCompositeInterface

    var groupInterfaceArray: Group[] = groupInterfaceCompositeInterface!.getGroupInterface()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getGroupSize(groupInterfaceArray[0]!);

                        ;
    
}


    public getGroupSize(groupInterface: Group): number{
    //var groupInterface = groupInterface

    var id: number = groupInterface!.getGroupId();

                        .toInt();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getGroupSize(id);

                        ;
    
}


    public getList(groupInterface: Group): BasicArrayList{
    //var groupInterface = groupInterface

    var id: number = groupInterface!.getGroupId();

                        .toInt();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getList(id);

                        ;
    
}


    getList(groupId: number): BasicArrayList{
    //var groupId = groupId

    var groupList: BasicArrayList = this.list.objectArray[groupId]! as BasicArrayList;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return groupList;
    
}


    getGroupSize(groupId: number): number{
    //var groupId = groupId

    var groupList: BasicArrayList = this.list.objectArray[groupId]! as BasicArrayList;
        
        
;
    

    var size: number = groupList!.size()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


    public areAllOtherGroupsEmpty(groupInterface: Group): boolean{
    //var groupInterface = groupInterface

    var id: number = groupInterface!.getGroupId();

                        .toInt();
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {

                        if(id != index)
                        
                                    {
                                    
    var groupSize: number = this.getGroupSize(index)!;
        
        
;
    

                        if(groupSize != 0)
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append("Group Size: ")!.appendint(groupSize)!.toString(), this, "areAllOtherGroupsEmpty");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    isIdInList(id: number, excludeGroupList: BasicArrayList): boolean{
    //var id = id
    //var excludeGroupList = excludeGroupList

    var size: number = excludeGroupList!.size()!;
        
        
;
    

    var groupInterfaceArray: Group[]
;
    

    var groupInterface: Group
;
    

    var groupId: number= 0
;
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {
groupInterfaceArray= excludeGroupList!.objectArray[index]! as Array<Group?>;
    

    var size2: number = groupInterfaceArray!.length
                ;
        
        
;
    




                        for (
    var index2: number = 0;
        
        
index2 < size2; index2++)
        {
groupInterface= groupInterfaceArray[index2]!;
    
groupId= groupInterface!.getGroupId();

                        .toInt();
    

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
    //var excludeGroupList = excludeGroupList
    //var maxSize = maxSize

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {

                        if(!this.isIdInList(index, excludeGroupList);

                        )
                        
                                    {
                                    
    var groupSize: number = this.getGroupSize(index)!;
        
        
;
    

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
var total = total

        while(this.list.size() <= total +1)
        {
this.list.add(new BasicArrayList());
    
}

}


    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this);
    
}


                //@Throws(Error::class)
            
    public onCreateLayerManagerEvent(layerManagerEvent: LayerManagerEvent){
    //var layerManagerEvent = layerManagerEvent

    var layerInterface: AllBinaryLayer = layerManagerEvent!.getLayerInterface()!;
        
        
;
    

    var groupInterfaceArray: Group[] = layerInterface!.getGroupInterface()!;
        
        
;
    

    var size: number = groupInterfaceArray!.length
                ;
        
        
;
    

    var id: number= 0
;
    

    var groupList: BasicArrayList
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
id= groupInterfaceArray[index]!.getGroupId();

                        .toInt();
    
groupList= this.list.objectArray[id]! as BasicArrayList;
    

                        if(groupList == 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append("id: ")!.appendint(id)!.toString(), this, "onCreateLayerManagerEvent");
    

                                    }
                                

                        if(!groupList!.contains(layerInterface);

                        )
                        
                                    {
                                    groupList!.add(layerInterface);
    

                                    }
                                
                        else {
                            
                        }
                            
}

}


                //@Throws(Error::class)
            
    public onDeleteLayerManagerEvent(layerManagerEvent: LayerManagerEvent){
    //var layerManagerEvent = layerManagerEvent

    var layerInterface: AllBinaryLayer = layerManagerEvent!.getLayerInterface()!;
        
        
;
    

    var groupInterfaceArray: Group[] = layerInterface!.getGroupInterface()!;
        
        
;
    

    var size: number = groupInterfaceArray!.length
                ;
        
        
;
    

    var id: number= 0
;
    

    var groupList: BasicArrayList
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
id= groupInterfaceArray[index]!.getGroupId();

                        .toInt();
    
groupList= this.list.objectArray[id]! as BasicArrayList;
    
groupList!.remove(layerInterface);
    
}

}


    public log(){

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var GROUP: string = "Group: ";
        
        
;
    

    var SPACE: string = CommonSeps.getInstance()!.SPACE;
        
        
;
    

    var TOTAL_LABEL: string = CommonLabels.getInstance()!.TOTAL_LABEL;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    




                        for (
    var index: number = size -1;
        
        
index >= 0; index--)
        {

    var groupList: BasicArrayList = this.list.objectArray[index]! as BasicArrayList;
        
        
;
    
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
                
            

