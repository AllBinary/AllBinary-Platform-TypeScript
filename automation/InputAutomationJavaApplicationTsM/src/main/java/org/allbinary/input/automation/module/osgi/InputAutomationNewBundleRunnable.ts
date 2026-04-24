
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
        



import { File } from "../../../../../../java/io/File.js";

    
import { FileFilter } from "../../../../../../java/io/FileFilter.js";

    
import { FileInputStream } from "../../../../../../java/io/FileInputStream.js";

    
import { URL } from "../../../../../../java/net/URL.js";

    
import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../java/util/Set.js";

    
import { JarInputStream } from "../../../../../../java/util/jar/JarInputStream.js";

    
import { Manifest } from "../../../../../../java/util/jar/Manifest.js";

    
import { Bundle } from "../../../../../../org/osgi/framework/Bundle.js";

    
import { BundleContext } from "../../../../../../org/osgi/framework/BundleContext.js";

    
import { Constants } from "../../../../../../org/osgi/framework/Constants.js";

    
import { InputAutomationBundleActivator } from "../../../../../../bundle/input/automation/InputAutomationBundleActivator.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { FileWrapperUtil } from "../../../../../../org/allbinary/logic/io/file/FileWrapperUtil.js";

    
import { SubDirectory } from "../../../../../../org/allbinary/logic/io/file/directory/SubDirectory.js";

    
import { BasicFileFilterUtil } from "../../../../../../org/allbinary/logic/io/file/filter/BasicFileFilterUtil.js";

    
import { CommonLabels } from "../../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    
import { RunnableInterface } from "../../../../../../org/allbinary/thread/RunnableInterface.js";

    
import { TimeDelayHelper } from "../../../../../../org/allbinary/time/TimeDelayHelper.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InputAutomationNewBundleRunnable
            extends Object
         implements RunnableInterface {
        

    private static readonly FILE: string = "file:";
        
        

    private static readonly JAR_DIR_PROP: string = "org.knopflerfish.gosg.jars";
        
        

    private static readonly INPUT_AUTMATION_MODULE_BUNDLE_JAR_PATH: string = "ia/auto";
        
        

    private static readonly MODULES_START_LEVEL: number = 8;
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly inputAutomationBundleActivator: InputAutomationBundleActivator

    private running: boolean= false

    private fileBasicArrayList: BasicArrayList
public constructor (inputAutomationBundleActivator: InputAutomationBundleActivator){

            super();
        var inputAutomationBundleActivator = inputAutomationBundleActivator
this.inputAutomationBundleActivator= inputAutomationBundleActivator;
    
this.fileBasicArrayList= new BasicArrayListD();
    
}


                //@Throws(Error::class)
            
    public setThread(thread: Thread){
var thread = thread
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public isRunning(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return running;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setRunning(running: boolean){
var running = running
this.running= running;
    
}


                //@Throws(Error::class)
            
    updateModules(){
this.logUtil!.putF(this.commonStrings!.START, this, "updateModules");
    

    var list: BasicArrayList = this.findNewModules()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var bundle: Bundle
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
bundle= this.install(list.get(index) as URL);
    

                        if(bundle != 
                                    null
                                )
                        
                                    {
                                    bundle.start(MODULES_START_LEVEL);
    

                                    }
                                
}

}


                //@Throws(Error::class)
            
    getAllJarSymbolicNameHashMap(): HashMap<any, any>{
this.logUtil!.putF(this.commonStrings!.START, this, "getAllJarSymbolicNameHashMap");
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    

    var jarFileBasicArrayList: BasicArrayList = this.getJarModuleFileBasicArrayList()!;
        
        
;
    
this.logUtil!.putF("Jar Module Files: " +jarFileBasicArrayList, this, "getAllJarSymbolicNameHashMap");
    

    var size: number = jarFileBasicArrayList!.size()!;
        
        
;
    

    var file: File
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
file= jarFileBasicArrayList!.get(index); as File;
    

                        if(!file.isDirectory();)
                        
                                    {
                                    
    var fileInputStream: FileInputStream = new FileInputStream(file);
        
        
;
    

    var jarInputStream: JarInputStream = new JarInputStream(fileInputStream);
        
        
;
    

    var manifest: Manifest = jarInputStream!.getManifest()!;
        
        
;
    

                        if(manifest == 
                                    null
                                )
                        
                                    {
                                    
                                    }
                                
                        else {
                            
    var symbolicName: string = manifest.getMainAttributes()!.getValue(Constants.BUNDLE_SYMBOLICNAME)!;
        
        
;
    

                        if(symbolicName != 
                                    null
                                )
                        hashMap!.put(symbolicName, new URL(FILE +file.getAbsolutePath()));

                        }
                            

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    getJarModuleFileBasicArrayList(): BasicArrayList{
this.logUtil!.putF(this.commonStrings!.START, this, "getJarModuleFileBasicArrayList");
    

    var baseJarPath: string = System.getProperty(JAR_DIR_PROP)!;
        
        
;
    

                        if(baseJarPath!.startsWith(FILE))
                        
                                    {
                                    baseJarPath= baseJarPath!.substring(FILE.length);
    

                                    }
                                

    var jarFileFilter: FileFilter = BasicFileFilterUtil.getInstance(".jar")!;
        
        
;
    

    var path: string = baseJarPath +INPUT_AUTMATION_MODULE_BUNDLE_JAR_PATH;
        
        
;
    
this.logUtil!.putF("Path: " +path, this, "getJarModuleFileBasicArrayList");
    

    var file: File = new File(path);
        
        
;
    
this.logUtil!.putF("File: " +file.getAbsolutePath() +" isDirectory: " +file.isDirectory(), this, "getJarModuleFileBasicArrayList");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SubDirectory.getInstance()!.search(jarFileFilter, FileWrapperUtil.wrapFile(file));;
    
}


                //@Throws(Error::class)
            
    getInstalledJarSymbolicNameBasicArrayList(): BasicArrayList{
this.logUtil!.putF(this.commonStrings!.START, this, "getInstalledJarSymbolicNameBasicArrayList");
    

    var vector: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var bundleContext: BundleContext = InputAutomationBundleActivator.getBundleContext()!;
        
        
;
    

    var bundleArray: Bundle[] = bundleContext!.getBundles()!;
        
        
;
    

                        if(bundleArray != 
                                    null
                                )
                        
                                    {
                                    this.logUtil!.putF("bundleArray: " +bundleArray!.length, this, "getInputAutomationModuleServices");
    




                        for (
    var index: number = 0;
        
        
index < bundleArray!.length; index++)
        {

    var bundle: Bundle = bundleArray[index]!;
        
        
;
    
vector.add(bundle.getSymbolicName());
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


                //@Throws(Error::class)
            
    isInstalled(symbolicName: string): boolean{
var symbolicName = symbolicName
this.logUtil!.putF(CommonLabels.getInstance()!.START +symbolicName, this, "isInstalled");
    

    var list: BasicArrayList = this.getInstalledJarSymbolicNameBasicArrayList()!;
        
        
;
    

    var size: number = list.size()!;
        
        
;
    

    var nextSymbolicName: string
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
nextSymbolicName= list.get(index); as String;
    

                        if(nextSymbolicName!.compareTo(symbolicName) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


                //@Throws(Error::class)
            
    findNewModules(): BasicArrayList{
this.logUtil!.putF(this.commonStrings!.START, this, "findNewModules");
    

    var vector: BasicArrayList = new BasicArrayListD();
        
        
;
    

    var hashMap: HashMap<any, any> = this.getAllJarSymbolicNameHashMap()!;
        
        
;
    
this.logUtil!.putF("All: " +hashMap, this, "findNewModules");
    

    var set: Set = hashMap!.keys!;
        
        
;
    

    var symbolicNameArray: any[] = set.toArray()!;
        
        
;
    

    var size: number = symbolicNameArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var symbolicName: string = symbolicNameArray[index]! as String;
        
        
;
    

                        if(!this.isInstalled(symbolicName);)
                        
                                    {
                                    vector.add(hashMap!.get(symbolicName as Object));
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


                //@Throws(Error::class)
            
    install(url: URL): Bundle{
var url = url
this.logUtil!.putF(CommonLabels.getInstance()!.START +url, this, "install");
    

    var bundleContext: BundleContext = InputAutomationBundleActivator.getBundleContext()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return bundleContext!.installBundle(url.toString());;
    
}


    public run(){

        try {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.RUN);
    
this.setRunning(true);
    

    var timeHelper: TimeDelayHelper = new TimeDelayHelper(1000);
        
        
;
    

        while(this.isRunning())
        {
timeHelper!.setStartTime();
    
this.logUtil!.putF(CommonLabels.getInstance()!.ELAPSED +timeHelper!.getElapsed(), this, this.commonStrings!.RUN);
    
this.updateModules();
    
break;

                    
}

this.logUtil!.putF(this.commonStrings!.END, this, this.commonStrings!.RUN);
    

                //: 
} catch(e) 
            {
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e);
    
}

}


}
                
            

