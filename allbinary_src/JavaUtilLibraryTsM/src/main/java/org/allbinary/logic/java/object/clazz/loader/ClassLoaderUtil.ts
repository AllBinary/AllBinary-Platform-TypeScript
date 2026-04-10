
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
        




export class ClassLoaderUtil
            extends Object
         {
        

                //@Throws(Error::class)
            
    public static getName(anyType: any = {}): string{
var anyType = anyType

    var classLoader: ClassLoader = anyType!::class.java.classLoader!;
        
        


                        if(classLoader != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "ClassLoader: " +classLoader!::class.toString()!;
    

                                    }
                                



                            throw Error("Unable to get ClassLoader")
}

private constructor (){

            super();
            }


}
                
            

