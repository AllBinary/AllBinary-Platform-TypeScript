
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { TableMappingInterface } from "../../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    

export class JvmStatisticsMapping extends JvmStatistics
                , TableMappingInterface {
        
public constructor ()                        

                            : super(){

            super();
            

                            //For kotlin this is before the body of the constructor.
                    
}


    public toHashMap(): HashMap<Any, Any>{

    var hashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        

hashMap!.put(JvmStatisticsData.FREE_MEMORY_BYTES, this.getFreeMemoryBytesString())
hashMap!.put(JvmStatisticsData.FREE_MEMORY_KILOBYTES, this.getFreeMemoryKilobytesString())
hashMap!.put(JvmStatisticsData.FREE_MEMORY_MEGABYTES, this.getFreeMemoryMegabytesString())
hashMap!.put(JvmStatisticsData.MAX_MEMORY_BYTES, this.getMaxMemoryBytesString())
hashMap!.put(JvmStatisticsData.MAX_MEMORY_KILOBYTES, this.getMaxMemoryKilobytesString())
hashMap!.put(JvmStatisticsData.MAX_MEMORY_MEGABYTES, this.getMaxMemoryMegabytesString())
hashMap!.put(JvmStatisticsData.NUMBER_OF_THREADS, this.getNumberOfThreadsString())
hashMap!.put(JvmStatisticsData.TOTAL_MEMORY_BYTES, this.getTotalMemoryBytesString())
hashMap!.put(JvmStatisticsData.TOTAL_MEMORY_KILOBYTES, this.getTotalMemoryKilobytesString())
hashMap!.put(JvmStatisticsData.TOTAL_MEMORY_MEGABYTES, this.getTotalMemoryMegabytesString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public getKey(): any = {}{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return JvmStatisticsData.NAME;
    
}


                //@Throws(Error::class)
            
    public toVector(): Vector{

    var vector: Vector = new Vector();
        
        

vector.add(this.getFreeMemoryBytesString())
vector.add(this.getFreeMemoryKilobytesString())
vector.add(this.getFreeMemoryMegabytesString())
vector.add(this.getMaxMemoryBytesString())
vector.add(this.getMaxMemoryKilobytesString())
vector.add(this.getMaxMemoryMegabytesString())
vector.add(this.getNumberOfThreadsString())
vector.add(this.getTotalMemoryBytesString())
vector.add(this.getTotalMemoryKilobytesString())
vector.add(this.getTotalMemoryMegabytesString())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


}
                
            

