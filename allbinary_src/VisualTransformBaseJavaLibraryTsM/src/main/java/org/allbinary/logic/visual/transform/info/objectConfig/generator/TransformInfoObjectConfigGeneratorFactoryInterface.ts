
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



            import { Object } from '../../../../../../../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../../../../../../../java/lang/Exception.js';
        
import { Graphics } from '../../../../../../../../../../../../../javax/microedition/lcdui/Graphics.js';

    
import { Scene } from '../../../../../../../../../../../../../min3d/core/Scene.js';

    
import { Camera } from '../../../../../../../../../../../../../min3d/vos/Camera.js';

    
import { Number3d } from '../../../../../../../../../../../../../min3d/vos/Number3d.js';

    
import { GPoint } from '../../../../../../../../../../../../../org/allbinary/graphics/GPoint.js';

    
import { BasicColorFactory } from '../../../../../../../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';

    
import { DisplayInfoSingleton } from '../../../../../../../../../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';

    
import { BaseMotionGestureEventListener } from '../../../../../../../../../../../../../org/allbinary/input/motion/gesture/observer/BaseMotionGestureEventListener.js';

    
import { BasicMotionGesturesHandler } from '../../../../../../../../../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';

    
import { MotionGestureEvent } from '../../../../../../../../../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureEvent.js';

    
import { LogUtil } from '../../../../../../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';

    
import { PreLogUtil } from '../../../../../../../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';

    
import { MathData } from '../../../../../../../../../../../../../org/allbinary/logic/math/MathData.js';

    
import { StringMaker } from '../../../../../../../../../../../../../org/allbinary/logic/string/StringMaker.js';

    
import { AllBinaryEventObject } from '../../../../../../../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';

    
import { CommonSeps } from '../../../../../../../../../../../../../org/allbinary/string/CommonSeps.js';

    
import { CommonStrings } from '../../../../../../../../../../../../../org/allbinary/string/CommonStrings.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TransformInfoObjectConfigGenerator } from './TransformInfoObjectConfigGenerator.js';

export class CameraMotionGestureInputProcessor
            extends Object
         {
        

    private static readonly instance: CameraMotionGestureInputProcessor = new CameraMotionGestureInputProcessor();

    public static getInstance(): CameraMotionGestureInputProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return CameraMotionGestureInputProcessor.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private position: Number3d = new Number3d();

    private target: Number3d = new Number3d();

    public restore(scene: Scene, stringMaker: StringMaker): boolean{
    //var scene = scene
    //var stringMaker = stringMaker

                        if(this.position.x != 0 || this.position.y != 0 || this.position.z != 0)
                        
                                    {
                                    
    var camera: Camera = scene.getCamera()!;
;
    
camera.position.x= this.position.x;
    
camera.position.y= this.position.y;
    
camera.position.z= this.position.z;
    
camera.target.getPosition()!.x= this.target.x;
    
camera.target.getPosition()!.y= this.target.y;
    
camera.target.getPosition()!.z= this.target.z;
    
stringMaker!.append("Restore from last time: ");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public add(scene: Scene){
    //var scene = scene

    var displayInfoSingleton: DisplayInfoSingleton = DisplayInfoSingleton.getInstance()!;
;
    

    var baseMotionGestureEventListener: BaseMotionGestureEventListener = new class extends BaseMotionGestureEventListener
                                {
                                
    var private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    public var readonly COMMON_UP_AXIS_ARRAY: Number3d[] = 
                                                        [
                                                            new Number3d(0, 0, 1),new Number3d(0, 1, 0),new Number3d(1, 0, 0),new Number3d(0, 0,  -1),new Number3d(0,  -1, 0),new Number3d( -1, 0, 0)
                                                        ];

    var private upAxisIndex: number = 1;

    public onEvent(eventObject: AllBinaryEventObject){
    //var eventObject = eventObject
}

    public onMotionGestureEvent(motionGestureEvent: MotionGestureEvent){
    //var motionGestureEvent = motionGestureEvent

    var logUtil: LogUtil = LogUtil.getInstance()!;
;
    

        try {
            
    var point: GPoint = motionGestureEvent!.getCurrentPoint()!;
;
    

    var halfWidth: number = DisplayInfoSingleton.getInstance()!.getLastHalfWidth()!;
;
    

    var quarterHalfWidth: number = displayInfoSingleton!.getLastHalfWidth() /2;
;
    

    var camera: Camera = scene.getCamera()!;
;
    

                        if(point.getX() < quarterHalfWidth && point.getY() < 100)
                        
                                    {
                                    camera.position.x -= 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > quarterHalfWidth && point.getX() < halfWidth && point.getY() < 100)
                        
                                    {
                                    camera.position.x += 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > halfWidth && point.getX() < halfWidth +quarterHalfWidth && point.getY() < 100)
                        
                                    {
                                    camera.position.y -= 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > halfWidth +quarterHalfWidth && point.getX() < displayInfoSingleton!.getLastWidth() && point.getY() < 100)
                        
                                    {
                                    camera.position.y += 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() < quarterHalfWidth && point.getY() > 100 && point.getY() < 200)
                        
                                    {
                                    camera.position.z -= 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > quarterHalfWidth && point.getX() < halfWidth && point.getY() > 100 && point.getY() < 200)
                        
                                    {
                                    camera.position.z += 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > halfWidth && point.getX() < halfWidth +quarterHalfWidth && point.getY() > 100 && point.getY() < 200)
                        
                                    {
                                    camera.target.getPosition()!.x -= 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > halfWidth +quarterHalfWidth && point.getX() < displayInfoSingleton!.getLastWidth() && point.getY() > 100 && point.getY() < 200)
                        
                                    {
                                    camera.target.getPosition()!.x += 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() < quarterHalfWidth && point.getY() > 200 && point.getY() < 300)
                        
                                    {
                                    camera.target.getPosition()!.y -= 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > quarterHalfWidth && point.getX() < halfWidth && point.getY() > 200 && point.getY() < 300)
                        
                                    {
                                    camera.target.getPosition()!.y += 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > halfWidth && point.getX() < halfWidth +quarterHalfWidth && point.getY() > 200 && point.getY() < 300)
                        
                                    {
                                    camera.target.getPosition()!.z -= 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > halfWidth +quarterHalfWidth && point.getX() < displayInfoSingleton!.getLastWidth() && point.getY() > 200 && point.getY() < 300)
                        
                                    {
                                    camera.target.getPosition()!.z += 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() < quarterHalfWidth && point.getY() > 300 && point.getY() < 400)
                        
                                    {
                                    camera.position.x -= 5.0f;
    
camera.target.getPosition()!.x -= 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > quarterHalfWidth && point.getX() < halfWidth && point.getY() > 300 && point.getY() < 400)
                        
                                    {
                                    camera.position.x += 5.0f;
    
camera.target.getPosition()!.x += 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > halfWidth && point.getX() < halfWidth +quarterHalfWidth && point.getY() > 300 && point.getY() < 400)
                        
                                    {
                                    camera.position.z -= 5.0f;
    
camera.target.getPosition()!.z -= 5.0f;
    

                                    }
                                
                             else 
                        if(point.getX() > halfWidth +quarterHalfWidth && point.getX() < displayInfoSingleton!.getLastWidth() && point.getY() > 300 && point.getY() < 400)
                        
                                    {
                                    camera.position.z += 5.0f;
    
camera.target.getPosition()!.z += 5.0f;
    

                                    }
                                
position.x= camera.position.x;
    
position.y= camera.position.y;
    
position.z= camera.position.z;
    
target.x= camera.target.getPosition()!.x;
    
target.y= camera.target.getPosition()!.y;
    
target.z= camera.target.getPosition()!.z;
    

    var stringMaker: StringMaker = new StringMaker();
;
    
camera.position.append(stringMaker);
    
stringMaker!.append(CommonSeps.getInstance()!.DASH)!.append(MathData.getInstance()!.GREATER_THAN);
    
camera.target.getPosition()!.append(stringMaker);
    
PreLogUtil.put(stringMaker!.toString(), this, "onMotionGestureEvent");
    

                //: 
} catch(e) 
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.PROCESS, e);
    
}

}

                                }
                            ;
;
    
BasicMotionGesturesHandler.getInstance()!.addListener(baseMotionGestureEventListener);
    
}


    public paint(graphics: Graphics){
    //var graphics = graphics
graphics.setColor(BasicColorFactory.getInstance()!.RED.toInt());
    

    var halfWidth: number = DisplayInfoSingleton.getInstance()!.getLastHalfWidth()!;
;
    

    var quarterHalfWidth: number = (DisplayInfoSingleton.getInstance()!.getLastHalfWidth() /2) -1;
;
    
graphics.drawRect(1, 1, quarterHalfWidth, 100);
    
graphics.drawRect(quarterHalfWidth +1, 1, quarterHalfWidth, 100);
    
graphics.drawRect(halfWidth +1, 1, quarterHalfWidth, 100);
    
graphics.drawRect(halfWidth +quarterHalfWidth +1, 1, quarterHalfWidth, 100);
    
graphics.drawRect(1, 101, quarterHalfWidth, 100);
    
graphics.drawRect(quarterHalfWidth +1, 101, quarterHalfWidth, 100);
    
graphics.drawRect(halfWidth, 101, quarterHalfWidth, 100);
    
graphics.drawRect(halfWidth +quarterHalfWidth +1, 101, quarterHalfWidth, 100);
    
graphics.drawRect(1, 201, quarterHalfWidth, 100);
    
graphics.drawRect(quarterHalfWidth +1, 201, quarterHalfWidth, 100);
    
graphics.drawRect(halfWidth, 201, quarterHalfWidth, 100);
    
graphics.drawRect(halfWidth +quarterHalfWidth +1, 201, quarterHalfWidth, 100);
    
graphics.drawRect(1, 301, quarterHalfWidth, 100);
    
graphics.drawRect(quarterHalfWidth +1, 301, quarterHalfWidth, 100);
    
graphics.drawRect(halfWidth, 301, quarterHalfWidth, 100);
    
graphics.drawRect(halfWidth +quarterHalfWidth +1, 301, quarterHalfWidth, 100);
    
}


}
                
            

