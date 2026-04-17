
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
        



import { MutableTreeNode } from "../../../../../../../javax/swing/tree/MutableTreeNode.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { EventObject } from "./EventObject.js";

export class MyGraphicItemEvent extends java.util.EventObject {
        
public constructor (source: any = {})                        

                            : super(source){

            super();
            var source = source


                            //For kotlin this is before the body of the constructor.
                    
}


    public getSource(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.getSource();

                        ;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.toString();

                        ;
    
}


    public getCommand(): string{

    var myEventSource: MyGraphicItemEventSource = this.getSource();

                         as MyGraphicItemEventSource;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myEventSource!.getCommand();

                        ;
    
}


    public getTreeNode(): MutableTreeNode{

    var myEventSource: MyGraphicItemEventSource = this.getSource();

                         as MyGraphicItemEventSource;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myEventSource!.getTreeNode();

                        ;
    
}


    public getAngle(): number{

    var myEventSource: MyGraphicItemEventSource = this.getSource();

                         as MyGraphicItemEventSource;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return myEventSource!.getAngle();

                        ;
    
}


}
                
            

