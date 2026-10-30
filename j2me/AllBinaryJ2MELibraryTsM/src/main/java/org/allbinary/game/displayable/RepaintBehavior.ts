
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Thread } from '../../../../java/lang/Thread.js';
        
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
type ARunnable<T = any, U = any> = typeof ARunnable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ARunnable;

import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas

import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features

import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton

import { OpenGLFeatureFactory } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeatureFactory

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { NullRunnable } 
const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;
type NullRunnable<T = any, U = any> = typeof NullRunnable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullRunnable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class RepaintBehavior
            extends Object
         {
        

    private static readonly instance: RepaintBehavior = new RepaintBehavior();

    public static getInstance(): RepaintBehavior{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return RepaintBehavior.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public repaint(canvas: Canvas){
}


    private readonly NAME: string = "RepaintBehavior";

    public onChangeRepaint(canvas: Canvas){

    let features: Features = Features.getInstance()!;;
    

    let openGLFeatureFactory: OpenGLFeatureFactory = OpenGLFeatureFactory.getInstance()!;;
    

                        if(features.isFeature(openGLFeatureFactory!.OPENGL))
                        
                                    {
                                    DisplayInfoSingleton.getInstance()!.process();
    

                                    }
                                
                        else {
                            
    let thread: Thread = new Thread(new class extends ARunnable
                                {
                                
    public run(){

 try { canvas.repaint();
    
DisplayInfoSingleton.getInstance()!.process();
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.RUN, e);
    

 }
   }
 
}

                                }
                            , this.NAME);;
    
thread.start();
    

                        }
                            
}


}

