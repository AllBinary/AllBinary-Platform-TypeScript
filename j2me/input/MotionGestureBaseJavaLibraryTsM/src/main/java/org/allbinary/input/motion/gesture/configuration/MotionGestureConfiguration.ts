
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
        



import { CompleteMotionGestureInputEvent } from "../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js";

    
import { BasicColor } from "../../../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { BasicColorFactory } from "../../../../../../org/allbinary/graphics/color/BasicColorFactory.js";

    
import { MotionGestureToMotionGestureActionAssociation } from "../../../../../../org/allbinary/input/motion/gesture/MotionGestureToMotionGestureActionAssociation.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    










        



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
        
        

    private activeCommands: BasicArrayList = new BasicArrayList();
        
        
public constructor (){

            super();
            }


    public getMotionGestureAction(index: number): CompleteMotionGestureInputEvent{
var index = index

                        if(index >= activeCommands!.size())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CompleteMotionGestureInputEvent.NULL_COMPLETE_MOTION_GESTURE_INPUT_EVENT;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return activeCommands!.objectArray[index]! as CompleteMotionGestureInputEvent;
    
}


    public addMotionGestureAction(list: BasicArrayList, commandAction: CompleteMotionGestureInputEvent){
var list = list
var commandAction = commandAction
activeCommands!.add(new MotionGestureToMotionGestureActionAssociation(list, commandAction));
    
}


    public clearMotionGestureAction(){
activeCommands!.clear();
    
}


    public getAssociateCommandActionsList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return activeCommands;
    
}


    public isDiagonalMotionGestureAllowed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return diagonalMotionGestureAllowed;
    
}


    public isExecutingActionsAllowed(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return executingActions;
    
}


    public setExecutingActionsAllowed(executingActionAllowed: boolean){
var executingActionAllowed = executingActionAllowed
this.executingActions= executingActionAllowed;
    
}


    public setDiagonalMotionGestureAllowed(diagonalMotionGestureAllowed: boolean){
var diagonalMotionGestureAllowed = diagonalMotionGestureAllowed
this.diagonalMotionGestureAllowed= diagonalMotionGestureAllowed;
    
}


    public getDiagonalTolerance(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return diagonalTolerance;
    
}


    public setDiagonalTolerance(diagonalTolerance: number){
var diagonalTolerance = diagonalTolerance
this.diagonalTolerance= diagonalTolerance;
    
}


    public getMinimumMotionGesture(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minimumMotionGesture;
    
}


    public setMinimumMotionGesture(minimumMotionGesture: number){
var minimumMotionGesture = minimumMotionGesture
this.minimumMotionGesture= minimumMotionGesture;
    
}


    public getButton(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return button;
    
}


    public setButton(button: string){
var button = button
this.button= button;
    
}


    public getColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return color;
    
}


    public setColor(color: BasicColor){
var color = color
this.color= color;
    
}


    public getMouseButtonMask(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mouseButtonMask;
    
}


    public setMouseButtonMask(mouseButtonMask: number){
var mouseButtonMask = mouseButtonMask
this.mouseButtonMask= mouseButtonMask;
    
}


}
                
            

