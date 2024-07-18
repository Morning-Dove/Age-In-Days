import React, { useState } from "react";


const Calculator: React.FunctionComponent = () => {
    // State variables for input values
    let [name, setName] = useState("");
    let [age, setAge] = useState("");

    // State variables for submitted values (after pressing enter)
    const [submittedName, setSubmittedName] = useState("");
    const [submittedAge, setSubmittedAge] = useState<number>();

    // Function to handle form submission
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Set submitted values
        setSubmittedName(name);
        setSubmittedAge(age ? parseInt(age) : undefined);

        // Clears the input fields
        setName("");
        setAge("");
    };

    // Calcuate the age in days
    const ageInDays = submittedAge ? submittedAge * 365 : undefined;
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
                        placeholder="Enter Name...">
                    </input>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="number" 
                        id="age" 
                        value={age} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setAge(event.target.value)}
                        placeholder="Enter Age In Years...">
                    </input>
                </div>
                <button type="submit">Submit</button>
            </form>

            {/* If name and age are not undefined display results */}
            {submittedName && submittedAge !== undefined && (
                <div>
                    <p id="displayResults">{submittedName} is {ageInDays} days old!</p>
                </div>
            )}
        </>
    );
}

export default Calculator;