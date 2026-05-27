
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
        
import { File } from '../../../../../java/io/File.js';
      
import { FileFilter } from '../../../../../java/io/FileFilter.js';
      
import { FilenameFilter } from '../../../../../java/io/FilenameFilter.js';
      
import { IOException } from '../../../../../java/io/IOException.js';
      
import { URI } from '../../../../../java/net/URI.js';
      
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbFileInterface } from './AbFileInterface.js';

export class AbFile
            extends Object
         implements AbFileInterface {
        

    public static readonly NULL_FILE: AbFile = AbFile.createAbFileFromRawPath(StringUtil.getInstance()!.EMPTY_STRING)!;

                //@Throws(Exception.constructor)
            
    public static createAbFileWithChild(file: AbFile, childPathName: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFile(new File(file.getFile(), childPathName));
    
}


                //@Throws(Exception.constructor)
            
    public static createAbFile(filePath: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFile(new File(new AbPath(filePath).toFileSystemString()));
    
}


                //@Throws(Exception.constructor)
            
    public static createAbFilePathAndName(filePath: string, fileName: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFile(new File(new AbPath(filePath).toFileSystemString(), fileName));
    
}


    public static createAbFileFromAbPath(abPath: AbPath): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFile(new File(abPath!.toFileSystemString()));
    
}


    public static createAbFileFromRawPath(filePath: string): AbFile{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbFile(new File(filePath));
    
}


    private readonly file: File;

protected constructor (file: File){

            super();
        this.file= file;
    
}


    getFile(): File{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getName();;
    
}


    public getParent(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getParent();;
    
}


    public getParentFile(): File{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getParentFile();;
    
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getPath();;
    
}


    public isAbsolute(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isAbsolute();;
    
}


    public getAbsolutePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getAbsolutePath();;
    
}


    public getAbsoluteFile(): File{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getAbsoluteFile();;
    
}


                //@Throws(IOException.constructor)
            
    public getCanonicalPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getCanonicalPath();;
    
}


                //@Throws(IOException.constructor)
            
    public getCanonicalFile(): File{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getCanonicalFile();;
    
}


    public toURI(): URI{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.toURI();;
    
}


    public canRead(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.canRead();;
    
}


    public canWrite(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.canWrite();;
    
}


    public exists(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.exists();;
    
}


    public isDirectory(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isDirectory();;
    
}


    public isFile(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isFile();;
    
}


    public isHidden(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isHidden();;
    
}


    public lastModified(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.lastModified();;
    
}


    public length(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.length();;
    
}


                //@Throws(IOException.constructor)
            
    public createNewFile(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.createNewFile();;
    
}


                //@Throws(IOException.constructor)
            
    public delete(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.delete();;
    
}


    public deleteOnExit(){
this.file.deleteOnExit();
    
}


    public list(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.list();;
    
}


    public listWithFilter(filter: FilenameFilter): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.list(filter);;
    
}


    public listFiles(): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.listFiles() as any[];
    
}


    public listFilesFileNameFilter(filter: FilenameFilter): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.listFiles(filter) as any[];
    
}


    public listFilesFileFilter(filter: FileFilter): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.listFiles(filter) as any[];
    
}


    public mkdir(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.mkdir();;
    
}


    public mkdirs(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.mkdirs();;
    
}


    public renameTo(dest: AbFile): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.renameTo(dest.getFile());;
    
}


    public setLastModified(time: number): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setLastModified(time);;
    
}


    public setReadOnly(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setReadOnly();;
    
}


    public compareTo(pathname: File): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.compareTo(pathname);;
    
}


    public equals(obj: any = {}): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TsUtil.getInstance()!.equalsNotstring(this.file, obj);;
    
}


    public hashCode(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.hashCode();;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.toString();;
    
}


}
                
            

