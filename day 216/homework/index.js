function whoEatsWho(zoo) {
    const eats = {
        antelope: ["grass"],
        "big-fish": ["little-fish"],
        bug: ["leaves"],
        bear: ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
        chicken: ["bug"],
        cow: ["grass"],
        fox: ["chicken", "sheep"],
        giraffe: ["leaves"],
        lion: ["antelope", "cow"],
        panda: ["leaves"],
        sheep: ["grass"]
    };

    const animals = zoo.split(",");
    const result = [zoo];

    let i = 0;

    while (i < animals.length) {
        const animal = animals[i];

        if ( i > 0 && eats[animal] && eats[animal].includes(animals[i - 1])
        ) {
            result.push(`${ animal } eats ${ animals[i - 1]}`);
            animals.splice(i - 1, 1);
            i = Math.max(0, i - 1);
        }

        else if ( i < animals.length - 1 && eats[animal] && eats[animal].includes(animals[i + 1])
        ) {
            result.push(`${ animal } eats ${ animals[i + 1]}`);
            animals.splice(i + 1, 1);
        }

        else {
            i++;
        }
    }

    result.push(animals.join(","));

    return result;
}