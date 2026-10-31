
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

        


            import { Object } from '../../../../../../../java/lang/Object.js';
        
import { MutableTreeNode } from '../../../../../../../javax/swing/tree/MutableTreeNode.js';
//not GWT import const MutableTreeNode

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MyCanvasEventSource
            extends Object
         {
        

    private command: string;

    private treeNode: MutableTreeNode;

    private angle: number = 0;

    public constructor(...args: any[]) {
        super();if(args.length === 2) {
            
            this.constructor$0(args[0], args[1]);
            
        }
        else if(args.length === 3) {
            
            this.constructor$1(args[0], args[1], args[2]);
            
        }
        
    }
    
    private constructor$0(command: string, treeNode: MutableTreeNode): void {
        this.command= command;
    
this.treeNode= treeNode;
    

    }
    
    private constructor$1(command: string, angle: number, treeNode: MutableTreeNode): void {
        this.command= command;
    
this.treeNode= treeNode;
    
this.setAngle(angle);
    

    }
    
    public getCommand(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.command;
    
}


    public getTreeNode(): MutableTreeNode{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.treeNode;
    
}


    public getAngle(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.angle;
    
}


    public setAngle(angle: number){
this.angle= angle;
    
}


}

