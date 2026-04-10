
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2007 AllBinary 
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
        



import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class TouchButtonsListBuilder extends BaseTouchInput {
        

    private readonly baseTouchInputList: BasicArrayList = new BasicArrayList();
        
        

    add(list: BasicArrayList){
    //var list = list

    var size: number = baseTouchInputList!.size()!;
        
        


    var baseTouchInput: BaseTouchInput





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
baseTouchInput= baseTouchInputList!.get(index) as BaseTouchInput
list.addAll(baseTouchInput!.getList())
}

}


    public add(baseTouchInput: BaseTouchInput){
var baseTouchInput = baseTouchInput
this.baseTouchInputList!.add(baseTouchInput)
}


}
                
            

