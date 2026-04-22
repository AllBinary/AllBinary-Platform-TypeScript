
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
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SmallLongFactory
            extends Object
         {
        

    private static readonly instance: SmallLongFactory = new SmallLongFactory();
        
        

    public static getInstance(): SmallLongFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NEGATIVE_MAX: number = 500;
        
        

    public readonly POSITIVE_MAX: number = 0x2D1;
        
        

    private readonly INTEGER_ARRAY: Long[] = new Array(NEGATIVE_MAX +POSITIVE_MAX);
        
        

    private readonly STRING_ARRAY: string[] = new Array(NEGATIVE_MAX +POSITIVE_MAX);
        
        

    public MIN: number = 0;
        
        

    public lastMin: number = 0;
        
        

    public lastNegativeMin: number = 0;
        
        

    public init(value: number, negativeValue: number){
var value = value
var negativeValue = negativeValue




                        for (
    var index: number = value -1;
        
        
index >= this.lastMin; index--)
        {
this.INTEGER_ARRAY[index +this.NEGATIVE_MAX]= index as Long;
    
}





                        for (
    var index: number = negativeValue -1;
        
        
index >= this.lastNegativeMin; index--)
        {
this.INTEGER_ARRAY[index]=  -index as Long;
    
}


                        if(this.lastMin < value)
                        
                                    {
                                    this.lastMin= value;
    
this.MIN= value;
    

                                    }
                                

                        if(this.lastNegativeMin < negativeValue)
                        
                                    {
                                    this.lastNegativeMin= negativeValue;
    

                                    }
                                
}


    public init(){

                        if(this.INTEGER_ARRAY[0] == 
                                    null
                                )
                        
                                    {
                                    
                        if(this.lastMin < this.POSITIVE_MAX || this.lastNegativeMin < this.NEGATIVE_MAX)
                        
                                    {
                                    



                        for (
    var index: number = this.POSITIVE_MAX -1;
        
        
index >= this.lastMin; index--)
        {
this.INTEGER_ARRAY[index +this.NEGATIVE_MAX]= index as Long;
    
}





                        for (
    var index: number = this.NEGATIVE_MAX -1;
        
        
index >= this.lastNegativeMin; index--)
        {
this.INTEGER_ARRAY[index]=  -index as Long;
    
}

this.lastMin= this.POSITIVE_MAX;
    
this.lastNegativeMin= this.NEGATIVE_MAX;
    

                                    }
                                

                                    }
                                
}

private constructor (){

            super();
        }


    public getInstanceNoThrow(index: number): Long{
var index = index

                        if(index +this.NEGATIVE_MAX > this.INTEGER_ARRAY.length -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.INTEGER_ARRAY[ -1 +this.NEGATIVE_MAX]!;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.INTEGER_ARRAY[(index) +this.NEGATIVE_MAX]!;
    
}


    public getString(index: number): string{
var index = index

    var i: number = index +NEGATIVE_MAX;
        
        
;
    

                        if(this.STRING_ARRAY[i] == 
                                    null
                                )
                        
                                    {
                                    this.STRING_ARRAY[i]= this.INTEGER_ARRAY[i]!.toString();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.STRING_ARRAY[i]!;
    
}


}
                
            

