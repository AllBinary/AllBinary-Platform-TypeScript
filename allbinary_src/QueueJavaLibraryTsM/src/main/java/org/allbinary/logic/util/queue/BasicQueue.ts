
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../java/util/Vector.js";

    

export class BasicQueue
            extends Object
         {
        

    readonly queueVector: Vector = new Vector();
        
        
protected constructor (){

            super();
            }


                //@Throws(Error::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    offer(anyType: any = {}): boolean{
var anyType = anyType
this.queueVector!.add(anyType);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    remove(anyType: any = {}){
var anyType = anyType
this.queueVector!.remove(anyType);
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    removeLast(): any = {}{

    var anyType: any = {} = this.queueVector!.lastElement()!;
        
        
;
    
this.queueVector!.remove(anyType);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType;
    
}


}
                
            

