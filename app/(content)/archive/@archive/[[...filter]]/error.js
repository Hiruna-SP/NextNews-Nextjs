'use client';

export default function FilterError({error}) {   
    return (
        <div id="error">
            <h1>Something went wrong!</h1>
            <p>Error:  {error.message}</p>
        </div>
    );
}