
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
        



import { Hashtable } from "../../../../../../java/util/Hashtable.js";

    
import { Vector } from "../../../../../../java/util/Vector.js";

    
import { StringMaker } from "../../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    

import { AbeClientInformationData } from "./AbeClientInformationData.js";

import { LicenseTypeFactory } from "./LicenseTypeFactory.js";

import { AbeClientInformationData } from "./AbeClientInformationData.js";

import { AbeClientInformationData } from "./AbeClientInformationData.js";

export class AbeClientLicense
            extends Object
        
                , AbeLicenseInterface {
        

    public static hasRequiredKeys(resultHashtable: Hashtable<any, any>): boolean{
var resultHashtable = resultHashtable

    var abeClientInformationData: AbeClientInformationData = AbeClientInformationData.getInstance()!;
        
        
;
    

                        if(resultHashtable!.containsKey(abeClientInformationData!.LICENSEID) && resultHashtable!.containsKey(abeClientInformationData!.LICENSESERVERS) && resultHashtable!.containsKey(abeClientInformationData!.KEY) && resultHashtable!.containsKey(abeClientInformationData!.LICENSE_TYPE))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    private hashtable: Hashtable<any, any>

    private id: string

    private servers: BasicArrayList

    private special: string

    private licenseType: LicenseType
public constructor (hashtable: Hashtable<any, any>){

            super();
            var hashtable = hashtable
this.hashtable= new Hashtable<any, any>();
    

    var abeClientInformationData: AbeClientInformationData = AbeClientInformationData.getInstance()!;
        
        
;
    

    var keyValue: any = hashtable.get(abeClientInformationData!.KEY)!;
        
        
;
    

                        if(keyValue != 
                                    null
                                )
                        
                                    {
                                    
                        if(keyValue is String)
                        
                                    {
                                    this.hashtable.put(abeClientInformationData!.KEY, keyValue);
    

                                    }
                                

                                    }
                                
this.id= hashtable.get(abeClientInformationData!.LICENSEID);

                         as String;
    

    var vector: Vector = hashtable.get(abeClientInformationData!.LICENSESERVERS);

                         as Vector;
        
        
;
    
this.servers= new BasicArrayList();
    

    var size: number = vector.length!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
this.servers.add(vector.get(index));
    
}


    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        
;
    
this.setSpecial(stringUtil!.getInstance(hashtable.get(abeClientInformationData!.SPECIAL);

                         as String));
    

    var licenseTypeString: string = stringUtil!.getInstance(hashtable.get(abeClientInformationData!.LICENSE_TYPE);

                         as String)!;
        
        
;
    
this.licenseType= LicenseTypeFactory.getInstance()!.getInstance(licenseTypeString);
    
}


    public hasKey(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isValid();

                        ;
    
}


    public getKey(keyName: string): string{
var keyName = keyName



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashtable.get(keyName as Object);

                         as String;
    
}


    public getLicenseId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getServers(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.servers;
    
}


    public isValid(): boolean{

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        
;
    

                        if(!stringValidationUtil!.isEmpty(this.getKey(AbeClientInformationData.getInstance()!.KEY));

                        )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var BREAK: string = "<br/>";
        
        
;
    
stringBuffer!.append("License Id: ");
    
stringBuffer!.append(this.getLicenseId());
    
stringBuffer!.append(BREAK);
    
stringBuffer!.append("Is Valid: ");
    
stringBuffer!.appendboolean(this.isValid());
    
stringBuffer!.append(BREAK);
    
stringBuffer!.append("Keys: ");
    
stringBuffer!.append(this.hashtable.toString());
    
stringBuffer!.append(BREAK);
    

    var serverVector: BasicArrayList = this.getServers()!;
        
        
;
    

    var size: number = serverVector!.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var nextServerString: string = serverVector!.get(index);

                         as String;
        
        
;
    
stringBuffer!.append("Server: ");
    
stringBuffer!.append(nextServerString);
    
stringBuffer!.append(BREAK);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


    setSpecial(special: string){
var special = special
this.special= special;
    
}


    public getSpecial(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return special;
    
}


    public getLicenseType(): LicenseType{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return licenseType;
    
}


}
                
            

