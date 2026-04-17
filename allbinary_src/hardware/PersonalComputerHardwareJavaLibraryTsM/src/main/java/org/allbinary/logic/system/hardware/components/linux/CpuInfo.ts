
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
        
export class CpuInfo
            extends Object
         {
        

    public static readonly PROCESSOR: CpuInfo = new CpuInfo("processor");
        
        

    public static readonly VENDORID: CpuInfo = new CpuInfo("vendor_id");
        
        

    public static readonly CPUFAMILY: CpuInfo = new CpuInfo("cpu family");
        
        

    public static readonly MODEL: CpuInfo = new CpuInfo("model");
        
        

    public static readonly MODELNAME: CpuInfo = new CpuInfo("model name");
        
        

    public static readonly STEPPING: CpuInfo = new CpuInfo("stepping");
        
        

    public static readonly CPUMHZ: CpuInfo = new CpuInfo("cpu MHz");
        
        

    public static readonly CACHESIZE: CpuInfo = new CpuInfo("cache size");
        
        

    public static readonly FDIVBUG: CpuInfo = new CpuInfo("fdiv_bug");
        
        

    public static readonly HLTBUG: CpuInfo = new CpuInfo("hlt_bug");
        
        

    public static readonly F00FBUG: CpuInfo = new CpuInfo("f00f_bug");
        
        

    public static readonly COMABUG: CpuInfo = new CpuInfo("coma_bug");
        
        

    public static readonly FPU: CpuInfo = new CpuInfo("fpu");
        
        

    public static readonly FPUEXCEPTION: CpuInfo = new CpuInfo("fpu_exception");
        
        

    public static readonly CPUIDLEVEL: CpuInfo = new CpuInfo("cache size");
        
        

    public static readonly WP: CpuInfo = new CpuInfo("yes");
        
        

    public static readonly FLAGS: CpuInfo = new CpuInfo("flags");
        
        

    public static readonly BOGOMIPS: CpuInfo = new CpuInfo("bogomips");
        
        

    private name: string
private constructor (name: string){

            super();
            var name = name
this.name= name;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


}
                
            

