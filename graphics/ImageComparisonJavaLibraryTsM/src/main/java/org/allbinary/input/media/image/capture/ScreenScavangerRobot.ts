
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
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { awt } from '../../../../../../java/awt.js';
      const awt = globalThis.java.awt;

      
//not game specific package import { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.js';
      const BufferedImage = globalThis.java.awt.image.BufferedImage;

      
//not game specific package import { Hashtable } from '../../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { InputRobotFactory } from '../../../../../../org/allbinary/input/automation/robot/InputRobotFactory.js';
      const InputRobotFactory = globalThis.org.allbinary.input.automation.robot.InputRobotFactory;

      
//not game specific package import { InputRobotInterface } from '../../../../../../org/allbinary/input/automation/robot/InputRobotInterface.js';
      const InputRobotInterface = globalThis.org.allbinary.input.automation.robot.InputRobotInterface;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Toolkit } from './Toolkit.js';
import { Dimension } from './Dimension.js';
import { Rectangle } from './Rectangle.js';

export class ScreenScavangerRobot
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

public constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getScreenAsBufferedImages(): BufferedImage[]{
this.logUtil!.putF(this.commonStrings!.START, this, "getScreenAsBufferedImages");
    

    var dimScreenSize: Dimension = Toolkit.getDefaultToolkit()!.getScreenSize()!;;
    

    var rectScreenSize: Rectangle = new Rectangle(dimScreenSize);;
    

    var robotHashtable: Hashtable<any, any> = InputRobotFactory.getInstance()!.get()!;;
    

    var bufferedImageArray: BufferedImage[] = new Array(1);;
    

    var index: number = 0;;
    

    var inputRobotInterface: InputRobotInterface = robotHashtable!.get("Java Robot") as InputRobotInterface;;
    
bufferedImageArray[index]= inputRobotInterface!.createScreenCapture(rectScreenSize);
    
this.logUtil!.putF("Finish", this, "getScreenAsBufferedImages");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bufferedImageArray;
    
}


}
                
            

