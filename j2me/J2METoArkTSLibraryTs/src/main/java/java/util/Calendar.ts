/*actual*/ export class Calendar
            extends Object
         {
        

    private static readonly instance: Calendar = new Calendar();
        
        

    /*actual*/ public static getInstance(): Calendar{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Calendar.instance;
    
}

private constructor (){

            super();
            }        
        

    /*actual*/ public getTime(): Date{
                        return new Date();
    
}


}
                
            

