import useCounter from "../hooks/useCounter";

// interface Person {
//     name: string;
//     address: Address;
// }

// interface Address {
//     street: string;
//     city?: string;
// }

// const myArray: string[] = ['Kai', 'Mia'];
// const person: Person = {
//     name: 'Ariel',
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//     }
// }
// const addTwoNumbers = (a: number, b: number): number => {
//     return a + b;
// }

const BasicTypes = () => {

    const { count, increaseBy } = useCounter();

    return (
        <>
            <h3 className="text-2xl">Contador: {count}</h3>
            <div>
                <button
                    onClick={() => increaseBy(-1)}
                    className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white">
                    -1
                </button>
                <button
                    onClick={() => increaseBy(1)}
                    className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white">
                    +1
                </button>
            </div>
            {/* <h2>Types</h2>
            <div>{myArray.join(', ')}</div>
            <h2>Objetos</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <h2>Funciones</h2>
            <span>el resultado es: {addTwoNumbers(1, 2)}</span> */}
        </>
    )
}

export default BasicTypes; 