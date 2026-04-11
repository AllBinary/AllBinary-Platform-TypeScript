
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
        



import { awt } from "../../../../java/awt.js";

    
import { HelpSet } from "../../../../javax/help/HelpSet.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    

export class AbstractInputRobot
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private helpSet: HelpSet
public constructor (helpSet: HelpSet){

            super();
            var helpSet = helpSet
this.setHelpSet(helpSet);
    
}


    public getHelpSet(): HelpSet{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.helpSet;
    
}


    public mouseMove(point: Point){
var point = point
this.mouseMove(point.x, point.y);
    
logUtil!.put("Moved Mouse To: x: " +point.x +" y: " +point.y, this, "moveMouse");
    
}


                //@Throws(Error::class)
            
    public mouseMoveToTarget(rectangle: Rectangle, x: Integer, y: Integer){
var rectangle = rectangle
var x = x
var y = y

    var point: Point = PointHelper.getCenterPoint(rectangle)!;
        
        
;
    
this.mouseMove(point.x +x, point.y +y);
    
logUtil!.put("Moved Mouse To: x: " +point.x +" y: " +point.y +" in the middle of: " +rectangle, this, "moveMouseToTarget");
    
}


                //@Throws(Error::class)
            
    public mouseMoveToTarget(rectangle: Rectangle){
var rectangle = rectangle
this.mouseMoveToTarget(rectangle, 0, 0);
    
}


    public mouseMove(x: Integer, y: Integer){
var x = x
var y = y



                            throw RuntimeException()
}


    setHelpSet(helpSet: HelpSet){
var helpSet = helpSet
this.helpSet= helpSet;
    
}


}
                
            

