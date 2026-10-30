
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
        
import { DirectoryBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryBooleanFileVisitor.js';
//not GWT import const DirectoryBooleanFileVisitor

import { DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor.js';
//not GWT import const DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor

import { DirectoryOrIncludeFileExtensionBooleanFileVisitor } from '../../../../../org/allbinary/logic/io/file/directory/DirectoryOrIncludeFileExtensionBooleanFileVisitor.js';
//not GWT import const DirectoryOrIncludeFileExtensionBooleanFileVisitor

import { SubDirectory } from '../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js';
//not GWT import const SubDirectory

import { VisitorFileFilter } from '../../../../../org/allbinary/logic/io/file/filter/VisitorFileFilter.js';
//not GWT import const VisitorFileFilter

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFile } from './AbFile.js';
//sameFolderImports - not GWT import - same folder const AbFile

export class FileListFetcher
            extends Object
         {
        

    private static readonly instance: FileListFetcher = new FileListFetcher();

    public static getInstance(): FileListFetcher{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FileListFetcher.instance;
    
}


    private readonly subDirectory: SubDirectory = SubDirectory.getInstance()!;
getFiles(...args: any[]): any {
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getFiles$overload1(args[0]);
   
    if (args.length === 2 && typeof args[0] === 'string') return this.getFiles$overload2(args[0], args[1]);
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.getFiles$overload3(args[0], args[1]);
   
    if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'string' && typeof args[2] === 'string') return this.getFiles$overload4(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: getFiles'); }
  
    public getFiles$overload1(path: string): BasicArrayList{

 try { 
    let files: BasicArrayList = this.subDirectory!.search(AbFile.createAbFile(path))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getFiles$overload2(path: string, includeExtensions: string[]): BasicArrayList{

 try { 
    let includeExtensionBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let size: number = includeExtensions!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
includeExtensionBasicArrayList!.add(includeExtensions[index]!);
    
}


    let visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));;
    

    let files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getFiles$overload3(path: string, includeExtension: string): BasicArrayList{

 try { 
    let includeExtensionBasicArrayList: BasicArrayList = new BasicArrayListD();;
    
includeExtensionBasicArrayList!.add(includeExtension);
    

    let visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList));;
    

    let files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getFiles$overload4(path: string, pathIncludes: string, includeExtension: string): BasicArrayList{

 try { 
    let includeExtensionBasicArrayList: BasicArrayList = new BasicArrayListD();;
    
includeExtensionBasicArrayList!.add(includeExtension);
    

    let visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionBooleanFileVisitor(includeExtensionBasicArrayList, pathIncludes));;
    

    let files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

getTrackedFiles(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'string') return this.getTrackedFiles$overload1(args[0], args[1]);
   
    if (args.length === 2 && typeof args[0] === 'string' && typeof args[1] === 'string') return this.getTrackedFiles$overload2(args[0], args[1]);
   
   throw new TypeError('No matching overload: getTrackedFiles'); }
  
    public getTrackedFiles$overload1(path: string, includeExtensions: string[]): BasicArrayList{

 try { 
    let includeExtensionBasicArrayList: BasicArrayList = new BasicArrayListD();;
    

    let size: number = includeExtensions!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
includeExtensionBasicArrayList!.add(includeExtensions[index]!);
    
}


    let visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(includeExtensionBasicArrayList));;
    

    let files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getTrackedFiles$overload2(path: string, includeExtension: string): BasicArrayList{

 try { 
    let includeExtensionBasicArrayList: BasicArrayList = new BasicArrayListD();;
    
includeExtensionBasicArrayList!.add(includeExtension);
    

    let visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryOrIncludeFileExtensionAndTrackedBooleanFileVisitor(includeExtensionBasicArrayList));;
    

    let files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getDirectories(path: string): BasicArrayList{

 try { 
    let visitorFileFilter: VisitorFileFilter = new VisitorFileFilter(new DirectoryBooleanFileVisitor());;
    

    let files: BasicArrayList = this.subDirectory!.search(visitorFileFilter, AbFile.createAbFile(path))!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return files;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
e.printStackTrace();
    
console.log("Error: " +e +"\nMsg: " +e.message);
    

 }
   }
 



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}

