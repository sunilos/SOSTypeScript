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
