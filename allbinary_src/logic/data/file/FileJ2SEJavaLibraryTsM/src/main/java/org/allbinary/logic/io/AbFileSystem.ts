
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
        




export class AbFileSystem
            extends Object
         {
        

    private static readonly instance: AbFileSystem = new AbFileSystem();
        
        

    public static getInstance(): AbFileSystem{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly type: string = "java.io";
        
        

    public getType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return type;
    
}


    public isType(type: string): boolean{
var type = type

    
                        if(this.type.compareTo(type) == 0)
                        
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
                
            

