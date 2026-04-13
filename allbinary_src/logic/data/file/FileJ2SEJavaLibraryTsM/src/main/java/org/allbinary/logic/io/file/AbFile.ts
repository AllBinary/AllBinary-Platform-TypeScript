
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
        



import { File } from "../../../../../java/io/File.js";

    
import { FileFilter } from "../../../../../java/io/FileFilter.js";

    
import { FilenameFilter } from "../../../../../java/io/FilenameFilter.js";

    
import { IOException } from "../../../../../java/io/IOException.js";

    
import { URI } from "../../../../../java/net/URI.js";

    
import { TsUtil } from "../../../../../org/allbinary/logic/TsUtil.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class AbFile
            extends Object
        
                , AbFileInterface {
        

    public static readonly NULL_FILE: AbFile = new AbFile(StringUtil.getInstance()!.EMPTY_STRING, false);
        
        

    private readonly file: File
 constructor (filePath: string, unknown: boolean){

            super();
                //var filePath = filePath
    //var unknown = unknown
this.file= new File(filePath);
    
}

 constructor (file: File){

            super();
                //var file = file
this.file= file;
    
}

public constructor (file: AbFile, childPathName: string){

            super();
                //var file = file
    //var childPathName = childPathName
this.file= new File(file.getFile(), childPathName);
    
}

public constructor (filePath: string){

            super();
                //var filePath = filePath
this.file= new File(new AbPath(filePath).
                            toFileSystemString());
    
}

public constructor (filePath: string, fileName: string){

            super();
                //var filePath = filePath
    //var fileName = fileName
this.file= new File(new AbPath(filePath).
                            toFileSystemString(), fileName);
    
}

public constructor (abPath: AbPath){

            super();
                //var abPath = abPath
this.file= new File(abPath!.toFileSystemString());
    
}


    getFile(): File{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return file;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getName();

                        ;
    
}


    public getParent(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getParent();

                        ;
    
}


    public getParentFile(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getParentFile();

                        ;
    
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getPath();

                        ;
    
}


    public isAbsolute(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isAbsolute();

                        ;
    
}


    public getAbsolutePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getAbsolutePath();

                        ;
    
}


    public getAbsoluteFile(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getAbsoluteFile();

                        ;
    
}


                //@Throws(IOException::class)
            
    public getCanonicalPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getCanonicalPath();

                        ;
    
}


                //@Throws(IOException::class)
            
    public getCanonicalFile(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getCanonicalFile();

                        ;
    
}


    public toURI(): URI{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.toURI();

                        ;
    
}


    public canRead(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.canRead();

                        ;
    
}


    public canWrite(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.canWrite();

                        ;
    
}


    public exists(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.exists();

                        ;
    
}


    public isDirectory(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isDirectory();

                        ;
    
}


    public isFile(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isFile();

                        ;
    
}


    public isHidden(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.isHidden();

                        ;
    
}


    public lastModified(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.lastModified();

                        ;
    
}


    public length(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.length();

                        ;
    
}


                //@Throws(IOException::class)
            
    public createNewFile(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.createNewFile();

                        ;
    
}


                //@Throws(IOException::class)
            
    public delete(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.delete();

                        ;
    
}


    public deleteOnExit(){
this.file.deleteOnExit();
    
}


    public list(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.list();

                        ;
    
}


    public list(filter: FilenameFilter): string[]{
    //var filter = filter



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.list(filter);

                        ;
    
}


    public listFiles(): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.listFiles();

                         as Array<any?>;
    
}


    public listFiles(filter: FilenameFilter): any[]{
    //var filter = filter



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.listFiles(filter);

                         as Array<any?>;
    
}


    public listFiles(filter: FileFilter): any[]{
    //var filter = filter



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.listFiles(filter);

                         as Array<any?>;
    
}


    public mkdir(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.mkdir();

                        ;
    
}


    public mkdirs(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.mkdirs();

                        ;
    
}


    public renameTo(dest: AbFile): boolean{
    //var dest = dest



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.renameTo(dest.getFile());

                        ;
    
}


    public setLastModified(time: number): boolean{
    //var time = time



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setLastModified(time);

                        ;
    
}


    public setReadOnly(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setReadOnly();

                        ;
    
}


    public setWritable(writable: boolean, ownerOnly: boolean): boolean{
    //var writable = writable
    //var ownerOnly = ownerOnly



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setExecutable(writable, ownerOnly);

                        ;
    
}


    public setWritable(writable: boolean): boolean{
    //var writable = writable



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setWritable(writable);

                        ;
    
}


    public setReadable(readable: boolean, ownerOnly: boolean): boolean{
    //var readable = readable
    //var ownerOnly = ownerOnly



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setReadable(readable, ownerOnly);

                        ;
    
}


    public setReadable(readable: boolean): boolean{
    //var readable = readable



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setReadable(readable);

                        ;
    
}


    public setExecutable(executable: boolean, ownerOnly: boolean): boolean{
    //var executable = executable
    //var ownerOnly = ownerOnly



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setExecutable(executable, ownerOnly);

                        ;
    
}


    public setExecutable(executable: boolean): boolean{
    //var executable = executable



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.setExecutable(executable);

                        ;
    
}


    public canExecute(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.canExecute();

                        ;
    
}


    public getTotalSpace(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getTotalSpace();

                        ;
    
}


    public getFreeSpace(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getFreeSpace();

                        ;
    
}


    public getUsableSpace(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.getUsableSpace();

                        ;
    
}


    public compareTo(pathname: File): number{
var pathname = pathname



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.compareTo(pathname);

                        ;
    
}


    public equals(obj: any = {}?): boolean{
var obj = obj



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.equals(obj);

                        ;
    
}


    public hashCode(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TsUtil.getInstance()!.hashCode(this.file);

                        ;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.file.toString();

                        ;
    
}


}
                
            

