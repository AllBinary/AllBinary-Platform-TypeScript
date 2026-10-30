
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { FileFilter } from '../../../../../../java/io/FileFilter.js';
//not GWT import const FileFilter

//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
type PreLogUtil<T = any, U = any> = typeof PreLogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof PreLogUtil;

import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile

import { FileFactory } from '../../../../../../org/allbinary/logic/io/file/FileFactory.js';
//not GWT import const FileFactory

import { FileWrapperUtil } from '../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
//not GWT import const FileWrapperUtil

import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Directory
            extends Object
         {
        

    private static readonly instance: Directory = new Directory();

    public static getInstance(): Directory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Directory.instance;
    
}


private constructor (){

            super();
        }

create(...args: any[]): any {
   
    if (args.length === 1) return this.create$overload1(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'string') return this.create$overload2(args[0]);
   
   throw new TypeError('No matching overload: create'); }
  
    public create$overload1(directoryAbPath: AbPath): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.create(directoryAbPath!.toFileSystemString());;
    
}

remove(...args: any[]): any {
   
    if (args.length === 1) return this.remove$overload1(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'string') return this.remove$overload2(args[0]);
   
   throw new TypeError('No matching overload: remove'); }
  
                //@Throws(Exception.constructor)
            
    public remove$overload1(existingDirectoryAbPath: AbPath){
this.remove(existingDirectoryAbPath!.toFileSystemString());
    
}


    create$overload2(directory: string): boolean{

 try { 
    let directoryFile: AbFile = FileFactory.getInstance()!.getInstance(directory)!;;
    

                        if(!directoryFile!.isDirectory())
                        
                                    {
                                    PreLogUtil.put("Creating Directories: " +directory, this, "create");
    

                        if(!directoryFile!.mkdirs())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
PreLogUtil.putOE("Error Creating Directories: " +directory, this, "create", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    remove$overload2(existingDirectory: string){

    let existingDirectoryFile: AbFile = FileFactory.getInstance()!.getInstance(existingDirectory)!;;
    

                        if(existingDirectoryFile!.isDirectory())
                        
                                    {
                                    
                        if(existingDirectoryFile!.list()!.length > 0)
                        
                                    {
                                    


                            throw new Exception("Did not remove category: " +existingDirectory +" because files exist");
                    

                                    }
                                
                             else 
                        if(existingDirectoryFile!.delete())
                        
                                    {
                                    PreLogUtil.put("Successfully Removed: " +existingDirectory, "Directory", "remove");
    

                                    }
                                

                                    }
                                
                        else {
                            


                            throw new Exception("Category Directory Is Missing:" +existingDirectory);
                    

                        }
                            
}

search(...args: any[]): any {
   
    if (args.length === 2) return this.search$overload1(args[0], args[1]);
   
    if (args.length === 3 && typeof args[2] === 'boolean') return this.search$overload2(args[0], args[1], args[2]);
   
    if (args.length === 1) return this.search$overload3(args[0]);
   
    if (args.length === 2 && typeof args[1] === 'boolean') return this.search$overload4(args[0], args[1]);
   
    if (args.length === 2 && typeof args[0] === 'string') return this.search$overload5(args[0], args[1]);
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[2] === 'boolean') return this.search$overload6(args[0], args[1], args[2]);
   
    if (args.length === 2 && typeof args[0] === 'number') return this.search$overload7(args[0], args[1]);
   
    if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'boolean') return this.search$overload8(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: search'); }
  
    public search$overload1(fileFilter: FileFilter, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(fileFilter, file, false);;
    
}


    public search$overload2(fileFilter: FileFilter, file: AbFile, isRecursiveSearch: boolean): BasicArrayList{

    let fileList: BasicArrayList = new BasicArrayListD();;
    

    let recursiveFileList: BasicArrayList;;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    let fileArray: any[] = file.listFilesFileFilter(fileFilter)!;;
    

                        if(fileArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    let files: AbFile[] = FileWrapperUtil.wrapFiles(fileArray)!;;
    

                        if(files == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    let size: number = files.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
fileList!.add(files[index]!);
    

                        if(isRecursiveSearch)
                        
                                    {
                                    recursiveFileList= this.search(fileFilter, files[index]!, isRecursiveSearch);
    
fileList!.addAllList(recursiveFileList);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    
}


    public search$overload3(file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(file, false);;
    
}


    public search$overload4(file: AbFile, isRecursiveSearch: boolean): BasicArrayList{

    let fileList: BasicArrayList = new BasicArrayListD();;
    

    let recursiveFileList: BasicArrayList;;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    let fileArray: any[] = file.listFiles()!;;
    

                        if(fileArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    let files: AbFile[] = FileWrapperUtil.wrapFiles(fileArray)!;;
    

                        if(files == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                




                        for (
    let index: number = 0;index < files.length; index++)
        {
fileList!.add(files[index]!);
    

                        if(isRecursiveSearch)
                        
                                    {
                                    recursiveFileList= this.search(files[index]!, isRecursiveSearch);
    
fileList!.addAllList(recursiveFileList);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    
}


    public search$overload5(searchValue: string, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(searchValue, file, false);;
    
}


    public search$overload6(searchValue: string, file: AbFile, isRecursiveSearch: boolean): BasicArrayList{

    let fileList: BasicArrayList = new BasicArrayListD();;
    

    let recursiveFileList: BasicArrayList;;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    let fileArray: any[] = file.listFiles()!;;
    

                        if(fileArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    let files: AbFile[] = FileWrapperUtil.wrapFiles(fileArray)!;;
    

                        if(files == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                




                        for (
    let index: number = 0;index < files.length; index++)
        {

                        if(files[index]!.getPath()!.indexOf(searchValue) >= 0)
                        
                                    {
                                    fileList!.add(files[index]!);
    

                                    }
                                

                        if(isRecursiveSearch)
                        
                                    {
                                    recursiveFileList= this.search(searchValue, files[index]!, isRecursiveSearch);
    
fileList!.addAllList(recursiveFileList);
    

                                    }
                                
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    
}


    public search$overload7(level: number, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(level, file, false);;
    
}


    public search$overload8(level: number, file: AbFile, isRecursiveSearch: boolean): BasicArrayList{

    let fileList: BasicArrayList = new BasicArrayListD();;
    

    let recursiveFileList: BasicArrayList;;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    let fileArray: any[] = file.listFiles()!;;
    

                        if(fileArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    let files: AbFile[] = FileWrapperUtil.wrapFiles(fileArray)!;;
    

                        if(files == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                




                        for (
    let index: number = 0;index < files.length; index++)
        {
fileList!.add(files[index]!);
    

                        if(level <= 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                
recursiveFileList= this.search(level -1, files[index]!, isRecursiveSearch);
    
fileList!.addAllList(recursiveFileList);
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    
}


}

