
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
        



            import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
        
            import { Runnable } from '../../../../java/lang/Runnable.js';
        
import { Font } from '../../../../javax/microedition/lcdui/Font.js';
      
import { MIDlet } from '../../../../javax/microedition/midlet/MIDlet.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GLHolder } from './GLHolder.js';
import { RatioProcessor } from './RatioProcessor.js';
//SWTWithoutJOGL
export class SWTJOGLProcessor
            extends Object
         implements Runnable {
        

    private static readonly instance: SWTJOGLProcessor = new SWTJOGLProcessor();

    public static getInstance(): SWTJOGLProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SWTJOGLProcessor.instance;
    
}


    public glHolder: GLHolder = new class extends GLHolder
                                {
                                
    public run(renderer: any = {}){
}

                                }
                            ;

    public init(display: any = {}, comp: any = {}){
}


    public isHolderCreated(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return glHolder!.isCreated;
    
}


    public setRenderer(renderer: any = {}){
}


    public isJOGL(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public createSurface(){
}


    public onSurfaceCreated(){
}


    public onSurfaceChangedForEvent(event: any = {}){
}


    public onSurfaceChanged(){
}


    public onSurfaceChangedWH(width: number, height: number){
}


    public addListener(){
}


    public addListeners(midlet: MIDlet){
}


    public run(){
}


    public clear(){
}


    public setCustom(width: number, height: number, ratio: number){
}


    public setRatioProcessor(ratioProcessor: RatioProcessor){
}


    public charWidth(font: Font, ch: string): number{



                            throw new RuntimeException();
                    
}


    public charsWidth(font: Font, ch: string[], offset: number, length: number): number{



                            throw new RuntimeException();
                    
}


    public stringWidth(font: Font, str: string): number{



                            throw new RuntimeException();
                    
}


    public substringWidth(font: Font, str: string, offset: number, len: number): number{



                            throw new RuntimeException();
                    
}


}
                
            

