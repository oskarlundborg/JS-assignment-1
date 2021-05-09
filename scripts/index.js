//Triangles
    let triangleOne = 10 * 13 / 2
    let triangleTwo = 16.5 * 20.3 / 2

    let triangleThree = 16.5 * 20.3 / 2
    let triangleFour = 20.3 * 16.5 / 2

    let triangleFive = 7.8 * 5.6 / 2
    let triangleSix = 9.3 * 12.4 / 2

    console.log(`Triangle one is ${triangleOne} cm2`)
    console.log (`Triangle two is ${triangleTwo} cm2`)
    console.log (`Triangle three is ${triangleThree} cm2`)
    console.log (`Triangle four is ${triangleFour} cm2`)
    console.log (`Triangle five is ${triangleFive} cm2`) 
    console.log (`Triangle six is ${triangleSix} cm2`)

// Case one
    console.log(`
    Case One
    `)
 
    if (triangleOne > triangleTwo) {
        console.log(`Triangle one is larger than triangle two`)
    } else if (triangleTwo > triangleOne) {
        console.log(`Triangle two is larger than triangle one`)
    } else {
        console.log(`Both triangles are the same size`)
    }

// Case two
    console.log(`
    Case Two
    `)

    function triangleArea(base, height) {
        return base * height / 2;
    }
    

    triangleOne = triangleArea(10, 13)
    triangleTwo = triangleArea(16.5, 20.3)
    triangleThree = triangleArea(16.5, 20.3)
    triangleFour = triangleArea(20.3, 16)
    triangleFive = triangleArea(7.8, 5.6)
    triangleSix = triangleArea(9.3, 12.4)

    //Test logging for consistency
    console.log
    (  `Triangle one is ${triangleOne}cm2, triangle two is ${triangleTwo}cm2, triangle three is ${triangleThree}cm2 triangle four is ${triangleFour}cm2, triangle five is ${triangleFive}cm2 and triangle six is ${triangleSix}cm2`  )
    console.log (`
    `)

    function triangleComparison(areaOne, areaTwo) {
        if (areaOne == areaTwo) {
                return `Both triangles are the same size`
        }   else if (areaOne > areaTwo) {
                return `Triangle one is larger than triangle two`
        }   else {
                return `Triangle two is larger than triangle one`
        }
    }

    console.log(triangleComparison(triangleOne, triangleTwo))

    console.log(triangleComparison(triangleThree, triangleFour))

    console.log(triangleComparison(triangleFive, triangleSix))