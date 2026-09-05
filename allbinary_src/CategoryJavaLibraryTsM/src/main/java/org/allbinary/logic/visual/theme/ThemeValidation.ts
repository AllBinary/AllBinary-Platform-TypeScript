
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../java/util/HashMap.js';
//not GWT import const HashMap = globalThis.java.util.HashMap;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { CategoryData } from '../../../../../org/allbinary/business/category/CategoryData.js';
//not GWT import const CategoryData = globalThis.org.allbinary.business.category.CategoryData;

      
import { CategoryFactoryInterface } from '../../../../../org/allbinary/business/category/CategoryFactoryInterface.js';
//not GWT import const CategoryFactoryInterface = globalThis.org.allbinary.business.category.CategoryFactoryInterface;

      
import { StoreThemeCategoryFactory } from '../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryFactory.js';
//not GWT import const StoreThemeCategoryFactory = globalThis.org.allbinary.business.category.store.theme.StoreThemeCategoryFactory;

      
import { StoreThemeCategoryInterface } from '../../../../../org/allbinary/business/category/store/theme/StoreThemeCategoryInterface.js';
//not GWT import const StoreThemeCategoryInterface = globalThis.org.allbinary.business.category.store.theme.StoreThemeCategoryInterface;

      
import { CategoryLoaderFactory } from '../../../../../org/allbinary/data/tree/category/CategoryLoaderFactory.js';
//not GWT import const CategoryLoaderFactory = globalThis.org.allbinary.data.tree.category.CategoryLoaderFactory;

      
import { CategoryLoaderInterface } from '../../../../../org/allbinary/data/tree/category/CategoryLoaderInterface.js';
//not GWT import const CategoryLoaderInterface = globalThis.org.allbinary.data.tree.category.CategoryLoaderInterface;

      
import { DomData } from '../../../../../org/allbinary/data/tree/dom/DomData.js';
//not GWT import const DomData = globalThis.org.allbinary.data.tree.dom.DomData;

      
import { DomNodeHelper } from '../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomNodeInterface } from '../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { AbSqlData } from '../../../../../org/allbinary/logic/communication/sql/AbSqlData.js';
//not GWT import const AbSqlData = globalThis.org.allbinary.logic.communication.sql.AbSqlData;

      
import { CryptFileReader } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { ValidationInterface } from '../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
//not GWT import const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
import { PathUtil } from '../../../../../org/allbinary/logic/io/path/PathUtil.js';
//not GWT import const PathUtil = globalThis.org.allbinary.logic.io.path.PathUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil = globalThis.org.allbinary.logic.string.StringValidationUtil;

      
import { CompositeTransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js';
//not GWT import const CompositeTransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.CompositeTransformInfoInterface;

      
import { TransformInfoInterface } from '../../../../../org/allbinary/logic/visual/transform/info/TransformInfoInterface.js';
//not GWT import const TransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.TransformInfoInterface;

      
import { CssStyleValidation } from '../../../../../org/allbinary/logic/visual/transform/template/customizer/includes/style/css/template/retail/CssStyleValidation.js';
//not GWT import const CssStyleValidation = globalThis.org.allbinary.logic.visual.transform.template.customizer.includes.style.css.template.retail.CssStyleValidation;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ThemeInterface } from './ThemeInterface.js';
//not GWT import - same folder const ThemeInterface = globalThis.org.allbinary.logic.visual.theme.ThemeInterface;

                import { ThemeData } from './ThemeData.js';
//not GWT import - same folder const ThemeData = globalThis.org.allbinary.logic.visual.theme.ThemeData;

                
export class ThemeValidation
            extends Object
         implements ThemeInterface, ValidationInterface, DomNodeInterface, CompositeTransformInfoInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private transformInfoInterface: TransformInfoInterface;

    private styleValidationInterface: ValidationInterface;

    private themeName: string;

    private themePreviewImageName: string;

    private webAppAbPath: AbPath;

    private categoryAbPath: AbPath;

    private fileAbPath: AbPath;

public constructor (transformInfoInterface: TransformInfoInterface, cssStyleValidation: CssStyleValidation, categoryThemePath: string){

            super();
        this.transformInfoInterface= transformInfoInterface;
    

    var pathData: AbPathData = AbPathData.getInstance()!;;
    

    var pathUtil: PathUtil = PathUtil.getInstance()!;;
    
this.categoryAbPath= pathUtil!.removeNameFromPath(categoryThemePath);
    
this.themeName= pathData!.getNameFromPath(categoryThemePath);
    
this.styleValidationInterface= cssStyleValidation;
    
this.init();
    
}


public constructor (transformInfoInterface: TransformInfoInterface, hashMap: HashMap<any, any>){

            super();
        this.transformInfoInterface= transformInfoInterface;
    

    var categoryThemeAbPath: AbPath = new AbPath(hashMap!.get(ThemeData.getInstance()!.PATH) as string, StringUtil.getInstance()!.EMPTY_STRING);;
    

    var pathData: AbPathData = AbPathData.getInstance()!;;
    

    var pathUtil: PathUtil = PathUtil.getInstance()!;;
    
this.categoryAbPath= pathUtil!.removeNameFromPath(categoryThemeAbPath!.toString());
    
this.themeName= pathData!.getNameFromPath(categoryThemeAbPath!.toString());
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("CategoryThemePath: ");
    
stringBuffer!.append(categoryThemeAbPath!.toString());
    
stringBuffer!.append(" & CategoryPath: ");
    
stringBuffer!.append(this.categoryAbPath!.toString());
    
stringBuffer!.append(" & ThemeName: ");
    
stringBuffer!.append(this.themeName);
    
this.logUtil!.putF("Http Request Constructor", this, stringBuffer!.toString());
    

                                    }
                                
this.init();
    
}


public constructor (storeThemeCategoryInterface: StoreThemeCategoryInterface, node: Node){

            super();
        this.transformInfoInterface= storeThemeCategoryInterface!.getTransformInfoInterface();
    
this.categoryAbPath= storeThemeCategoryInterface!.getPath();
    

    var themeNameNode: Node = DomSearchHelper.getNode(ThemeData.getInstance()!.NAME, node.getChildNodes())!;;
    

    var valueNode: Node = DomSearchHelper.getNode(DomData.VALUE, themeNameNode!.getChildNodes())!;;
    
this.themeName= DomNodeHelper.getTextNodeValue(valueNode);
    

    var previewImageNameNode: Node = DomSearchHelper.getNode(ThemeData.getInstance()!.PREVIEW_IMAGE_NAME, node.getChildNodes())!;;
    

    var previewImageNameValueNode: Node = DomSearchHelper.getNode(DomData.VALUE, previewImageNameNode!.getChildNodes())!;;
    
this.themePreviewImageName= DomNodeHelper.getTextNodeValue(previewImageNameValueNode);
    
this.webAppAbPath= storeThemeCategoryInterface!.getWebAppPath();
    
this.init(storeThemeCategoryInterface);
    
}


                //@Throws(Exception.constructor)
            
    init(){

    var categoryFactoryInterface: CategoryFactoryInterface = new StoreThemeCategoryFactory(this.getTransformInfoInterface());;
    

    var categoryLoaderInterface: CategoryLoaderInterface = CategoryLoaderFactory.getInstance(categoryFactoryInterface)!;;
    

    var rootStoreThemeCategoryInterface: StoreThemeCategoryInterface = categoryFactoryInterface!.getRootInstance() as StoreThemeCategoryInterface;;
    
this.init(rootStoreThemeCategoryInterface);
    
}


                //@Throws(Exception.constructor)
            
    init(storeThemeCategoryInterface: StoreThemeCategoryInterface){
this.fileAbPath= new AbPath(storeThemeCategoryInterface!.getRootFilePath()!.toString() +this.categoryAbPath!.toString(), StringUtil.getInstance()!.EMPTY_STRING);
    
this.webAppAbPath= storeThemeCategoryInterface!.getWebAppPath();
    
}


                //@Throws(Exception.constructor)
            
    public getTransformInfoInterface(): TransformInfoInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transformInfoInterface;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themeName;
    
}


    public getPreviewImageName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.themePreviewImageName;
    
}


    public getPreviewImagePath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.webAppAbPath!.toString() +this.categoryAbPath!.toString();
    
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.categoryAbPath!.toString();;
    
}


                //@Throws(Exception.constructor)
            
    public getCssStyleValidation(): CssStyleValidation{

                        if(this.styleValidationInterface == 
                                    null
                                )
                        
                                    {
                                    
    var cssStyleFileAbPath: AbPath = new AbPath(this.fileAbPath!.toString(), this.themeName +AbPathData.getInstance()!.EXTENSION_SEP +CategoryData.getInstance()!.UNCRYPTED_EXTENSION);;
    

    var cryptFileReader: CryptFileReader = new CryptFileReader(CategoryData.getInstance()!.UNCRYPTED_EXTENSION, CategoryData.getInstance()!.ENCRYPTED_EXTENSION);;
    

    var document: Document = DomDocumentHelper.create(cryptFileReader!.get(cssStyleFileAbPath))!;;
    
this.styleValidationInterface= new CssStyleValidation(document);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.styleValidationInterface as CssStyleValidation;
    
}


    public isValid(): Boolean{

        try {
            
    var isValid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.categoryAbPath!.toString(), AbSqlData.MINSTRING, AbSqlData.MAXSTRING))
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                        if(!StringValidationUtil.getInstance()!.isValidRequired(this.themeName, AbSqlData.MINSTRING, AbSqlData.MAXSTRING))
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                        if(!this.getCssStyleValidation()!.isValid().valueOf())
                        
                                    {
                                    isValid= Boolean.FALSE;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("End: " +isValid, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return isValid;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    
}

}


    public validationInfo(): string{

        try {
            
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Theme Validation Error");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    
}

}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();
    
}


    public toVector(): BasicArrayList{

    var vector: BasicArrayList = new BasicArrayListD();;
    
vector.add(this.getName());
    
vector.add(this.getPath());
    
vector.add(this.getPreviewImageName());
    
vector.add(this.getPreviewImagePath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vector;
    
}


    public toHashMap(): HashMap<any, any>{

    var themeData: ThemeData = ThemeData.getInstance()!;;
    

    var hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(themeData!.NAME, this.getName());
    
hashMap!.put(themeData!.PATH, this.getPath());
    
hashMap!.put(themeData!.PREVIEW_IMAGE_NAME, this.getPreviewImageName());
    
hashMap!.put(themeData!.PREVIEW_IMAGE_PATH, this.getPreviewImagePath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var node: Node = ModDomHelper.createNameValueNodes(document, ThemeData.getInstance()!.NAME, this.toHashMap())!;;
    

    var domNodeInterface: DomNodeInterface = this.getCssStyleValidation() as DomNodeInterface;;
    
node.appendChild(domNodeInterface!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}



