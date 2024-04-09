// Napraviti niz od 5 objekata koji imaju svojstva fullName i yearOfBirth.
// Proci kroz svaki elemenat niza (u petlji) i dodati mu property "godine" sa vrednoscu jednakoj broju godina datog objekta (trenutna godina minus godiste)
// Izracunati prosecan broj godina (napraviti novu petlju koja to izracunava)
// Nakon svake od prethodnih tacaka ispisati rezultat u konzoli

const group = [
    {
        fullName: "Jasmine Patel",
        yearOfBirth: 1986
    },
    {
        fullName: "Olivia Baker",
        yearOfBirth: 1987
    },
    {
        fullName: "Xavier Thompson",
        yearOfBirth: 1988
    },
    {
        fullName: "Emily Rodriguez",
        yearOfBirth: 1989
    },
    {
        fullName: "Marcus Chen",
        yearOfBirth: 1990
    }
]

const currentYear = new Date().getFullYear();

group.forEach(person => {
    const age = currentYear - person.yearOfBirth;
    person.age = age;
});

console.log(group);

let totalAge = 0;

group.forEach(person => {
    totalAge += person.age;

})

let averageAge = totalAge / group.length;

console.log(totalAge);
console.log(averageAge);