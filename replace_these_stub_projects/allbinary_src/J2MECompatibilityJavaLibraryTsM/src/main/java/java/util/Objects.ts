
        /* Generated Code Do Not Modify */
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Objects
            extends Object
         {
        

    public static <T> requireNonNull(value: T): T{
    //var value = value

                        if(value == 
                                    null
                                )
                        
                                    {
                                    


                            throw new NullPointerException()

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    

                        }
                            
}


    public static <T> requireNonNull(value: T, message: string): T{
    //var value = value
var message = message

                        if(value == 
                                    null
                                )
                        
                                    {
                                    


                            throw new NullPointerException(message)

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    

                        }
                            
}


}
                
            

