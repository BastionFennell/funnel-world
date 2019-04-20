export const pickRandom = (list: Array<any>) => {
    const randomNumber = Math.floor(Math.random() * list.length);

    return list[randomNumber]
}
