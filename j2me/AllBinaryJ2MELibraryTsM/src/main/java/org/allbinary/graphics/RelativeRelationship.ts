
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
        



import { BasicArrayList } from "../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class RelativeRelationship
            extends Object
         {
        

    public static readonly NULL_RELATIVE_RELATIONSHIP: RelativeRelationship = new RelativeRelationship(PointFactory.getInstance()!.ZERO_ZERO, BasicArrayListUtil.getInstance()!.getImmutableInstance());
        
        

    private typesAllowedList: BasicArrayList

    private x: number

    private y: number

    private z: number
public constructor (point: GPoint, typesAllowedList: BasicArrayList){

            super();
            var point = point
var typesAllowedList = typesAllowedList
this.x= point.getX();
    
this.y= point.getY();
    
this.z= point.getZ();
    
this.typesAllowedList= typesAllowedList;
    
}


    public getX(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.x;
    
}


    public getY(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.y;
    
}


    public getZ(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.z;
    
}


    public getTypesAllowedList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return typesAllowedList;
    
}


    public setTypesAllowedList(typesAllowedList: BasicArrayList){
var typesAllowedList = typesAllowedList
this.typesAllowedList= typesAllowedList;
    
}


}
                
            

