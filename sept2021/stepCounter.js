function getFixedCounter(k) {


  function stepCounter(k) {
    let value = 0;

    return {
        getValue: function() {
            return value;
          },
          increment: function(k) {
            value += k;
          },
          decrement: function(k) {
              value -= k;
          }
    }
  }



    // const counter = (function counter() {
    //     let value = 0;
    //     return {
    //         getValue: function() {
    //             return value;
    //           },
    //           increment: function(k) {
    //             value += k;
    //           },
    //           decrement: function(k) {
    //               value -= k;
    //           }
    //     }
    //   })()
}

   console.log(
       getFixedCounter([1,4,"+","?","-","?"])
   )