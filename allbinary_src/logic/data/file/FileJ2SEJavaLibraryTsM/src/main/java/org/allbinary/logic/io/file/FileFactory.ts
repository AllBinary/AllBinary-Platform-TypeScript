
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
        




export class FileFactory
            extends Object
         {
        

    private static readonly instance: FileFactory = new FileFactory();
        
        

    public static getInstance(): FileFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public getInstance(filePath: string): AbFile{
var filePath = filePath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFile(filePath, false);
    
}


                //@Throws(Error::class)
            
    public getInstance(file: AbFile, childFilePath: string): AbFile{
var file = file
var childFilePath = childFilePath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AbFile(file, childFilePath);
    
}


                //@Throws(Error::class)
            
    public isFile(path: string): boolean{
var path = path

    var file: AbFile = new AbFile(path);
        
        
;
    

                        if(file.exists())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


}
                
            

