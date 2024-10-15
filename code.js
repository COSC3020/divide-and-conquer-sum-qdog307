function divideAndConquerSum(a) {
    
    if (a.length === 1) {
        return a[0];
    }

    
    if (a.length === 0) {
        return 0;
    }

    
    const third = Math.floor(a.length / 3);
    const firstPart = a.slice(0, third);
    const secondPart = a.slice(third, 2 * third);
    const thirdPart = a.slice(2 * third);

    
    const sumFirst = divideAndConquerSum(firstPart);
    const sumSecond = divideAndConquerSum(secondPart);
    const sumThird = divideAndConquerSum(thirdPart);

    
    return sumFirst + sumSecond + sumThird;
}
