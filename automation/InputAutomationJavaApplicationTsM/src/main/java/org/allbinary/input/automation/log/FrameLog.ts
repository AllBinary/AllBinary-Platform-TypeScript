
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../java/lang/Long.js';
        
import { File } from '../../../../../java/io/File.js';
//not GWT import const File

import { FileOutputStream } from '../../../../../java/io/FileOutputStream.js';
//not GWT import const FileOutputStream

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { ImageOutputData } from '../../../../../org/allbinary/input/automation/ImageOutputData.js';
//not GWT import const ImageOutputData

import { LongUtil } from '../../../../../org/allbinary/logic/java/number/LongUtil.js';
//not GWT import const LongUtil

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FrameLog
            extends Object
         {
        

    private static frameBytes: number[] = Array.from(new TextEncoder().encode(.toCharArray()), byte => (byte << 24) >> 24)!;

    private static info: number[] = Array.from(new TextEncoder().encode(.toCharArray()), byte => (byte << 24) >> 24)!;

    private static actions: number[] = Array.from(new TextEncoder().encode(.toCharArray()), byte => (byte << 24) >> 24)!;

    private readonly frame: Long;

    private infoStringBuffer: StringMaker = new StringMaker();

    private actionsStringBuffer: StringMaker = new StringMaker();

public constructor (frame: Long){

            super();
        this.frame= frame;
    
}


    public addInfo(infoString: string){
this.infoStringBuffer!.append(infoString);
    
}


    public addActions(vectorOfStrings: BasicArrayList){

    let size: number = vectorOfStrings!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
this.addAction(vectorOfStrings!.get(index) as string);
    
}

}


    public addAction(action: string){
this.actionsStringBuffer!.append(action);
    
this.actionsStringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE);
    
}


                //@Throws(Exception.constructor)
            
    public write(){

    let filePathStringBuffer: StringMaker = new StringMaker();;
    
filePathStringBuffer!.append(ImageOutputData.SAVE_PATH);
    
filePathStringBuffer!.append(LongUtil.fillIn(this.frame.toString()));
    
filePathStringBuffer!.append(".txt");
    

    let filePath: string = filePathStringBuffer!.toString()!;;
    

    let fileOutputStream: FileOutputStream = new FileOutputStream(new File(filePath));;
    
fileOutputStream!.write(FrameLog.frameBytes);
    
fileOutputStream!.write(Array.from(new TextEncoder().encode(getFrame()!.toString()!), byte => (byte << 24) >> 24));
    
fileOutputStream!.write('\n');
    
fileOutputStream!.write(FrameLog.info);
    
fileOutputStream!.write(Array.from(new TextEncoder().encode(this.infoStringBuffer!.toString()!), byte => (byte << 24) >> 24));
    
fileOutputStream!.write('\n');
    
fileOutputStream!.write(FrameLog.actions);
    
fileOutputStream!.write(Array.from(new TextEncoder().encode(this.actionsStringBuffer!.toString()!), byte => (byte << 24) >> 24));
    
fileOutputStream!.close();
    
}


    public getFrame(): Long{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.frame;
    
}


}

