function processData(input) {
    // let result = "";
    console.log(input.match(/(\/\*[^\/]+\*\/|\/\/.+)/g).join("\n").split("\n").map(a=>a.trim()).join("\n"));
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] === "/" && input[i + 1] === "/") {
    //         let temp = input.slice(i + 2);
    //         result += "\n" + temp;
    //     }

    // }

    // return result.split("\r")
}
console.log(
    processData(` // my  program in C++

    #include <iostream>
    /** playing around in
    a new programming language **/
    using namespace std;

    int main ()
    {
      cout << "Hello World";
      cout << "I'm a C++ program"; //use cout
      return 0;
    }`)
)