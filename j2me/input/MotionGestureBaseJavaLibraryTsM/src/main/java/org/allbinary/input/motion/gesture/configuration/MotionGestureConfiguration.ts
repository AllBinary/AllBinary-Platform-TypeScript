
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
import { CompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
      
import { BasicColor } from '../../../../../../org/allbinary/graphics/color/BasicColor.js';
      
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
      
import { MotionGestureToMotionGestureActionAssociation } from '../../../../../../org/allbinary/input/motion/gesture/MotionGestureToMotionGestureActionAssociation.js';
      
import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
      
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MotionGestureConfiguration
            extends Object
         {
        

    private diagonalMotionGestureAllowed: boolean = true;

    private diagonalTolerance: number = 7;

    private minimumMotionGesture: number = 9;

    private button: string = StringUtil.getInstance()!.EMPTY_STRING;

    private color: BasicColor = BasicColorFactory.getInstance()!.BLUE;

    private executingActions: boolean = true;

    private mouseButtonMask: number = 0;

    private activeCommands: BasicArrayList = new BasicArrayListD();

public constructor (){

            super();
        }


    public addMotionGestureAction(list: BasicArrayList, commandAction: CompleteMotionGestureInputEvent){
this.activeCommands!.add(new MotionGestureToMotionGestureActionAssociation(list, commandAction));
    
}


    public clearMotionGestureAction(){
this.activeCommands!.clear();
    
}


    public getAssociateCommandActionsList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.activeCommands;
    
}


    public isDiagonalMotionGestureAllowed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.diagonalMotionGestureAllowed;
    
}


    public isExecutingActionsAllowed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.executingActions;
    
}


    public setExecutingActionsAllowed(executingActionAllowed: boolean){
this.executingActions= executingActionAllowed;
    
}


    public setDiagonalMotionGestureAllowed(diagonalMotionGestureAllowed: boolean){
this.diagonalMotionGestureAllowed= diagonalMotionGestureAllowed;
    
}


    public getDiagonalTolerance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.diagonalTolerance;
    
}


    public setDiagonalTolerance(diagonalTolerance: number){
this.diagonalTolerance= diagonalTolerance;
    
}


    public getMinimumMotionGesture(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.minimumMotionGesture;
    
}


    public setMinimumMotionGesture(minimumMotionGesture: number){
this.minimumMotionGesture= minimumMotionGesture;
    
}


    public getButton(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.button;
    
}


    public setButton(button: string){
this.button= button;
    
}


    public getColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.color;
    
}


    public setColor(color: BasicColor){
this.color= color;
    
}


    public getMouseButtonMask(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mouseButtonMask;
    
}


    public setMouseButtonMask(mouseButtonMask: number){
this.mouseButtonMask= mouseButtonMask;
    
}


}
                
            

