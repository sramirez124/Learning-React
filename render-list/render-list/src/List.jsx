function List () {
    const fruits = [{name: 'apple', calories: 95},
                   {name:'banana', calories: 105},
                   {name:'cherry' , calories: 120}]

    // Take the original array and return a new array
    const listItems = fruits.map((fruit) => <li key={fruit.name}>{fruit.name}</li>)

    return (<ul>{listItems}</ul>);
}

export default List