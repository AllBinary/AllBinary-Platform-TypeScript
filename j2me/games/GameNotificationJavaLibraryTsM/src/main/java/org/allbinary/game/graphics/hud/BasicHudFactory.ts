
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
        
export class BasicHudFactory
            extends Object
         {
        

    private static readonly instance: BasicHudFactory = new BasicHudFactory();
        
        

    public static getInstance(): BasicHudFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
            }


    public readonly DIRECTION_EXCEPTION: string = "Only Horizontal Direction is Allowed Currently";
        
        

    public readonly VERTICAL: number = 0;
        
        

    public readonly HORIZONTAL: number = 1;
        
        

    public readonly BOTTOMLEFT: number = 0;
        
        

    public readonly BOTTOMRIGHT: number = 1;
        
        

    public readonly TOPLEFT: number = 2;
        
        

    public readonly TOPRIGHT: number = 3;
        
        

    public readonly BOTTOMCENTER: number = 4;
        
        

    public readonly TOPCENTER: number = 5;
        
        

    public readonly ABSOLUTE: number = 6;
        
        

}
                
            

