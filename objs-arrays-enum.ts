const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'yota',
    age: 4,
    hobbies: ['Sports', 'Cooking'],
    role: [1,'author'],
};

person.role.push(1)

let favoriteActivities: any[] = [];
favoriteActivities.push('Sports');

console.log(person.role);