
var budgetController = (function () {

})();

var UIController = (function() {
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description', 
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    }
})();

var controller = (function (budgetCtrl, UICtrl) {

    var setupEnventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        // 1. Get the filed input data
        var input = UICtrl.getInput();
        
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget.
        // 5. Display the budget on the UI.

        console.log('ctrlAddItem');
    };

    return {
        init: function() {
            console.log('Application has started');
            setupEnventListeners();
        }
    }

})(budgetController, UIController);

controller.init();