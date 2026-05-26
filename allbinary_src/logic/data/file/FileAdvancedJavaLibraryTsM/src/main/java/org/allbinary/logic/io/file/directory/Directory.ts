
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
      
import { PreLogUtil } from '../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      
import { AbFile } from '../../../../../../org/allbinary/logic/io/file/AbFile.js';
      
import { FileFactory } from '../../../../../../org/allbinary/logic/io/file/FileFactory.js';
      
import { FileWrapperUtil } from '../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js';
      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      
import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      
















                                        
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


    public create(directoryAbPath: AbPath): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.create(directoryAbPath!.toFileSystemString());;
    
}


                //@Throws(Exception.constructor)
            
    public remove(existingDirectoryAbPath: AbPath){
this.remove(existingDirectoryAbPath!.toFileSystemString());
    
}


    create(directory: string): boolean{

        try {
            
    var directoryFile: AbFile = FileFactory.getInstance()!.getInstance(directory)!;;
    

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
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE("Error Creating Directories: " +directory, this, "create", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


                //@Throws(Exception.constructor)
            
    remove(existingDirectory: string){

    var existingDirectoryFile: AbFile = FileFactory.getInstance()!.getInstance(existingDirectory)!;;
    

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


    public search(fileFilter: FileFilter, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(fileFilter, file, false);;
    
}


    public search(fileFilter: FileFilter, file: AbFile, isRecursiveSearch: boolean): BasicArrayList{

    var fileList: BasicArrayList = new BasicArrayListD();;
    

    var recursiveFileList: BasicArrayList;;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    var fileArray: any[] = file.listFiles(fileFilter)!;;
    

                        if(fileArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    var files: AbFile[] = FileWrapperUtil.wrapFiles(fileArray)!;;
    

                        if(files == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    var size: number = files.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
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


    public search(file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(file, false);;
    
}


    public search(file: AbFile, isRecursiveSearch: boolean): BasicArrayList{

    var fileList: BasicArrayList = new BasicArrayListD();;
    

    var recursiveFileList: BasicArrayList;;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    var fileArray: any[] = file.listFiles()!;;
    

                        if(fileArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    var files: AbFile[] = FileWrapperUtil.wrapFiles(fileArray)!;;
    

                        if(files == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                




                        for (
    var index: number = 0;index < files.length; index++)
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


    public search(searchValue: string, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(searchValue, file, false);;
    
}


    public search(searchValue: string, file: AbFile, isRecursiveSearch: boolean): BasicArrayList{

    var fileList: BasicArrayList = new BasicArrayListD();;
    

    var recursiveFileList: BasicArrayList;;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    var fileArray: any[] = file.listFiles()!;;
    

                        if(fileArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    var files: AbFile[] = FileWrapperUtil.wrapFiles(fileArray)!;;
    

                        if(files == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                




                        for (
    var index: number = 0;index < files.length; index++)
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


    public search(level: number, file: AbFile): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.search(level, file, false);;
    
}


    public search(level: number, file: AbFile, isRecursiveSearch: boolean): BasicArrayList{

    var fileList: BasicArrayList = new BasicArrayListD();;
    

    var recursiveFileList: BasicArrayList;;
    

                        if(file.isDirectory())
                        
                                    {
                                    
    var fileArray: any[] = file.listFiles()!;;
    

                        if(fileArray == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                

    var files: AbFile[] = FileWrapperUtil.wrapFiles(fileArray)!;;
    

                        if(files == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return fileList;
    

                                    }
                                




                        for (
    var index: number = 0;index < files.length; index++)
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
                
            

