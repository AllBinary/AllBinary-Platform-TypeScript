
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
        



import { StringMaker } from "../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonLabels } from "../../../org/allbinary/string/CommonLabels.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CircularIndexUtil
            extends Object
         {
        

    public static readonly NULL_CIRCULAR_INDEX_UTIL: CircularIndexUtil = new CircularIndexUtil(0);
        
        

    public static getInstance(max: number): CircularIndexUtil{
var max = max



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CircularIndexUtil(max);
    
}


    public static getInstance(index: number, max: number): CircularIndexUtil{
var index = index
var max = max



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new CircularIndexUtil(index, max);
    
}


    private index: number = 0;
        
        

    private lastIndex: number = 0;
        
        

    private size: number = 0;
        
        
private constructor (index: number, size: number){

            super();
        var index = index
var size = size
this.setSize(size);
    
this.setIndex(index);
    
}

private constructor (size: number){

            super();
        var size = size
this.setSize(size);
    
}


    public next(): number{

                        if(this.index >= this.lastIndex)
                        
                                    {
                                    this.index= 0;
    

                                    }
                                
                        else {
                            this.index++;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.index;
    
}


    public previous(): number{

                        if(this.index < 1)
                        
                                    {
                                    this.index= this.lastIndex;
    

                                    }
                                
                        else {
                            this.index--;
    

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.index;
    
}


    public setIndex(index: number){
var index = index

                        if(index > this.lastIndex)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    

                                    }
                                
this.index= index;
    
}


    public getIndex(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.index;
    
}


    public setSize(size: number){
var size = size
this.size= size;
    
this.lastIndex= size -1;
    
this.index= 0;
    
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return size;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new StringMaker().
                            append(CommonLabels.getInstance()!.INDEX_LABEL)!.appendint(this.index)!.append("lastIndex: ")!.appendint(this.lastIndex)!.append("size: ")!.appendint(this.size)!.toString();

                        ;
    
}


}
                
            

