
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
        




export class FileData
            extends Object
         {
        

    private static readonly instance: FileData = new FileData();
        
        

    public static getInstance(): FileData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly NAME: string = "FILE_NAME";
        
        

    public readonly ISFILE: string = "FILE_ISFILE";
        
        

    public readonly ISDIRECTORY: string = "FILE_ISDIRECTORY";
        
        

    public readonly ISHIDDEN: string = "FILE_ISHIDDEN";
        
        

    public readonly ISABSOLUTE: string = "FILE_ISABSOLUTE";
        
        

    public readonly ROOT_NAME: string = "FILE_ROOT_NAME";
        
        

    public readonly PATH: string = "FILE_PATH";
        
        

    public readonly ABSOLUTE_PATH: string = "FILE_ABSOLUTE_PATH";
        
        

    public readonly CANONICAL_PATH: string = "FILE_CANONICAL_PATH";
        
        

    public readonly PARENT: string = "FILE_PARENT";
        
        

    public readonly MINLEN: number = 1;
        
        

    public readonly MAXLEN: number = 120;
        
        

    public readonly MAXIMAGEFILESIZE: number = 1048576;
        
        

    public readonly MINIMAGEFILESIZE: number = 32;
        
        

    public readonly MAXDOWNLOADABLEFILESIZE: number = 1048576 *20;
        
        

    public readonly MINDOWNLOADABLEFILESIZE: number = 1;
        
        

}
                
            

