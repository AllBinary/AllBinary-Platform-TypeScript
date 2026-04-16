
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
        



import { InputImageType } from "../../../../../../../../org/allbinary/input/media/image/InputImageType.js";

    

import { CAPTURE } from "./CAPTURE.js";

export class SavedCaptureGenericProfileDataWorkerType extends GenericProfileDataWorkerType {
        

    public SAVED_CAPTURE: SavedCaptureGenericProfileDataWorkerType = new SavedCaptureGenericProfileDataWorkerType("Saved " +InputImageType.CAPTURE.getName(), "c:\\share\\captures\\2\\", 100);
        
        

    private path: string

    private lastFrame: number= 0
public constructor (name: string, path: string, lastFrame: number)                        

                            : super(name){

            super();
            var name = name
var path = path
var lastFrame = lastFrame


                            //For kotlin this is before the body of the constructor.
                    
this.setPath(path);
    
this.setLastFrame(lastFrame);
    
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


    public setPath(path: string){
var path = path
this.path= path;
    
}


    public getLastFrame(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return lastFrame;
    
}


    public setLastFrame(lastFrame: number){
var lastFrame = lastFrame
this.lastFrame= lastFrame;
    
}


}
                
            

