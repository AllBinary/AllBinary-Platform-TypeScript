
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
        



import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ScrollMapEvent extends AllBinaryEventObject {
        

    private dx: number= 0

    private dy: number= 0
public constructor (anyType: any = {})                        

                            : super(anyType){

            super();
            var anyType = anyType


                            //For kotlin this is before the body of the constructor.
                    
}


    public setDx(dx: number){
var dx = dx
this.dx= dx;
    
}


    public getDx(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dx;
    
}


    public setDy(dy: number){
var dy = dy
this.dy= dy;
    
}


    public getDy(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return dy;
    
}


    public setDxDy(dx: number, dy: number){
var dx = dx
var dy = dy
this.dx= dx;
    
this.dy= dy;
    
}


}
                
            

