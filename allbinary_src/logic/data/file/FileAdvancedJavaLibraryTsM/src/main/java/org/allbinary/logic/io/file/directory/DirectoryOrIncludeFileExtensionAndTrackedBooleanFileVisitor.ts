
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

        


            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { System } from '../../../../../../java/lang/System.js';
        
import { File } from '../../../../../../java/io/File.js';
      //not GWT import const File = globalThis.java.io.File;

      
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      //not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
import { AbFileNativeUtil } from '../../../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
      //not GWT import const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;

      
import { CommonDataFileStrings } from '../../../../../../org/allbinary/logic/io/file/CommonDataFileStrings.js';
      //not GWT import const CommonDataFileStrings = globalThis.org.allbinary.logic.io.file.CommonDataFileStrings;

      
import { IncludeFileExtensionsBooleanFileVisitor } from '../../../../../../org/allbinary/logic/io/file/visitor/IncludeFileExtensionsBooleanFileVisitor.js';
      //not GWT import const IncludeFileExtensionsBooleanFileVisitor = globalThis.org.allbinary.logic.io.file.visitor.IncludeFileExtensionsBooleanFileVisitor;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TrackedStrings } from './TrackedStrings.js';
//not GWT import const TrackedStrings = globalThis.org.allbinary.logic.io.file.directory.TrackedStrings;

                import { ProcessBuilder } from './ProcessBuilder.js';
//not GWT import const ProcessBuilder = globalThis.org.allbinary.logic.io.file.directory.ProcessBuilder;

                import { Process } from './Process.js';
//not GWT import const Process = globalThis.org.allbinary.logic.io.file.directory.Process;

                
export class DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor extends IncludeFileExtensionsBooleanFileVisitor {
        

    public static main(args: string[]){

    var commonFileStrings: CommonDataFileStrings = CommonDataFileStrings.getInstance()!;;
    

    var list: BasicArrayList = new BasicArrayListD();;
    
list.add(commonFileStrings!.JAVA);
    

    var filePath: string = "G:\\mnt\\bc\\mydev\\games\\ZeptoRacer\\platform\\j2se\\ZeptoRacerStaticPathsJ2SEM\\target\\dependency\\org\\allbinary\\logic\\system\\security\\licensing\\ZeptoRacerPCClientInformation.java";;
    

    var result: boolean = new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(list).visit(AbFile.createAbFileFromRawPath(filePath))!;;
    
console.log(filePath +" is Tracked: " +result);
    
}


    private readonly trackedStrings: TrackedStrings = TrackedStrings.getInstance()!;

    private readonly includesString: string;

public constructor (filterStringBasicArrayList: BasicArrayList){
            super(filterStringBasicArrayList);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.includesString= 
                                        null
                                    ;
    
}


public constructor (filterStringBasicArrayList: BasicArrayList, includesString: string){
            super(filterStringBasicArrayList);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.includesString= includesString;
    
}


    public visit(file: AbFile): Boolean{

                        if(file.isDirectory())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                

                        if(this.includesString == 
                                    null
                                 || file.getAbsolutePath()!.indexOf(this.includesString) >= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return super.visit(file);;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                        }
                            
}


    public visit(file: AbFile, fileNameString: string): Boolean{

    var filePath: string = file.getPath()!;;
    

                        if(super.visit(file, fileNameString))
                        
                                    {
                                    
                        if(!(filePath!.contains(this.trackedStrings!.APPLICATION) || filePath!.contains(this.trackedStrings!.APP) || filePath!.contains(this.trackedStrings!.HTML_TEMP)))
                        
                                    {
                                    
                        if(!(filePath!.contains(this.trackedStrings!.TARGET_PATH_WINDOWS) || filePath!.contains(this.trackedStrings!.TARGET_PATH_UNIX)))
                        
                                    {
                                    
                        if(this.isGitTracked(file))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                
                        else {
                            
                        }
                            

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}


    isGitTracked(file: AbFile): boolean{

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



