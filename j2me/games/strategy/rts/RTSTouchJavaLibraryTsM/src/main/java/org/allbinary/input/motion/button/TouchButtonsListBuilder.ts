
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

        


//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseTouchInput } from './BaseTouchInput.js';
//not GWT import - same folder const BaseTouchInput

export class TouchButtonsListBuilder extends BaseTouchInput {
        

    private readonly baseTouchInputList: BasicArrayList = new BasicArrayListD();

    addList(list: BasicArrayList){

    let size: number = this.baseTouchInputList!.size()!;;
    

    let baseTouchInput: BaseTouchInput;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
baseTouchInput= this.baseTouchInputList!.get(index) as BaseTouchInput;
    
list.addAllList(baseTouchInput!.getList());
    
}

}


    public add(baseTouchInput: BaseTouchInput){
this.baseTouchInputList!.add(baseTouchInput);
    
}


}

