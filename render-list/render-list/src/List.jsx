function List () {
    const fruits = [{id: 1, name: 'apple', calories: 95},
                   {id: 2, name:'banana', calories: 105},
                   {id: 3, name:'cherry' , calories: 120}]

    // Take the original array and return a new array
    const listItems = fruits.map((fruit) => <li key={fruit.name}>{fruit.name}</li>)

    return (<ul>{listItems}</ul>);
}

export default List