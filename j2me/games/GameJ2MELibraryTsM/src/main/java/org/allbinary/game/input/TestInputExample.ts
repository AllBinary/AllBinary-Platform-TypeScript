
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
        
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TestInputInterface } from './TestInputInterface.js';
//not GWT import - same folder const TestInputInterface = globalThis.org.allbinary.game.input.TestInputInterface;

                
export class TestInputExample
            extends Object
         implements TestInputInterface {
        

    private testValue: number= 0;

    public up(){
}


    public down(){
}


    public left(){
this.testValue++;
    
}


    public right(){
this.testValue--;
    
}


    public strafeLeft(){
}


    public strafeRight(){
}


    public paint(graphics: Graphics){
}


    public paintThreed(graphics: Graphics){
}


}



