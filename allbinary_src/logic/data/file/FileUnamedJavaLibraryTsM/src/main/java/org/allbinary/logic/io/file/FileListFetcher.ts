
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
        



import { DirectoryBooleanFileVisitor } from "../../../../../org/allbinary/logic/io/file/directory/DirectoryBooleanFileVisitor.js";

    
import { DirectoryOrIncludeFileExtensionBooleanFileVisitor } from "../../../../../org/allbinary/logic/io/file/directory/DirectoryOrIncludeFileExtensionBooleanFileVisitor.js";

    
import { SubDirectory } from "../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js";

    
import { VisitorFileFilter } from "../../../../../org/allbinary/logic/io/file/filter/VisitorFileFilter.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class FileListFetcher
            extends Object
         {
        

    private static readonly instance: FileListFetcher = new FileListFetcher();
        
        

    public static getInstance(): FileListFetcher{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly subDirectory: SubDirectory = SubDirectory.getInstance()!;
        
        

    public getFiles(path: string): BasicArrayList{
var path = path

        try {
            
    var files: BasicArrayList = this.subDirectory!.search(new AbFile(path))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    

                //: 
} catch(e) 
            {
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getFiles(path: string, includeExtensions: string[]): BasicArrayList{
    //var path = path
    //var includeExtensions = includeExtensions

        try {
            
    var includeExtensionBasicArrayList: BasicArrayList = new BasicArrayList();
        
        
;
    

    var size: number = includeExtensions!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
includeExtensionBasicArrayList!.add(includeExtensions[index]!);
    
}


    var visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));
        
        
;
    

    var files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, new AbFile(path))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    

                //: 
} catch(e) 
            {
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getFiles(path: string, includeExtension: string): BasicArrayList{
    //var path = path
    //var includeExtension = includeExtension

        try {
            
    var includeExtensionBasicArrayList: BasicArrayList = new BasicArrayList();
        
        
;
    
includeExtensionBasicArrayList!.add(includeExtension);
    

    var visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));
        
        
;
    

    var files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, new AbFile(path))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    

                //: 
} catch(e) 
            {
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getFiles(path: string, pathIncludes: string, includeExtension: string): BasicArrayList{
    //var path = path
    //var pathIncludes = pathIncludes
    //var includeExtension = includeExtension

        try {
            
    var includeExtensionBasicArrayList: BasicArrayList = new BasicArrayList();
        
        
;
    
includeExtensionBasicArrayList!.add(includeExtension);
    

    var visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList, pathIncludes));
        
        
;
    

    var files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, new AbFile(path))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    

                //: 
} catch(e) 
            {
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getDirectories(path: string): BasicArrayList{
    //var path = path

        try {
            
    var visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryBooleanFileVisitor());
        
        
;
    

    var files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, new AbFile(path))!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    

                //: 
} catch(e) 
            {
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

