
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
        
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
type MyRandomFactory<T = any, U = any> = typeof MyRandomFactory extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MyRandomFactory;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicGraphicsPipeline } from './BasicGraphicsPipeline.js';
//sameFolderImports - not GWT import - same folder const BasicGraphicsPipeline

export class RandomTranslation
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(vector: BasicArrayList, howMuch: number): BasicArrayList{

    let myRandomFactory: MyRandomFactory = MyRandomFactory.getInstance()!;;
    

    let x: number =  -myRandomFactory!.getNextInt(howMuch);;;
    

    let y: number = myRandomFactory!.getNextInt(howMuch)!;;
    

    let graphicsPipe: BasicGraphicsPipeline = new BasicGraphicsPipeline(vector);;
    
graphicsPipe!.createMatrix();
    
graphicsPipe!.translate(x, y);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsPipe!.getMatrix();;
    
}


}

