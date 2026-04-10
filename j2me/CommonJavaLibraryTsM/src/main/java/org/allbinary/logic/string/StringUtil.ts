
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
        




export class StringUtil
            extends Object
         {
        

    private static readonly instance: StringUtil = new StringUtil();
        
        

    public static getInstance(): StringUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.instance;
    
}


    public readonly NULL_STRING: string = "null";
        
        

    public readonly EMPTY_STRING: string = "";
        
        

    public ONE_EMPTY_STRING_ARRAY: string[] = 
                                                        [
                                                            this.EMPTY_STRING
                                                        ];
        
        

    private readonly stringArray: string[] = new Array(0);
        
        
private constructor (){

            super();
            }


    public getInstance(string: string): string{
var string = string

    
                        if(string == 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EMPTY_STRING;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return string;
    

                        }
                            
}


    public getArrayInstance(): string[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.stringArray;
    
}


    public count(string: string, aChar: string): number{
    //var string = string
    //var aChar = aChar

    var count: number = 0;
        
        


    var size: number = string.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    
                        if(string[index] == aChar)
                        
                                    {
                                    count++

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return count;
    
}


    public toString(anyType: any = {}): string{
    //var anyType = anyType

    
                        if(anyType != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return anyType!.toString();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.NULL_STRING;
    

                        }
                            
}


}
                
            

