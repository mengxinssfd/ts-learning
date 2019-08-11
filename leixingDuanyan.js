function broken(name) {
    function postfix(epithet) {
        // 然而不加!并不会报错
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}
broken(null);
function fixed(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}
fixed(null);
