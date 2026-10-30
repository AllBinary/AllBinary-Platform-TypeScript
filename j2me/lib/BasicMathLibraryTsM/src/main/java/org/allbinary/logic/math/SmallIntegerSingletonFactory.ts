
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil

import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SmallIntegerSingletonFactory
            extends Object
         {
        

    private static readonly instance: SmallIntegerSingletonFactory = new SmallIntegerSingletonFactory();

    public static getInstance(): SmallIntegerSingletonFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SmallIntegerSingletonFactory.instance;
    
}


    public readonly NEGATIVE_MAX: number = 500;

    public readonly POSITIVE_MAX: number = 0x2D1;

    private readonly INTEGER_ARRAY: Integer[] = new Array(this.NEGATIVE_MAX +this.POSITIVE_MAX);

    private readonly STRING_ARRAY: string[] = new Array(this.NEGATIVE_MAX +this.POSITIVE_MAX);

    private MIN: number = 0;

    private lastMin: number = 0;

    private lastNegativeMin: number = 0;

    public getMin(): number{

    let minAllowed: number = this.getMinAllowed()!;;
    

                        if(this.MIN <= minAllowed)
                        
                                    {
                                    
                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    
                                    }
                                
                             else 
                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    
    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(new StringMaker().append("Android InputFactory was initialized before GameMidlet: ")!.appendint(this.MIN)!.toString(), this, "getMin");
    
this.initWithRange(0x291, 6);
    

                                    }
                                
                        else {
                            
    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.putF(new StringMaker().append("InputFactory was initialized before GameMidlet or KeyFactoryInitializer - Currently this is occurs on JS build by TouchMotionGestureFactory constructor: ")!.appendint(this.MIN)!.toString(), this, "getMin");
    
this.initWithRange(0x2D0, 6);
    

                        }
                            

                                    }
                                

                        if(this.MIN <= minAllowed)
                        
                                    {
                                    
    let logUtil: LogUtil = LogUtil.getInstance()!;;
    
logUtil!.put("This means you loaded the InputFactory before determining the platform input size requirements.", this, "getMin", new Exception());
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.MIN;
    
}


    getMinAllowed(): number{

                        if(J2MEUtil.isJ2ME())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0;
    

                                    }
                                
                        else {
                            
                        if(AndroidUtil.isAndroid())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 0x101;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return 23;
    

                        }
                            

                        }
                            
}


    public initWithRange(value: number, negativeValue: number){




                        for (
    let index: number = value -1;index >= this.lastMin; index--)
        {
this.INTEGER_ARRAY[index +this.NEGATIVE_MAX]= new Integer(index);
    
}





                        for (
    let index: number = negativeValue -1;index >= this.lastNegativeMin; index--)
        {
this.INTEGER_ARRAY[index]= new Integer( -index);
    
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

                        if(this.lastMin < this.POSITIVE_MAX || this.lastNegativeMin < this.NEGATIVE_MAX)
                        
                                    {
                                    



                        for (
    let index: number = this.POSITIVE_MAX -1;index >= this.lastMin; index--)
        {
this.INTEGER_ARRAY[index +this.NEGATIVE_MAX]= new Integer(index);
    
}





                        for (
    let index: number = this.NEGATIVE_MAX -1;index >= this.lastNegativeMin; index--)
        {
this.INTEGER_ARRAY[index]= new Integer( -index);
    
}

this.lastMin= this.POSITIVE_MAX;
    
this.MIN= this.lastMin;
    
this.lastNegativeMin= this.NEGATIVE_MAX;
    

                                    }
                                
}


private constructor (){

            super();
        this.initWithRange(23, 0);
    
}


    public getAt(index: number): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.INTEGER_ARRAY[index +this.NEGATIVE_MAX]!;
    
}


    public getAtNoThrow(index: number): Integer{

                        if(index +this.NEGATIVE_MAX > this.INTEGER_ARRAY.length -1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.INTEGER_ARRAY[ -1 +this.NEGATIVE_MAX]!;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.INTEGER_ARRAY[index +this.NEGATIVE_MAX]!;
    
}


    public createInstance(index: number): Integer{

    let integer: Integer = this.getAt(index)!;;
    

                        if(integer == 
                                    null
                                )
                        
                                    {
                                    integer= new Integer(index);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return integer;
    
}


    public getString(index: number): string{

    let i: number = index +this.NEGATIVE_MAX;;
    

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

