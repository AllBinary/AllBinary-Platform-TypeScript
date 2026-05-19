
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BaseTouchInput } from './BaseTouchInput.js';

export class TouchButtonsListBuilder extends BaseTouchInput {
        

    private readonly baseTouchInputList: BasicArrayList = new BasicArrayListD();

    addList(list: BasicArrayList){

    var size: number = this.baseTouchInputList!.size()!;
;
    

    var baseTouchInput: BaseTouchInput
;
    




                        for (
    var index: number = 0;
index < size; index++)
        {
baseTouchInput= this.baseTouchInputList!.get(index) as BaseTouchInput;
    
list.addAllList(baseTouchInput!.getList());
    
}

}


    public add(baseTouchInput: BaseTouchInput){
this.baseTouchInputList!.add(baseTouchInput);
    
}


}
                
            

