function List () {
    const fruits = ['apple', 'banana', 'cherry']

    // Take the original array and return a new array
    const listItems = fruits.map((fruit) => <li>{fruit}</li>)

    return (fruits);
}

export default List