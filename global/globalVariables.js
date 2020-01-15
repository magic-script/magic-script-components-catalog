export var initialDeeplink = undefined

deeplinkSet = () => undefined

export function registerOnDeeplinkSet(onDeeplinkSet) {
    deeplinkSet = onDeeplinkSet
}

export function setInitialDeeplink(deeplink) {
    initialDeeplink = deeplink
    if (deeplinkSet != undefined) {
        deeplinkSet(deeplink)
    }
}
