function minimumSwaps(arr) {
    // let swaps = 0;

    // while (arr !=== )

    // return arr.sort((a,b) => a - b);
    let swaps = 0;
    let l = arr.length;
    const arr2 = [...arr];

    arr2.sort((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      return 0;
    });


    const map = arr.reduce((acc, cur, i) => {
      acc[cur] = i;
      return acc;
    }, {});

    console.log(map)

    for (let i = 0; i < l; i += 1) {
      const v1 = arr[i];
      const v2 = arr2[i];
      if (v2 != v1) {
        swaps += 1;

        const index = map[v2];

        arr[index] = v1;
        arr[i] = v2;

        map[v1] = index;
      };
    }
    return swaps;
}
console.log(
    minimumSwaps([4,3,1,2])
)