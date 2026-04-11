
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
        



import { CircularIndexUtil } from "../../../../org/allbinary/util/CircularIndexUtil.js";

    

export class BasicColorArrayIndexer
            extends Object
         {
        

    private basicColorArray: BasicColor[]

    private circularIndexUtil: CircularIndexUtil
public constructor (basicColorArray: BasicColor[]){

            super();
            var basicColorArray = basicColorArray
this.basicColorArray= basicColorArray;
    
this.circularIndexUtil= CircularIndexUtil.getInstance(this.basicColorArray!.length);
    
}


    public next(){
this.circularIndexUtil!.next();
    
}


    public get(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicColorArray[this.circularIndexUtil!.getIndex()]!;
    
}


    public getBasicColorArray(): BasicColor[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColorArray;
    
}


}
                
            

