
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class IntegerDimension
            extends Object
         {
        

    private width: number= 0

    private height: number= 0
public constructor (width: number, height: number){

            super();
        this.setWidth(width);
    
this.setHeight(height);
    
}


    public getWidth(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.width;
    
}


    public setWidth(width: number){
this.width= width;
    
}


    public getHeight(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.height;
    
}


    public setHeight(height: number){
this.height= height;
    
}


}
                
            

