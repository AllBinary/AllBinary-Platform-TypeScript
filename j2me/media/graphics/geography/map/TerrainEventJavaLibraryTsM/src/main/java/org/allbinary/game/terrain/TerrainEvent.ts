
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
        



import { NullUtil } from "../../../../org/allbinary/logic/NullUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AllBinaryEventObject } from "../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicTerrainInfo } from "./BasicTerrainInfo.js";

export class TerrainEvent extends AllBinaryEventObject {
        

    private basicTerrainInfo: BasicTerrainInfo = BasicTerrainInfo.NULL_BASIC_TERRAIN_INFO;
        
        
public constructor (){
            super(NullUtil.getInstance()!.NULL_OBJECT);
                    

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (basicTerrainInfo: BasicTerrainInfo){
            super(basicTerrainInfo);
                        //var basicTerrainInfo = basicTerrainInfo


                            //For kotlin this is before the body of the constructor.
                    
this.setBasicTerrainInfo(basicTerrainInfo);
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("TerrainEvent: \n");
    
stringBuffer!.append("LayerInterface: ");
    
stringBuffer!.append(this.basicTerrainInfo!.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    public getBasicTerrainInfo(): BasicTerrainInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicTerrainInfo;
    
}


    public setBasicTerrainInfo(basicTerrainInfo: BasicTerrainInfo){
var basicTerrainInfo = basicTerrainInfo
this.basicTerrainInfo= basicTerrainInfo;
    
}


    public setBasicTerrainInfoForCircularStaticPool(basicTerrainInfo: BasicTerrainInfo){
var basicTerrainInfo = basicTerrainInfo
this.basicTerrainInfo= basicTerrainInfo;
    
}


}
                
            

