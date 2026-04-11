
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
        



            import Vector from "@ohos.util.Vector";
        

//import { Vector } from "../../../../../java/util/Vector.js";

    
import { swing } from "../../../../../javax/swing.js";

    

export class DefaultListModelHelper
            extends Object
         {
        

    private defaultListModel: DefaultListModel

    private vector: Vector
public constructor (){

            super();
            this.vector= new Vector();
    
this.defaultListModel= new DefaultListModel();
    
}


    public initDefaultModelList(){
this.defaultListModel= new DefaultListModel();
    

    var size: number = this.vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var moduleName: string = this.vector.get(index);

                         as String;
        
        
;
    
this.defaultListModel!.addElement(moduleName);
    
}

}


    public getListModel(): ListModel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultListModel as ListModel;
    
}


    public add(string: string){
var string = string
this.vector.add(string);
    
}


    public remove(string: string){
var string = string
this.vector.remove(string);
    
}


}
                
            

