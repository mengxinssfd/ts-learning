function broken(name: string | null): string {
    function postfix(epithet: string) {
        // 然而不加!并不会报错
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }

    name = name || "Bob";
    return postfix("great");
}

broken(null);

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
    }

    name = name || "Bob";
    return postfix("great");
}

fixed(null);