function processData(input) {

    // let attibutesArray = input.match(/[a-z]+=/g).map(el => el.slice(0,-1));

    // return input.match(/<[a-z]+.*?[a-z]+=/g).map(el => el.slice(1))
    // return input.match(/<(\w+)(\s?.*?)>/g)
    // return input.match(/\s(\w+)=.*?\s?/g)

    tags = {}
    const rtagfinder = /<(\w+)(\s?.*?)>/g;
    const rattrfinder = /\s(\w+)=.*?\s?/g;
    input.trim().split("\n").slice(1).forEach(str => {
        while (r = rtagfinder.exec(str)) {
            if (!tags.hasOwnProperty(r[1])) { tags[r[1]] = new Set() }
            if (r[2]) {
                while (a = rattrfinder.exec(r[2])) {
                    tags[r[1]].add(a[1]);
                }
            }
        }
    });
    Object.keys(tags).sort().forEach(tag => {
        console.log(`${tag}:${[...tags[tag]].sort().join(",")}`);
    });
}
console.log(
    processData('<a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a>'),
    processData('<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p><div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>')
)