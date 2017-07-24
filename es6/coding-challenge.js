class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numberOfTrees) {
        super(name, buildYear);
        this.area = area;   // km2
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has tree desity of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

function calculate(ary) {
    const sum = ary.reduce((prev, cur, idx) => prev + cur, 0);

    return [sum, sum / ary.length];
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('Nation Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5)
];

function reportParks(parks) {
    console.log('--------- Parks Report ---------');
    // Density 
    parks.forEach(element => element.treeDensity());

    // Average age
    const ages = parks.map(element => new Date().getFullYear() - element.buildYear);
    [totalAge, avgAge] = calculate(ages);
    console.log(`Our ${parks.length} parks have an average of ${avgAge} years`);

    // Which park has more than 1000 trees.
    const idx = parks.map(element => element.numberOfTrees).findIndex(el => el >= 1000);
    console.log(`${parks[idx].name} has more than 1000 trees.`);
}

function reportStreets(streets) {
    console.log('--------- Streets Report ---------');
    // Total and average length of the town's streets
    const [totalLength, avgLength] = calculate(streets.map(el => el.length));
    console.log(`Our ${streets.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // Classify sizes
    streets.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);