
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
        



import { MIDlet } from "../../../../javax/microedition/midlet/MIDlet.js";

    

export class SWTJOGLProcessor
            extends Object
        
                , Runnable {
        

    private static readonly instance: SWTJOGLProcessor = new SWTJOGLProcessor();
        
        

    public static getInstance(): SWTJOGLProcessor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public glHolder: any = {} = {};
        
        

    public init(display: any = {}, comp: any = {}){
    //var display = display
    //var comp = comp
}


    public isHolderCreated(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public setRenderer(renderer: any = {}){
    //var renderer = renderer
}


    public isJOGL(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public createSurface(){
}


    public onSurfaceCreated(){
}


    public onSurfaceChanged(event: any = {}){
    //var event = event
}


    public onSurfaceChanged(){
}


    public onSurfaceChanged(width: number, height: number){
    //var width = width
    //var height = height
}


    public addListener(){
}


    public addListeners(midlet: MIDlet){
    //var midlet = midlet
}


    public run(){
}


    public clear(){
}


    public setCustom(width: number, height: number, ratio: number){
    //var width = width
    //var height = height
    //var ratio = ratio
}


    public setRatioProcessor(){
}


}
                
            

