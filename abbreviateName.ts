  // Name Abbreviation Function which shows first and last name with only one letter for the middle name and disregards if Jr. or Sr. is included after the name
function abbreviateName(name: string) {
    let [first, ...rest] = name.split(" ").length > 2 ?  name.split(" ").filter(n => n.toLowerCase() !== "senior" && n.toLowerCase() !== "junior") : name.split(" ")
    let last = rest.pop();
    if(last.length > 10 ) {
      last = last.slice(0,8) + "..."
    } 
    return [first, ...rest.filter((n, i) => i === 0).map(n => n[0] + "."), last].join(" ");
}