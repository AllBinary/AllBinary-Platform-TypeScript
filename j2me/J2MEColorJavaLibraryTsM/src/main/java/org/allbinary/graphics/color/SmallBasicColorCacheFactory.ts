
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
        



import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

export class SmallBasicColorCacheFactory
            extends Object
         {
        

    private static readonly instance: SmallBasicColorCacheFactory = new SmallBasicColorCacheFactory();
        
        

    public static getInstance(): SmallBasicColorCacheFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly SIZE: number = 255;
        
        

    private readonly INDEX_TO_COLOR: number[] = new Array(SIZE);
        
        

    private readonly BASIC_COLOR_ARRAY: BasicColor[] = new Array(SIZE);
        
        

    private colorIndex: number = 0;
        
        
private constructor (){

            super();
            }


    public add(basicDefaultColor: BasicColor){
    //var basicDefaultColor = basicDefaultColor
BASIC_COLOR_ARRAY[colorIndex]= basicDefaultColor;
    
INDEX_TO_COLOR[colorIndex]= basicDefaultColor!.toInt();
    
colorIndex++;
    
}


    public getInstance(colorAsInt: number): BasicColor{
    //var colorAsInt = colorAsInt

    var basicColor: BasicColor
;
    




                        for (
    var index: number = 0;
        
        
index < SIZE; index++)
        {

                        if(INDEX_TO_COLOR[index] == colorAsInt)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BASIC_COLOR_ARRAY[index]!;
    

                                    }
                                
}


    var ALPHA_MASK: number = 0xFF000000.toInt();
        
        
;
    
basicColor= new BasicColor(colorAsInt and ALPHA_MASK, colorAsInt and 0x00FFFFFF, StringUtil.getInstance()!.EMPTY_STRING);
    
this.add(basicColor);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicColor;
    
}


}
                
            

