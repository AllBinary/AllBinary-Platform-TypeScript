
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
        
import { Group } from '../../../../../org/allbinary/game/identification/Group.js';
//not GWT import const Group

import { GroupInterfaceCompositeInterface } from '../../../../../org/allbinary/game/identification/GroupInterfaceCompositeInterface.js';
//not GWT import const GroupInterfaceCompositeInterface

import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer

import { LayerManagerEvent } from '../../../../../org/allbinary/layer/event/LayerManagerEvent.js';
//not GWT import const LayerManagerEvent

import { LayerManagerEventHandler } from '../../../../../org/allbinary/layer/event/LayerManagerEventHandler.js';
//not GWT import const LayerManagerEventHandler

import { LayerManagerEventListener } from '../../../../../org/allbinary/layer/event/LayerManagerEventListener.js';
//not GWT import const LayerManagerEventListener

//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
type ForcedLogUtil<T = any, U = any> = typeof ForcedLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ForcedLogUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject

import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
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

    let groupList: BasicArrayList;;
    

    let size: number = this.list.size()!;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {
groupList= this.list.objectArray[index]! as BasicArrayList;
    
groupList!.clear();
    
}

}


    public getGroupSizeFromInterface(groupInterfaceCompositeInterface: GroupInterfaceCompositeInterface): number{

    let groupInterfaceArray: Group[] = groupInterfaceCompositeInterface!.getGroupInterface()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getGroupSize(groupInterfaceArray[0]!);;
    
}


    public getGroupSize(groupInterface: Group): number{

    let id: number = globalThis.Math.trunc(groupInterface!.getGroupId());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getGroupSizeById(id);;
    
}


    public getList(groupInterface: Group): BasicArrayList{

    let id: number = globalThis.Math.trunc(groupInterface!.getGroupId());;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getListById(id);;
    
}


    getListById(groupId: number): BasicArrayList{

    let groupList: BasicArrayList = this.list.objectArray[groupId]! as BasicArrayList;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return groupList;
    
}


    getGroupSizeById(groupId: number): number{

    let groupList: BasicArrayList = this.list.objectArray[groupId]! as BasicArrayList;;
    

    let size: number = groupList!.size()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


    public areAllOtherGroupsEmpty(groupInterface: Group): boolean{

    let id: number = globalThis.Math.trunc(groupInterface!.getGroupId());;
    

    let size: number = this.list.size()!;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {

                        if(id != index)
                        
                                    {
                                    
    let groupSize: number = this.getGroupSizeById(index)!;;
    

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

    let size: number = excludeGroupList!.size()!;;
    

    let groupInterfaceArray: Group[];;
    

    let groupInterface: Group;;
    

    let groupId: number= 0;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {
groupInterfaceArray= excludeGroupList!.objectArray[index]! as Group[];
    

    let size2: number = groupInterfaceArray!.length
                ;;
    




                        for (
    let index2: number = 0;index2 < size2; index2++)
        {
groupInterface= groupInterfaceArray[index2]!;
    
groupId= globalThis.Math.trunc(groupInterface!.getGroupId());
    

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

    let size: number = this.list.size()!;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {

                        if(!this.isIdInList(index, excludeGroupList))
                        
                                    {
                                    
    let groupSize: number = this.getGroupSizeById(index)!;;
    

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

    let layerInterface: AllBinaryLayer = layerManagerEvent!.getLayerInterface()!;;
    

    let groupInterfaceArray: Group[] = layerInterface!.getGroupInterface()!;;
    

    let size: number = groupInterfaceArray!.length
                ;;
    

    let id: number= 0;;
    

    let groupList: BasicArrayList;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
id= globalThis.Math.trunc(groupInterfaceArray[index]!.getGroupId());
    
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

    let layerInterface: AllBinaryLayer = layerManagerEvent!.getLayerInterface()!;;
    

    let groupInterfaceArray: Group[] = layerInterface!.getGroupInterface()!;;
    

    let size: number = groupInterfaceArray!.length
                ;;
    

    let id: number= 0;;
    

    let groupList: BasicArrayList;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
id= globalThis.Math.trunc(groupInterfaceArray[index]!.getGroupId());
    
groupList= this.list.objectArray[id]! as BasicArrayList;
    
groupList!.remove(layerInterface);
    
}

}


    public log(){

    let stringBuffer: StringMaker = new StringMaker();;
    

    let GROUP: string = "Group: ";;
    

    let SPACE: string = CommonSeps.getInstance()!.SPACE;;
    

    let TOTAL_LABEL: string = CommonLabels.getInstance()!.TOTAL_LABEL;;
    

    let size: number = this.list.size()!;;
    




                        for (
    let index: number = size -1;index >= 0; index--)
        {

    let groupList: BasicArrayList = this.list.objectArray[index]! as BasicArrayList;;
    
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

