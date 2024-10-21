export function wait(ms = 0){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

export function makePizza(toppings = []) {
    return new Promise(function(resolve,reject) {
        if (toppings.includes('pineapple')){
            reject('Oh No!!!!! 🍍 Im good on that!')
        }
        const bakeTime = 500 + (toppings.length * 200 )
        setTimeout(function(){
            resolve(`Here is your pizza 🍕 with the toppings ${toppings.join(',')}`)
        }, bakeTime);
    })
}

export function handleError(err){
    console.log('Houston we have a problem')
    console.log(err)
}

export async function done () {
    try {
        const endResult = await makePizza(['spanich','mushroom', 'white onions','olives','feta cheese'])
        console.log(endResult)
    } catch (err){
        handleError(err)
    }
}

export async function run(){
    await done()
}

run()

