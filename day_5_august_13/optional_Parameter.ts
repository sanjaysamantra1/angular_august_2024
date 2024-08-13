function add(a: number, b: number, c?: number) {
    c = c || 0;
    console.log(a + b + c);
}
add(2, 3);
add(2, 3, 4);