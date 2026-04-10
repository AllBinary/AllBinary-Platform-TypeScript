
        /* Generated Code Do Not Modify */
        




export class Objects
            extends Object
         {
        

    public static <T> requireNonNull(value: T): T{
    //var value = value

                        if(value == 
                                    null
                                )
                        
                                    {
                                    


                            throw NullPointerException()

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
                                    


                            throw NullPointerException(message)

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    

                        }
                            
}


}
                
            

