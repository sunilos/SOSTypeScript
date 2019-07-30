//Example of  how to create namespace using namespace keyword
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
var StudentCalc;
(function (StudentCalc) {
    function AnnualFeeCalc(feeamount, term) {
        return feeamount * term;
    }
    StudentCalc.AnnualFeeCalc = AnnualFeeCalc;
})(StudentCalc || (StudentCalc = {}));
//Example of how to access  Student File using namespace Reference Path 
// 
//@author SunilOS  
//@version 1.0
//@Copyright (c) SunilOS  
//@Url www.SunilOs.com
// 
///  <reference path= "./Student.ts" /> 
var totlFees = StudentCalc.AnnualFeeCalc(1000, 4);
console.log(totlFees);
