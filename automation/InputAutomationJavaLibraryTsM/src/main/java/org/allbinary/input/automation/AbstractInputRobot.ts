
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { awt } from '../../../../java/awt.js';
//not GWT import const awt = globalThis.java.awt;

      
import { HelpSet } from '../../../../javax/help/HelpSet.js';
//not GWT import const HelpSet = globalThis.javax.help.HelpSet;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Point } from './Point.js';
//not GWT import - same folder const Point = globalThis.org.allbinary.input.automation.Point;

                import { PointHelper } from './PointHelper.js';
//not GWT import - same folder const PointHelper = globalThis.org.allbinary.input.automation.PointHelper;

                import { Rectangle } from './Rectangle.js';
//not GWT import - same folder const Rectangle = globalThis.org.allbinary.input.automation.Rectangle;

                
export class AbstractInputRobot
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private helpSet: HelpSet;

public constructor (helpSet: HelpSet){

            super();
        this.setHelpSet(helpSet);
    
}


    public getHelpSet(): HelpSet{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.helpSet;
    
}


    public mouseMove(point: Point){
this.mouseMove(point.x, point.y);
    
this.logUtil!.putF("Moved Mouse To: x: " +point.x +" y: " +point.y, this, "moveMouse");
    
}


                //@Throws(Exception.constructor)
            
    public mouseMoveToTarget(rectangle: Rectangle, x: Integer, y: Integer){

    var point: Point = PointHelper.getCenterPoint(rectangle)!;;
    
this.mouseMove(point.x +x, point.y +y);
    
this.logUtil!.putF("Moved Mouse To: x: " +point.x +" y: " +point.y +" in the middle of: " +rectangle, this, "moveMouseToTarget");
    
}


                //@Throws(Exception.constructor)
            
    public mouseMoveToTarget(rectangle: Rectangle){
this.mouseMoveToTarget(rectangle, 0, 0);
    
}


    public mouseMove(x: Integer, y: Integer){



                            throw new RuntimeException();
                    
}


    setHelpSet(helpSet: HelpSet){
this.helpSet= helpSet;
    
}


}



