
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { Image } from "../../../../javax/microedition/lcdui/Image.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class OpenGLESImageExclusionUtil
            extends Object
         {
        

    private static readonly instance: OpenGLESImageExclusionUtil = new OpenGLESImageExclusionUtil();
        
        

    public static getInstance(): OpenGLESImageExclusionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly EXCLUSION: string = "font";
        
        

    public readonly list: BasicArrayList = new BasicArrayListD();
        
        
private constructor (){

            super();
        }


    public isCustomScaling(image: Image): boolean{
    //var image = image

    var imageName: string = image.getName()!;
        
        
;
    

    var isNormalScaling: boolean = this.list.size() == 0 || imageName!.startsWith(this.EXCLUSION);
        
        
;
    

                        if(isNormalScaling)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            
    var size: number = this.list.size()!;
        
        
;
    

    var name: string
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
name= this.list.get(index); as String;
    

                        if(imageName!.startsWith(name))
                        
                                    {
                                    isNormalScaling= true;
    

                                    }
                                
}


                        }
                            

                        if(isNormalScaling)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                        }
                            
}


}
                
            

