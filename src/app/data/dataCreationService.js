(function () {
    angular.module('gridProofs').service('dataCreationService', dataCreationService);

    function dataCreationService(baseStructure) {
        this.getData = getData;
        this.initializeData = initializeData;

        var data = [];
        var cityNames = ['Lansdale', 'Santa Rose', 'Richmond', 'Nashville', 'Austin'];
        var stateNames = ['PA','CA','VA','TN','TX'];
        var countyNames =[ 'Montgomery', 'Sonoma County','Richmond City', 'Davidson','Travis County'];
        var msaNames =[ 'Philadelphia', 'Sonoma County','Richmond-Petersburg, VA', 'Nashville-Davidson, TN','Austin-Round Rock, TX'];
        var regionNames = ['Northeast', 'West', 'Southeast', 'Southeast', 'Central'];
        var sellerNames = ['Berkadia Commercial Mortgage LLC', 'CBRE Capital Markets', 'Wells Fargo MultiFamily Capital', 'PNC Real Estate'];
        var propertyNames = ['Station Square', 'Park Lane Villas East', 'Broadstone Great Hills', 'Concord Square', 'Manchester Apartments'];

        var statuses = ['Funded', 'Undesignated', 'Under App', 'Index Lockes', 'Rate Locked'];

        var arraysIndex = Math.round(Math.random() * 1000, 0) % (cityNames.length - 1);
        var initDate = new Date('01/01/2014');
        var date = randomDate(initDate, new Date('01/01/2016')).toLocaleDateString('en-US');

        var futureDate = new Date(date);
        futureDate.setYear(futureDate.getFullYear() + 30);
        futureDate = futureDate.toLocaleDateString('en-US');

        initializeData(10);

        function getData(numberOfRecords) {
            if (numberOfRecords) {
                data = [];
                data = initializeData(numberOfRecords);
                return data;
            }
            return data;
        }

        function initializeData(numberOfRecords) {
            var _data = [];
            for (var index = 0; index < numberOfRecords; index++){
                _data.push(angular.copy(baseStructure));
            }
            _data.forEach(function (element, index) {
                element.poolDesignation = "Undesignated";
                element.loanNumber = generateNumber(10000000, 0,0);
                element.status = generateRandomStatus();
                element.propertyName = generatePropertyName();
                element.propertyCount = generateNumber(3, 0,1);
                element.OriginalLoanAmount = generateCurrNumber(100000000, 2,0);
                element.city = generateCityName(arraysIndex);
                element.state = generateStateName(arraysIndex);
                element.county = generateCountyName(arraysIndex);
                element.msa = generateMSAName(arraysIndex);
                element.region = generateRegionName(arraysIndex);
                element.seller = generateSellerName();
                element.loanTerm = generateNumber(120, 0,24);
                element.ioPeriod = generateNumber(120, 0,24);
                element.initialFixedPeriod = '';
                element.rateType = "Fixed";
                element.noteRate = generateNumber(6.54, 2, 1.50);
                element.maturityDate = futureDate;
                element.prepayProvision = "YM1%(113)1%(3)";
                element.UWLTV = generateNumber(100.00, 2, 50.25);
                element.CutoffLTV = "";
                element.UWDSCR = "1.300";
                element.rateLockDate = '';
                element.projectedFundingDate = '';
                element.mandatoryFundingDate = '';
                element.actualFundingDate = '';
                element.leaseUpIndicator = "No";
                element.expectedStabilizationDate = "",
                element.loanPurpose = "Refinance",
                element.currentBalance = generateCurrNumber(1000000000, 2,0),
                element.cutoffBalance = "";
                element.crossedLoans = "";
                element.relatedLoans = "";
                element.productType = "Conventional";
                element.propertySubType = "Garden";
                element.ageRestricted = "";
                element.student = "";
                element.military = "";
                element.independentLiving = "";
                element.assistedLiving = "";
                element.alzheimersMemoryCare = "";
                element.skilledNursing = "";
                element.commercialIncome = "";
                element.MFCMComments = "Removed from 30 due to pref eq.";
                element.dateCreated = "04/10/2014"
            });
            return _data;
        }

        //---- Helper Methods

        function generateNumber(multiplier, precision, min){
            var num = Math.round(multiplier * Math.random()).toFixed(precision);
            if (num < min)
            return min;
            else
            return num;
        }

        function formatCurr(n, currency) {
            return currency + " " + n.replace(/./g, function(c, i, a) {
                    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                });
        }

        function generateCurrNumber(multiplier, precision, min){
            var num = Math.round(multiplier * Math.random()).toFixed(precision);
            if (num < min)
                return formatCurr(min,"$");
            else
                return formatCurr(num,"$");
        }

        function generateRandomStatus(){
            return statuses[Math.round(Math.random() * 1000, 0) % (statuses.length - 1)];
        }

        function generatePropertyName(){
            return propertyNames[Math.round(Math.random() * 1000, 0) % (propertyNames.length - 1)];
        }

        function generateCityName(index){
            return cityNames[index];
        }

        function generateStateName(index){
            return stateNames[index];
        }

        function generateCountyName(index){
            return countyNames[index];
        }

        function generateMSAName(index){
            return msaNames[index];
        }

        function generateRegionName(index){
            return regionNames[index];
        }

        function generateSellerName(){
            return sellerNames[Math.round(Math.random() * 1000, 0) % (sellerNames.length - 1)];
        }

        function randomDate(start, end) {
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        }


        //...
    }
})();