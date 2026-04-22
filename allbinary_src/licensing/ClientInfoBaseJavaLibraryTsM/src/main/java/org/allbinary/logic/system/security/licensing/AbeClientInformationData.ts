
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
        
export class AbeClientInformationData
            extends Object
         {
        

    private static readonly instance: AbeClientInformationData = new AbeClientInformationData();
        
        

    public static getInstance(): AbeClientInformationData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public readonly KEY: string = "KEY";
        
        

    public readonly NAME: string = "NAME";
        
        

    public readonly VERSION: string = "VERSION";
        
        

    public readonly SPECIALNAME: string = "SPECIALNAME";
        
        

    public readonly LICENSEID: string = "LICENSEID";
        
        

    public readonly LICENSE_TYPE: string = "LICENSETYPE";
        
        

    public readonly PREVIOUSLICENSEID: string = "PREVIOUSLICENSEID";
        
        

    public readonly OSNAME: string = "OSNAME";
        
        

    public readonly OSARCH: string = "OSARCH";
        
        

    public readonly OSVERSION: string = "OSVERSION";
        
        

    public readonly OS: string = "OS";
        
        

    public readonly HARDWARE: string = "HARDWARE";
        
        

    public readonly LICENSESERVERS: string = "LICENSESERVERS";
        
        

    public readonly NEWLICENSE: string = "NEWLICENSE";
        
        

    public readonly ISNEW: string = "ISNEW";
        
        

    public readonly SPECIAL: string = "SPECIAL";
        
        

}
                
            

