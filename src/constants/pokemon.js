
const gradientsByType = {
    grass: 'bg-gradient-to-b from-green-500 to-green-300',
    fire: 'bg-gradient-to-b from-red-500 to-red-300',
    water: 'bg-gradient-to-b from-teal-300 to-blue-300',
    bug: 'bg-gradient-to-b from-green-400 to-green-150',
    normal: 'bg-gradient-to-b from-rose-500 to-rose-800',
    poison: ' bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-200',
    fairy: 'bg-gradient-to-b from-pink-500 via-pink-600',
    rock: 'bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300',
    electric: 'bg-gradient-to-b from-yellow-500 via-yellow-400 to-orange-400',
    ghost: 'bg-gradient-to-b from-purple-600 via-purple-500 to-blue-800',
    dark: ' bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700',
    psychic: 'bg-gradient-to-b from-indigo-700 via-indigo-600 to-blue-500',
    ice: 'bg-gradient-to-b from-blue-400 via-blue-300 to-cyan-200',
    dragon: 'bg-gradient-to-b from-purple-900 via-green-900 to-teal-500',
    steel: 'grid gap-1 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-500',



    fighting: 'bg-gradient-to-b from-brown-700 via-red-500 to-orange-500',
    ground: 'bg-gradient-to-b from-brown-700 via-red-500 to-orange-500',
}

const borderByType = {
    grass: 'border-green-500',
    fire: 'border-red-500',
    water: 'border-blue-300',
    bug: 'border-green-300',
    normal: 'border-rose-500',
    poison: 'border-indigo-500',
    fairy: 'border-pink-400',
    ground: 'border-brown-400',
    rock: 'border-gray-400',
    electric: 'border-yellow-400',
    ghost: 'border-purple-500',
    dark: 'border-gray-800',
    psychic: 'border-indigo-600',
    ice: 'border-blue-300',
    dragon: 'border-purple-800 ',
    steel: ' border-gray-600',
};

export {
    gradientsByType,
    borderByType
};