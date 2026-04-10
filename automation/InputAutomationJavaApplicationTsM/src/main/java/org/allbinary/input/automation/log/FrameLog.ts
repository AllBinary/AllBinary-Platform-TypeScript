
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
        



import { File } from "../../../../../java/io/File.js";

    
import { FileOutputStream } from "../../../../../java/io/FileOutputStream.js";

    
import { Vector } from "../../../../../java/util/Vector.js";

    
import { ImageOutputData } from "../../../../../org/allbinary/input/automation/ImageOutputData.js";

    
import { LongUtil } from "../../../../../org/allbinary/logic/java/number/LongUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class FrameLog
            extends Object
         {
        

    private frameBytes: ByteArray = .toCharArray().
                            encodeToByteArray()!;
        
        

    private info: ByteArray = .toCharArray().
                            encodeToByteArray()!;
        
        

    private actions: ByteArray = .toCharArray().
                            encodeToByteArray()!;
        
        

    private readonly frame: Long

    private infoStringBuffer: StringMaker = new StringMaker();
        
        

    private actionsStringBuffer: StringMaker = new StringMaker();
        
        
public constructor (frame: Long){

            super();
            var frame = frame
this.frame= frame
}


    public addInfo(infoString: string){
var infoString = infoString
this.infoStringBuffer!.append(infoString)
}


    public addActions(vectorOfStrings: Vector<String>){
var vectorOfStrings = vectorOfStrings

    var size: number = vectorOfStrings!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.this.addAction(vectorOfStrings!.get(index) as String)
}

}


    public addAction(action: string){
var action = action
this.actionsStringBuffer!.append(action)
this.actionsStringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE)
}


                //@Throws(Error::class)
            
    public write(){

    var filePathStringBuffer: StringMaker = new StringMaker();
        
        

filePathStringBuffer!.append(ImageOutputData.SAVE_PATH)
filePathStringBuffer!.append(LongUtil.fillIn(frame.toString()))
filePathStringBuffer!.append(".txt")

    var filePath: string = filePathStringBuffer!.toString()!;
        
        


    var fileOutputStream: FileOutputStream = new FileOutputStream(File(filePath));
        
        

fileOutputStream!.write(frameBytes)
fileOutputStream!.write(getFrame()!.toString()!.encodeToByteArray())
fileOutputStream!.write('\n')
fileOutputStream!.write(info)
fileOutputStream!.write(infoStringBuffer!.toString()!.encodeToByteArray())
fileOutputStream!.write('\n')
fileOutputStream!.write(actions)
fileOutputStream!.write(actionsStringBuffer!.toString()!.encodeToByteArray())
fileOutputStream!.close()
}


    public getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return frame;
    
}


}
                
            

