
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
        



            import { Object } from '../../../../../java/lang/Object.js';


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicAccelerationProperties
            extends Object
         {
        

    private forward: number= 0

    private reverse: number= 0
public constructor (forward: number, reverse: number){

            super();
        this.setForward(forward);
    
this.setReverse(reverse);
    
}


    public setReverse(reverse: number){
this.reverse= reverse;
    
}


    public getReverse(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.reverse;
    
}


    public setForward(forward: number){
this.forward= forward;
    
}


    public getForward(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.forward;
    
}


}
                
            

