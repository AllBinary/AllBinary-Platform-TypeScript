
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2026 AllBinary 
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
        
            import { IllegalStateException } from '../../../../../../java/lang/IllegalStateException.js';
        
            import { InterruptedException } from '../../../../../../java/lang/InterruptedException.js';
        
import { File } from '../../../../../../java/io/File.js';
//not GWT import const File

import { IOException } from '../../../../../../java/io/IOException.js';
//not GWT import const IOException

import { StandardCharsets } from '../../../../../../java/nio/charset/StandardCharsets.js';
//not GWT import const StandardCharsets

import { ArrayList } from '../../../../../../java/util/ArrayList.js';
//not GWT import const ArrayList

import { List } from '../../../../../../java/util/List.js';
//not GWT import const List

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { AbFileNativeUtil } from '../../../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil

import { TrackedStrings } from '../../../../../../org/allbinary/logic/io/file/directory/TrackedStrings.js';
//not GWT import const TrackedStrings

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ProcessBuilder } from './ProcessBuilder.js';
//not GWT import - same folder const ProcessBuilder
import { Process } from './Process.js';
//not GWT import - same folder const Process
//Do not use this instead just skip target, build, Application paths.
export class GitProcessHelper
            extends Object
         {
        

    private static readonly instance: GitProcessHelper = new GitProcessHelper();

    public static getInstance(): GitProcessHelper{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GitProcessHelper.instance;
    
}


    private readonly trackedStrings: TrackedStrings = TrackedStrings.getInstance()!;

private constructor (){

            super();
        
    var logUtil: LogUtil = LogUtil.getInstance()!;;
    

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var THIS_IS_SLOW: string = "This is slow consider path exclusion instead";;
    
logUtil!.putF(THIS_IS_SLOW, this, commonStrings!.CONSTRUCTOR);
    
}


                //@Throws(IOException.constructor, InterruptedException.constructor)
            
    public trackedFiles(rootAsString: string, pathspec: string): List<string>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.trackedFiles(rootAsString, pathspec, ".java");;
    
}


                //@Throws(IOException.constructor, InterruptedException.constructor)
            
    public trackedFiles(rootAsString: string, pathspec: string, suffix: string): List<string>{

    var process: Process = new ProcessBuilder(this.trackedStrings!.GIT_COMMAND, this.trackedStrings!.CHANGE_DIRECTORY_OPTION, rootAsString, this.trackedStrings!.LIST_FILES_COMMAND, this.trackedStrings!.SEP_BY_NULL_CHAR_INSTEAD_OF_NEW_LINE, this.trackedStrings!.PATHSPEC_SEPARATOR, pathspec).redirectError(ProcessBuilder.Redirect.INHERIT)!.start()!;;
    

    var output: number[] = process.getInputStream()!.readAllBytes()!;;
    

    var exitCode: number = process.waitFor()!;;
    

                        if(exitCode != 0)
                        
                                    {
                                    


                            throw new IllegalStateException(new StringMaker().append("git ls-files failed for ")!.append(rootAsString)!.append(" with exit code ")!.appendint(exitCode)!.toString());
                    

                                    }
                                

    var files: List<string> = new ArrayList<>();;
    

    var start: number = 0;;
    

    var relativePath: string;;
    




                        for (
    var index: number = 0;index < output.length; index++)
        {

                        if(output[index] == 0)
                        
                                    {
                                    relativePath= String.fromCharCode(...output);
    

                        if(relativePath!.endsWith(suffix))
                        
                                    {
                                    files.add(relativePath);
    

                                    }
                                
start= index +1;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
}


    public isTracked(file: AbFile): boolean{

        try {
            
    var nativeFile: File = AbFileNativeUtil.get(file)!;;
    

    var parentFile: File = nativeFile!.getParentFile()!;;
    

    var process: Process = new ProcessBuilder(this.trackedStrings!.GIT_COMMAND, this.trackedStrings!.CHANGE_DIRECTORY_OPTION, parentFile!.getPath(), this.trackedStrings!.LIST_FILES_COMMAND, this.trackedStrings!.ERROR_UNMATCH_OPTION, this.trackedStrings!.PATHSPEC_SEPARATOR, nativeFile!.getName()).redirectErrorStream(true)!.start()!;;
    
process.getInputStream()!.readAllBytes();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return process.waitFor() == 0;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


}



