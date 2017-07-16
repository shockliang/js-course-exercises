
var budgetController = (function () {
    
    var Expense = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    };

    var Income = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    function generateNewID(type) {
        return data.allItems[type].length > 0 ? data.allItems[type][data.allItems[type].length -1].id + 1 : 0;
    }

    return {
        addItem: function(type, description, value) {
            var newItem, id;

            id = generateNewID(type);

            switch(type)
            {
                case 'inc':
                    newItem = new Income(id, description, value);
                    break;
                case 'exp':
                    newItem = new Expense(id, description, value);
                    break;
            }
            
            data.allItems[type].push(newItem);

            return newItem;
        },
        
        testing: function() {
            console.log(data);
        }
    };

})();

var UIController = (function() {
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description', 
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },

        addListItem: function(obj, type) {
            // Create HTML string with pleaceholder text
            var html, newHtml, element;
            if(type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMStrings.expenseContainer;
                html = `<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
            }

            // Replace the placeholder with some atual data.
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
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
        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        console.log(newItem);
        // budgetCtrl.testing();

        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);

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