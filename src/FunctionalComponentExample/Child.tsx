import React from 'react';

const childInfoProps = {
    name: 'sam lee',
    age: 26,
};

const childDefaultColorProps = {
    color: 'red',
};

const childDefaultSizeProps = {
    fontSize: '16px',
};

const childDefaultProps = {
    ...childInfoProps,
    ...childDefaultColorProps,
    ...childDefaultSizeProps,
};

const Child = ({ name, age, fontSize, color }: typeof childDefaultProps) => {
    return (
        <div>
            <div>{`${name} is ${age} years old fontSize is ${fontSize} color is ${color}`}</div>
        </div>
    );
};

export default Child;
// export default function Child({ name, age, fontSize, color }: typeof childDefaultProps) {
//     return (
//         <div>
//             <div>{`${name} is ${age} years old fontSize is ${fontSize} color is ${color}`}</div>
//         </div>
//     );
// }

Child.defaultProps = childDefaultProps;
