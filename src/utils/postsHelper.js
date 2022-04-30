export const addDomainToImg = (srcString) => {
    let domainStr = "https://ddaprax.com";
    return srcString.indexOf(domainStr) > -1 ?
        srcString :
        domainStr + srcString;
}

export const displayFormatedTimestamp = (timestamp) => {
    let date = new Date(timestamp * 1000);

    return [
        date.getDate().toString().padStart(2, 0),
        (date.getMonth() + 1).toString().padStart(2, 0),
        date.getFullYear()
    ].join('.')
}