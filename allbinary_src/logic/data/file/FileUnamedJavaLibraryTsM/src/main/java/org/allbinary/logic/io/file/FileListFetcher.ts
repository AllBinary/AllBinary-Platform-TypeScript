
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
        
            import { System } from '../../../../../java/lang/System.js';
        
//not game specific package import { DirectoryBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryBooleanFileVisitor.js';
      const DirectoryBooleanFileVisitor = globalThis.org.allbinary.logic.io.file.directory.DirectoryBooleanFileVisitor;

      
//not game specific package import { DirectoryOrIncludeFileExtensionBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryOrIncludeFileExtensionBooleanFileVisitor.js';
      const DirectoryOrIncludeFileExtensionBooleanFileVisitor = globalThis.org.allbinary.logic.io.file.directory.DirectoryOrIncludeFileExtensionBooleanFileVisitor;

      
//not game specific package import { SubDirectory } from '../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
      const SubDirectory = globalThis.org.allbinary.logic.io.file.directory.SubDirectory;

      
//not game specific package import { VisitorFileFilter } from '../../../../../org/allbinary/logic/io/file/filter/VisitorFileFilter.js';
      const VisitorFileFilter = globalThis.org.allbinary.logic.io.file.filter.VisitorFileFilter;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';

export class FileListFetcher
            extends Object
         {
        

    private static readonly instance: FileListFetcher = new FileListFetcher();

    public static getInstance(): FileListFetcher{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileListFetcher.instance;
    
}


    private readonly subDirectory: SubDirectory = SubDirectory.getInstance()!;

    public getFiles(path: string): BasicArrayList{

        try {
            
    var files: BasicArrayList = this.subDirectory!.search(AbFile.createAbFile(path))!;;
    



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

        try {
            
    var includeExtensionBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    var size: number = includeExtensions!.length
                ;;
    




                        for (
    var index: number = 0;index < size; index++)
        {
includeExtensionBasicArrayList!.add(includeExtensions[index]!);
    
}


    var visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));;
    

    var files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



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

        try {
            
    var includeExtensionBasicArrayList: BasicArrayList = new BasicArrayListD();;
    
includeExtensionBasicArrayList!.add(includeExtension);
    

    var visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));;
    

    var files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



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

        try {
            
    var includeExtensionBasicArrayList: BasicArrayList = new BasicArrayListD();;
    
includeExtensionBasicArrayList!.add(includeExtension);
    

    var visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList, pathIncludes));;
    

    var files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



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

        try {
            
    var visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryBooleanFileVisitor());;
    

    var files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



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
                
            

