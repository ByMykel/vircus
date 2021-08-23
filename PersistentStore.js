export default function createLocalStoragePlugin({
    moduleName,
    localStorageName,
}) {
    return (store) => {
        const loader = localStorage.getItem(localStorageName);

        if (loader !== null) {
            const parsed = JSON.parse(loader);
            store.dispatch("favorites/setFavorites", parsed.favorites);
        }

        store.subscribe((mutation) => {
            if (!mutation.type.startsWith(moduleName)) return;

            localStorage.setItem(
                localStorageName,
                JSON.stringify(store.state[moduleName])
            );
        });
    };
}
