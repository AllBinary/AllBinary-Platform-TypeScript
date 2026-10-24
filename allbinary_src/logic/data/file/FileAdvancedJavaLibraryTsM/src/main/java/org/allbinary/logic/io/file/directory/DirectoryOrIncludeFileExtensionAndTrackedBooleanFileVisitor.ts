
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

        


            import { System } from '../../../../../../java/lang/System.js';
        
import { GitProcessHelper } from '../../../../../../org/allbinary/java/runtime/process/git/GitProcessHelper.js';
//not GWT import const GitProcessHelper

import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { CommonDataFileStrings } from '../../../../../../org/allbinary/logic/io/file/CommonDataFileStrings.js';
//not GWT import const CommonDataFileStrings

import { IncludeFileExtensionsBooleanFileVisitor } from '../../../../../../org/allbinary/logic/io/file/visitor/IncludeFileExtensionsBooleanFileVisitor.js';
//not GWT import const IncludeFileExtensionsBooleanFileVisitor

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TrackedStrings } from './TrackedStrings.js';
//not GWT import - same folder const TrackedStrings

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

    private readonly gitProcessHelper: GitProcessHelper = GitProcessHelper.getInstance()!;

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
                                    
                        if(this.gitProcessHelper!.isTracked(file))
                        
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


}



