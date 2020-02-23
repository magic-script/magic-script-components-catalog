var initialDeeplink = undefined

export var deeplinkSet = () => undefined

export function registerOnDeeplinkSet(onDeeplinkSet) {
    deeplinkSet = onDeeplinkSet
}

export function setInitialDeeplink(deeplink) {
    initialDeeplink = deeplink
    if (deeplinkSet && deeplink) {
        deeplinkSet(deeplink)
    }
}
