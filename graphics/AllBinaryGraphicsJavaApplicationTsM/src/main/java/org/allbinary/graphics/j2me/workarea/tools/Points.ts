
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
        



import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { PointsInterface } from "./PointsInterface.js";

export class Points
            extends Object
         implements PointsInterface {
        

    private readonly pointVector: BasicArrayList
public constructor (){

            super();
        this.pointVector= new BasicArrayList();
    
}


    public init(){
this.pointVector!.clear();
    
}


    public getPoints(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pointVector;
    
}


    public addPoints(vector: BasicArrayList){
var vector = vector
this.pointVector!.addAll2(vector);
    
}


    public isValid(): boolean{

                        if(this.pointVector!.size() > 1)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getSize(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.pointVector!.size();

                        ;
    
}


}
                
            

