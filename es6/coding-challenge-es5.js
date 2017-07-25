'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function Element(name, buildYear) {
    _classCallCheck(this, Element);

    this.name = name;
    this.buildYear = buildYear;
};

var Park = function (_Element) {
    _inherits(Park, _Element);

    function Park(name, buildYear, area, numberOfTrees) {
        _classCallCheck(this, Park);

        var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

        _this.area = area; // km2
        _this.numberOfTrees = numberOfTrees;
        return _this;
    }

    _createClass(Park, [{
        key: 'treeDensity',
        value: function treeDensity() {
            var density = this.numberOfTrees / this.area;
            console.log(this.name + ' has tree desity of ' + density + ' trees per square km.');
        }
    }]);

    return Park;
}(Element);

var Street = function (_Element2) {
    _inherits(Street, _Element2);

    function Street(name, buildYear, length) {
        var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

        _classCallCheck(this, Street);

        var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

        _this2.length = length;
        _this2.size = size;
        return _this2;
    }

    _createClass(Street, [{
        key: 'classifyStreet',
        value: function classifyStreet() {
            var classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');

            console.log(this.name + ', build in ' + this.buildYear + ', is a ' + classification.get(this.size) + ' street.');
        }
    }]);

    return Street;
}(Element);

function calculate(ary) {
    var sum = ary.reduce(function (prev, cur, idx) {
        return prev + cur;
    }, 0);

    return [sum, sum / ary.length];
}

var allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('Nation Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

var allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function reportParks(parks) {
    console.log('--------- Parks Report ---------');
    // Density 
    parks.forEach(function (element) {
        return element.treeDensity();
    });

    // Average age
    var ages = parks.map(function (element) {
        return new Date().getFullYear() - element.buildYear;
    });

    var _calculate = calculate(ages);

    var _calculate2 = _slicedToArray(_calculate, 2);

    totalAge = _calculate2[0];
    avgAge = _calculate2[1];

    console.log('Our ' + parks.length + ' parks have an average of ' + avgAge + ' years');

    // Which park has more than 1000 trees.
    var idx = parks.map(function (element) {
        return element.numberOfTrees;
    }).findIndex(function (el) {
        return el >= 1000;
    });
    console.log(parks[idx].name + ' has more than 1000 trees.');
}

function reportStreets(streets) {
    console.log('--------- Streets Report ---------');
    // Total and average length of the town's streets

    var _calculate3 = calculate(streets.map(function (el) {
        return el.length;
    })),
        _calculate4 = _slicedToArray(_calculate3, 2),
        totalLength = _calculate4[0],
        avgLength = _calculate4[1];

    console.log('Our ' + streets.length + ' streets have a total length of ' + totalLength + ' km, with an average of ' + avgLength + ' km.');

    // Classify sizes
    streets.forEach(function (el) {
        return el.classifyStreet();
    });
}

reportParks(allParks);
reportStreets(allStreets);
