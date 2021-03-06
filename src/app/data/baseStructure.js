(function () {
    angular.module('gridProofs').factory('baseStructure', baseStructure);

    function baseStructure() {
        return {
        "poolDesignation": "Undesignated",
        "loanNumber":[10000000, 0,0],//"708100000",
        "status":'',
        "propertyName": '',
        "propertyCount": [3, 0,1],
        "OriginalLoanAmount": [100000000, 2,0],//"$51,498,000.00",
        "city": '',
        "state": '',
        "county": '',
        "msa": '',
        "region": '',
        "seller": '',
        "loanTerm": [120, 0,24],
        "ioPeriod": [120, 0,24],
        "initialFixedPeriod": "",
        "rateType": "Fixed",
        "noteRate": [6.54, 2,1.50],
        "maturityDate": '',
        "prepayProvision": "YM1%(113)1%(3)",
        "UWLTV": [100.00, 2,50.25],
        "CutoffLTV": "",
        "UWDSCR": "1.300",
        "rateLockDate": '',
        "projectedFundingDate": '',
        "mandatoryFundingDate": '',
        "actualFundingDate": '',
        "leaseUpIndicator": "No",
        "expectedStabilizationDate": "",
        "loanPurpose": "Refinance",
        "currentBalance": [1000000000, 2,0],//"$51,488,000.00",
        "cut-offBalance": "",
        "crossedLoans": "",
        "relatedLoans": "",
        "productType": "Conventional",
        "propertySubType": "Garden",
        "ageRestricted": "",
        "student": "",
        "military": "",
        "independentLiving %": "",
        "assistedLiving %": "",
        "alzheimersMemoryCare": "",
        "skilledNursing": "",
        "commercialIncome": "",
        "MFCMComments": "Removed from 30 due to pref eq.",
        "dateCreated": "04/10/2014"
    };
    }
})();