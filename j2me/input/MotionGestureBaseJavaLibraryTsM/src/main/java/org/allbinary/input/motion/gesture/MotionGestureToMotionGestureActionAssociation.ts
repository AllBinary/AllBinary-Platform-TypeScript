
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
        



import { CompleteMotionGestureInputEvent } from "../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

export class MotionGestureToMotionGestureActionAssociation
            extends Object
         {
        

    private list: BasicArrayList

    private motionGestureAction: CompleteMotionGestureInputEvent
public constructor (list: BasicArrayList, commandAction: CompleteMotionGestureInputEvent){

            super();
            var list = list
var commandAction = commandAction
this.list= list
this.motionGestureAction= commandAction
}


    public getMotionGesture(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


    public setMotionGestures(list: BasicArrayList){
var list = list
this.list= list
}


    public getCommandAction(): CompleteMotionGestureInputEvent{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return motionGestureAction;
    
}


    public setMotionGestureAction(commandAction: CompleteMotionGestureInputEvent){
var commandAction = commandAction
this.motionGestureAction= commandAction
}


    public isMotionGestureArrayEquals(aList: BasicArrayList): boolean{
var aList = aList

    var size: number = aList!.size()!;
        
        


                        if(this.list.size() != size)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                




                        for (
    var i: number = size -1;
        
        
i >= 0; i--)
        {

                        if(aList!.objectArray[i] != this.list.objectArray[i])
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


}
                
            

