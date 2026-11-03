
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

        


            import { Long } from '../../../../java/lang/Long.js';
        
            import { Float } from '../../../../java/lang/Float.js';
        
            const Short = (globalThis.java?.lang?.Short ?? class {}) as typeof globalThis.java.lang.Short;
        
import { ImageAnalysisResults } from '../../../../org/allbinary/media/image/analysis/ImageAnalysisResults.js';
//not GWT import const ImageAnalysisResults

import { ImageColorRangeResults } from '../../../../org/allbinary/media/image/analysis/ImageColorRangeResults.js';
//not GWT import const ImageColorRangeResults

import { ImageColorResults } from '../../../../org/allbinary/media/image/analysis/ImageColorResults.js';
//not GWT import const ImageColorResults

//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
type CommonPhoneStrings<T = any, U = any> = typeof CommonPhoneStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonPhoneStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { JPanel } from './JPanel.js';
//sameFolderImports - not GWT import - same folder const JPanel
import { JLabel } from './JLabel.js';
//sameFolderImports - not GWT import - same folder const JLabel
import { JTextField } from './JTextField.js';
//sameFolderImports - not GWT import - same folder const JTextField
import { JComboBox } from './JComboBox.js';
//sameFolderImports - not GWT import - same folder const JComboBox
import { DefaultComboBoxModel } from './DefaultComboBoxModel.js';
//sameFolderImports - not GWT import - same folder const DefaultComboBoxModel
import { GroupLayout } from './GroupLayout.js';
//sameFolderImports - not GWT import - same folder const GroupLayout

export class ImageAnalysisResultsJPanel extends javax.swing.JPanel {
        

public constructor (imageAnalysisResultsArray: ImageAnalysisResults[]){

            super();
        this.initComponents();
    

    let imageAnalysisResults: ImageAnalysisResults = imageAnalysisResultsArray[0]!;;
    
this.updateImageColorRangeResults(imageAnalysisResults);
    
}


    initComponents(){
this.jLabel1= new javax.swing.JLabel();
    
this.jLabel2= new javax.swing.JLabel();
    
this.jLabel3= new javax.swing.JLabel();
    
this.percentMatchingJTextField= new javax.swing.JTextField();
    
this.totalPixelsJTextField= new javax.swing.JTextField();
    
this.matchingPixelsJTextField= new javax.swing.JTextField();
    
this.jComboBox1= new javax.swing.JComboBox();
    
this.jLabel4= new javax.swing.JLabel();
    
this.jLabel5= new javax.swing.JLabel();
    
this.jLabel6= new javax.swing.JLabel();
    
this.jLabel7= new javax.swing.JLabel();
    
this.avgRedJTextField= new javax.swing.JTextField();
    
this.avgGreenJTextField= new javax.swing.JTextField();
    
this.avgBlueJTextField= new javax.swing.JTextField();
    
this.minGreenJTextField= new javax.swing.JTextField();
    
this.jLabel8= new javax.swing.JLabel();
    
this.jLabel9= new javax.swing.JLabel();
    
this.jLabel10= new javax.swing.JLabel();
    
this.minRedJTextField= new javax.swing.JTextField();
    
this.minBlueJTextField= new javax.swing.JTextField();
    
this.jLabel11= new javax.swing.JLabel();
    
this.jLabel12= new javax.swing.JLabel();
    
this.jLabel13= new javax.swing.JLabel();
    
this.maxRedJTextField= new javax.swing.JTextField();
    
this.maxGreenJTextField= new javax.swing.JTextField();
    
this.maxBlueJTextField= new javax.swing.JTextField();
    
this.jLabel1!.setText("Matching Pixels:");
    
this.jLabel2!.setText("Total Pixels:");
    
this.jLabel3!.setText("Percent Matching:");
    
this.percentMatchingJTextField!.setEditable(false);
    
this.totalPixelsJTextField!.setEditable(false);
    
this.matchingPixelsJTextField!.setEditable(false);
    
this.jComboBox1!.setModel(new javax.swing.DefaultComboBoxModel([
CommonPhoneStrings.getInstance()!.ONE
                                                ]));
    
this.jComboBox1!.setEnabled(false);
    
this.jLabel4!.setText("Image:");
    
this.jLabel5!.setText("Average Red:");
    
this.jLabel6!.setText("Average Green:");
    
this.jLabel7!.setText("Average Blue:");
    
this.avgRedJTextField!.setEditable(false);
    
this.avgGreenJTextField!.setEditable(false);
    
this.avgBlueJTextField!.setEditable(false);
    
this.minGreenJTextField!.setEditable(false);
    
this.jLabel8!.setText("Min Red:");
    
this.jLabel9!.setText("Min Green:");
    
this.jLabel10!.setText("Min Blue:");
    
this.minRedJTextField!.setEditable(false);
    
this.minBlueJTextField!.setEditable(false);
    
this.jLabel11!.setText("Max Red:");
    
this.jLabel12!.setText("Max Green:");
    
this.jLabel13!.setText("Max Blue:");
    
this.maxRedJTextField!.setEditable(false);
    
this.maxGreenJTextField!.setEditable(false);
    
this.maxBlueJTextField!.setEditable(false);
    

    let layout: javax.swing.GroupLayout = new javax.swing.GroupLayout(this);;
    
this.setLayout(layout);
    
layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addContainerGap()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(this.jLabel3)!.addComponent(this.jLabel2)!.addComponent(this.jLabel1)!.addComponent(this.jLabel5)!.addComponent(this.jLabel6)!.addComponent(this.jLabel7)!.addComponent(this.jLabel4))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(this.jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, 81, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.avgBlueJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(this.avgGreenJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(this.avgRedJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(this.totalPixelsJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(this.percentMatchingJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE)!.addComponent(this.matchingPixelsJTextField, javax.swing.GroupLayout.DEFAULT_SIZE, 81, Short.MAX_VALUE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(this.jLabel12)!.addComponent(this.jLabel13)!.addComponent(this.jLabel8)!.addComponent(this.jLabel9)!.addComponent(this.jLabel10)!.addComponent(this.jLabel11))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addComponent(this.minRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.maxGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.minGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.minBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.maxRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.maxBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, 82, javax.swing.GroupLayout.PREFERRED_SIZE))!.addContainerGap(18, Short.MAX_VALUE)));
    
layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)!.addGroup(layout.createSequentialGroup()!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel4)!.addComponent(this.jComboBox1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel1)!.addComponent(this.matchingPixelsJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel8)!.addComponent(this.minRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel2)!.addComponent(this.totalPixelsJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel9)!.addComponent(this.minGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel3)!.addComponent(this.percentMatchingJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel10)!.addComponent(this.minBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel5)!.addComponent(this.avgRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel11)!.addComponent(this.maxRedJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel6)!.addComponent(this.avgGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.maxGreenJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel12))!.addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)!.addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)!.addComponent(this.jLabel7)!.addComponent(this.avgBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)!.addComponent(this.jLabel13)!.addComponent(this.maxBlueJTextField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))));
    
}


    updateImageColorRangeResults(imageAnalysisResults: ImageAnalysisResults){

    let imageColorRangeResults: ImageColorRangeResults = imageAnalysisResults!.getImageColorRangeResults()!;;
    
this.matchingPixelsJTextField!.setText(new Long(imageColorRangeResults!.getMatchingPixelsChecked()).toString());
    
this.totalPixelsJTextField!.setText(new Long(imageColorRangeResults!.getTotalPixelsChecked()).toString());
    
this.percentMatchingJTextField!.setText(new number(imageColorRangeResults!.getPercent()).toString());
    

    let imageColorResults: ImageColorResults = imageAnalysisResults!.getImageColorResults()!;;
    
this.avgRedJTextField!.setText(new number(imageColorResults!.getColorAverage()!.getAvgRed()).toString());
    
this.avgGreenJTextField!.setText(new number(imageColorResults!.getColorAverage()!.getAvgGreen()).toString());
    
this.avgBlueJTextField!.setText(new number(imageColorResults!.getColorAverage()!.getAvgBlue()).toString());
    
this.minRedJTextField!.setText(new Long(imageColorResults!.getColorRange()!.getMinRed()).toString());
    
this.minGreenJTextField!.setText(new Long(imageColorResults!.getColorRange()!.getMinGreen()).toString());
    
this.minBlueJTextField!.setText(new Long(imageColorResults!.getColorRange()!.getMinBlue()).toString());
    
this.maxRedJTextField!.setText(new Long(imageColorResults!.getColorRange()!.getMaxRed()).toString());
    
this.maxGreenJTextField!.setText(new Long(imageColorResults!.getColorRange()!.getMaxGreen()).toString());
    
this.maxBlueJTextField!.setText(new Long(imageColorResults!.getColorRange()!.getMaxBlue()).toString());
    
}


    private avgBlueJTextField: javax.swing.JTextField;

    private avgGreenJTextField: javax.swing.JTextField;

    private avgRedJTextField: javax.swing.JTextField;

    private jComboBox1: javax.swing.JComboBox;

    private jLabel1: javax.swing.JLabel;

    private jLabel10: javax.swing.JLabel;

    private jLabel11: javax.swing.JLabel;

    private jLabel12: javax.swing.JLabel;

    private jLabel13: javax.swing.JLabel;

    private jLabel2: javax.swing.JLabel;

    private jLabel3: javax.swing.JLabel;

    private jLabel4: javax.swing.JLabel;

    private jLabel5: javax.swing.JLabel;

    private jLabel6: javax.swing.JLabel;

    private jLabel7: javax.swing.JLabel;

    private jLabel8: javax.swing.JLabel;

    private jLabel9: javax.swing.JLabel;

    private matchingPixelsJTextField: javax.swing.JTextField;

    private maxBlueJTextField: javax.swing.JTextField;

    private maxGreenJTextField: javax.swing.JTextField;

    private maxRedJTextField: javax.swing.JTextField;

    private minBlueJTextField: javax.swing.JTextField;

    private minGreenJTextField: javax.swing.JTextField;

    private minRedJTextField: javax.swing.JTextField;

    private percentMatchingJTextField: javax.swing.JTextField;

    private totalPixelsJTextField: javax.swing.JTextField;

}

