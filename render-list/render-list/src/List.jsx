function List () {
    const fruits = [{id: 1, name: 'apple', calories: 95},
                   {id: 2, name:'banana', calories: 105},
                   {id: 3, name:'cherry' , calories: 120}]

    // Alphabetical Sort
    // fruits.sort((a, b) => a.name.localeCompare(b.name)) 

    // Reverse Sort
    // fruits.sort((a, b) => b.name.localeCompare(a.name))

    // Take the original array and return a new array
    const listItems = fruits.map((fruit) => <li key={fruit.id}>
                                {fruit.name}: &nbsp;
                                <b>{fruit.calories}</b></li>)

    return (<ul>{listItems}</ul>);
}

export default List