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
            debugger;
            var _data = [];
            for (var index = 0; index < numberOfRecords; index++){
                _data.push(angular.copy(baseStructure));
            }
            _data.forEach(function(element, index) {
                element.loanNumber = generateNumber();
                element.status = generateRandomStatus();
                element.propertyName = generatePropertyName();
                element.propertyCount = generateNumber();
                element.OriginalLoanAmount = generateCurrNumber();
                element.city = generateCityName();
                element.state = generateStateName();
                element.county = generateCountyName();
                element.msa = generateMSAName();
                element.region = generateRegionName();
                element.seller = generateSellerName();
                element.loanTerm = generateNumber();
                element.ioPeriod = generateNumber();
                element.initialFixedPeriod = '';
                element.rateType = "Fixed";
                element.noteRate = generateNumber(6.54, 2, 1.50);
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