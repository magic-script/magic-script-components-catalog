// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import { Image, NativeEventEmitter, NativeModules, processColor } from 'react-native';
import { NativeFactory } from '../core/native-factory';
import generateId from '../lib/generateId';
import omit from 'lodash/omit';
import isEqual from 'lodash/isEqual';

export class PlatformFactory extends NativeFactory {
    constructor(componentMapping) {
        super(componentMapping);

        console.log('[FACTORY] ctor');
        // { type, builder }
        this.elementBuilders = {};
        this.controllerBuilders = {};
        this.controllers = new WeakMap();
        this.componentManager = NativeModules.ARComponentManager;
        this.componentManager.clearScene();
        this.setupEventsManager();
    }

    setupEventsManager() {
        this.eventsByElementId = {};

        this.eventsManager = new NativeEventEmitter(NativeModules.AREventsManager);
        const subscription = this.eventsManager.addListener('onPress', (sender) => {
            const elementId = sender.nodeId;
            console.log('[EVENTS] onPress received: ', elementId);
            const events = this.eventsByElementId[elementId];
            if (events !== undefined) {
                const onPressEvents = events.filter(item => item.name === 'onPress');
                onPressEvents.forEach(item => {
                    console.log('[EVENTS] item: ', item);
                    item.handler();
                });
            }
        });
        // Don't forget to unsubscribe, typically in componentWillUnmount
        // subscription.remove();
    }

    registerEvent(elementId, name, handler) {
        if (elementId === undefined) { return; }

        this.componentManager.addOnPressEventHandler(elementId);

        const pair = { name, handler };
        var events = this.eventsByElementId[elementId];
        if (events === undefined) {
            events = [pair];
            this.eventsByElementId[elementId] = events;
            console.log(`[EVENTS] "${elementId}" register first ${name} event (${this.eventsByElementId[elementId].length}).`);
        } else {
            events.push(pair);
            console.log(`[EVENTS] "${elementId}" register another ${name} event (${this.eventsByElementId[elementId].length}).`);
        }
    }

    isController(element) {
        return this.controllers[element] !== undefined;
    }

    setComponentEvents(elementId, properties) {
        const eventHandlers = Object.keys(properties)
            .filter(key => key.length > 2 && key.startsWith('on'))
            .map(key => ({ name: key, handler: properties[key] }));

        for (const pair of eventHandlers) {
            const eventName = pair.name;//UiNodeEvents[pair.name];

            if (eventName !== undefined) {
                if (typeof pair.handler === 'function') {
                    this.registerEvent(elementId, pair.name, pair.handler);
                    // element[eventName](pair.handler);
                } else {
                    throw new TypeError(`The event handler for ${pair.name} is not a function`);
                }
            } else {
                throw new TypeError(`Event ${pair.name} is not recognized event`);
            }
        }
    }

    createElement(name, container, ...args) {
        console.log(`[FACTORY] createElement <${name}>`, args[0]);
        console.log('[FACTORY] createElement.container', container);
        if (args.length > 1) { console.log('[FACTORY] createElement.args', args); }
        if (typeof name !== 'string') {
            throw new Error('PlatformFactory.createElement expects "name" to be string');
        }

        return this._createElement(name, container, ...args);
        // if (this._mapping.elements[name] !== undefined) {
        //     return this._createElement(name, container, ...args)
        // } else if (this._mapping.controllers[name] !== undefined) {
        //     return this._createController(name, container, ...args);
        // } else {
        //     throw new Error(`Unknown tag: ${name}`);
        // }
    }

    _parseCustomProps = (props) => ({
        ...props,
        ...(props.shadowColor ? { shadowColor: processColor(props.shadowColor) } : {}),
        ...(props.color ? { color: processColor(props.color) } : {}),
        // ...(props.material ? { material: processMaterial(props.material) } : {}),
        ...(props.source ? { source: Image.resolveAssetSource(props.source) } : {}),
      });

    _createElement(name, container, ...args) {
        const props = this._parseCustomProps(omit(args[0], 'children'));
        const id = props.id || generateId();
        const type = name;
        
        if (name === 'text') {
            this.componentManager.createTextNode(props, id);
        } else if (name === 'button') {
            this.componentManager.createButtonNode(props, id);
            this.setComponentEvents(id, props);
        } else if (name === 'view') {
            this.componentManager.createViewNode(props, id);
        } else if (name === 'image') {
            this.componentManager.createImageNode(props, id);
        }

        return { type, id, props };

        // var component = undefined;
        // if (name === 'text') {
        //     component = createArComponent(
        //         { mount: NativeModules.ARComponentManager.addText, pick: ['id', 'text', 'size', 'color'] },
        //         {
        //             text: PropTypes.string,
        //             size: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
        //             color: PropTypes.string,
        //             material
        //         }, []);
        // } else if (name === 'button') {
        //     component = createArComponent(
        //         { mount: NativeModules.ARComponentManager.addButton, pick: ['id', 'title', 'size', 'color'] },
        //         {
        //             title: PropTypes.string,
        //             size: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
        //             color: PropTypes.string,
        //             material
        //         }, []);
        // } else if (name === 'view') {
        //     component = createArComponent(
        //         { mount: NativeModules.ARComponentManager.addView, pick: ['id'] },
        //         {
        //         }, []);
        // }
        // // component.mount(identifier, props, null);
        // return component.ARComponent;

        // if (this.elementBuilders[name] === undefined) {
        //     const createBuilder = this._mapping.elements[name];
        //     this.elementBuilders[name] = createBuilder();
        // }

        // const prism = container.controller.getPrism();
        // const element = this.elementBuilders[name].create(prism, ...args);

        // // TODO: Move setComponentEvents to the builders !!!
        // this.setComponentEvents(element, args[0]); // args = [props]

        // return element;
    }

    _createController(name, container, ...args) {
        // if (this.controllerBuilders[name] === undefined) {
        //     const createBuilder = this._mapping.controllers[name];
        //     this.controllerBuilders[name] = createBuilder();
        // }

        // const controller = this.controllerBuilders[name].create(...args)

        // // Map the controller object with to the tag
        // this.controllers[controller] = name;

        // return controller;
    }

    updateElement(name, ...args) {
        console.log('[FACTORY] updateElement.name', name);
        console.log('[FACTORY] updateElement.args', args);
        const oldProps = this._parseCustomProps(omit(args[1], 'children'));
        const newProps = this._parseCustomProps(omit(args[2], 'children'));
        if (!isEqual(oldProps, newProps)) {
            console.log('[FACTORY] updateElement.newProps: ', newProps);
            const element = args[0];
            this.componentManager.updateNode(element.id, newProps);
        }
        
        // if (typeof name !== 'string')
        // {
        //     throw new Error('PlatformFactory.updateElement expects "name" to be string');
        // }

        // if (this._mapping.elements[name] !== undefined) {
        //     this.elementBuilders[name].update(...args);
        // } else if (this._mapping.controllers[name] !== undefined) {
        //     this.controllerBuilders[name].update(...args);
        // } else {
        //     throw new Error(`Unknown tag: ${name}`);
        // }
    }

    // TODO: Should be replaced by Proxy.addChild(parent, child)
    // after replacing builders with proxies
    _addChildNodeToParentNode(parent, child) {
        // if (parent instanceof ui.UiScrollView) {
        //     if (child instanceof ui.UiScrollBar) {
        //         parent.setScrollBar(child.Orientation, child);
        //     }

        //     if (child instanceof TransformNode) {
        //         if (child.offset !== undefined) {
        //             parent.setScrollContent(child, child.offset);
        //         } else {
        //             parent.setScrollContent(child);
        //         }
        //     }
        // } else if (parent instanceof ui.UiListView) {
        //     if (child instanceof ui.UiScrollBar) {
        //         parent.setScrollBar(child);
        //     }
        //     if (child instanceof ui.UiListViewItem) {
        //         const { Padding, ItemAlignment } = child;
        //         if (Padding !== undefined) {
        //             if (ItemAlignment !== undefined) {
        //                 parent.addItem(child, Padding, ItemAlignment);
        //             } else {
        //                 parent.addItem(child, Padding);
        //             }
        //         } else {
        //             parent.addItem(child);
        //         }
        //     }
        // } else if (parent instanceof ui.UiLinearLayout || parent instanceof ui.UiGridLayout) {
        //     const { Padding, ItemAlignment } = child;
        //     if (Padding !== undefined) {
        //         if (ItemAlignment !== undefined) {
        //             parent.addItem(child, Padding, ItemAlignment);
        //         } else {
        //             parent.addItem(child, Padding);
        //         }
        //     }
        // } else if (parent instanceof ui.UiSlider) {
        //     if (child instanceof TransformNode) {
        //         if (child.offset !== undefined) {
        //             parent.setSliderModel(child, child.offset);
        //         } else {
        //             parent.setSliderModel(child);
        //         }
        //     }
        // } else if (parent instanceof ui.UiRectLayout) {
        //     if (child instanceof TransformNode) {
        //         parent.setContent(child);
        //     }
        // } else if (parent instanceof ui.UiDropDownList) {
        //     if (child instanceof TransformNode) {
        //         if (child.offset !== undefined) {
        //             parent.ButtonModel(child, child.offset);
        //         } else {
        //             parent.ButtonModel(child);
        //         }
        //     }
        //     if (child instanceof ui.DropDownListItem) {
        //         const list = parent.getList();
        //         list.push(child);
        //         parent.setList(list);
        //     }
        //     // ListFont: Font2dResource(fontDesc, fontFile, a_absolutePath)
        //     // fontDesc = Font2dDesc(advanceDir, flowDir, tileSize, quality, minAlpha)
        // } else if (parent instanceof ui.UiDialog) {
        //     if (child instanceof TransformNode) {
        //         parent.setDialogContent(child);
        //     }
        // } else if (parent instanceof ui.UiToggle) {
        //     if (child instanceof TransformNode) {
        //         if (child.offset !== undefined) {
        //             parent.setToggleModel(child, child.offset);
        //         } else {
        //             parent.setToggleModel(child);
        //         }
        //     }
        // } else if (parent instanceof ui.UiPanel) {
        //     if (child instanceof ui.UiPanel) {
        //         if (child.Side !== undefined) {
        //             parent.setEdgeTransition(child.Side, child);
        //         }
        //     }
        // } else if (parent instanceof ui.UiPortalIcon) {
        //     if (child instanceof ModelNode) {
        //         parent.setIconModel(child, child.offset);
        //     } else if (child instanceof TransformNode) {
        //         parent.setBackgroundModel(child, child.offset);
        //     }
        // } else if (parent instanceof ui.UiButton) {
        //     if (child instanceof TransformNode) {
        //         if (child.offset !== undefined) {
        //             parent.setButtonModel(child, child.offset);
        //         } else {
        //             parent.setButtonModel(child);
        //         }
        //     }
        // } else {
        //     parent.addChild(child);
        // }
    }

    addChildElement(parent, child) {
        console.log('[FACTORY] addChildElement.parent: ', parent);
        console.log('[FACTORY] addChildElement.child: ', child);
        this.componentManager.addChildNode(child.id, parent.id);
        // if (typeof child === 'string') {
        //     parent.setText(child);
        // } else if (typeof child === 'number') {
        //     parent.setText(child.toString());
        // } else {
        //     if (this.isController(child)) {
        //         // TODO:
        //         // If the parent is not a controller
        //         // parent.addChild(child.getRoot())
        //         // parentContainer.addChildController(child)
        //         if ( !this.isController(parent) ) {
        //             throw new Error('Adding controller to non-controller parent');
        //         }
        //         parent.addChildController(child);
        //         parent.getRoot().addChild(child.getRoot());
        //     } else {
        //         if (this.isController(parent)) {
        //             parent.addChild(child);
        //         } else {
        //             this._addChildNodeToParentNode(parent, child);
        //         }
        //     }
        // }
    }

    _removeChildNodeToParentNode(parent, child) {
        // if (parent instanceof ui.UiScrollView) {
        //     // ScrollBar: child is <UiScrollBar, orientation>
        //     if (child instanceof ui.UiScrollBar) {
        //         parent.setScrollBar(child);
        //     }
        //     // ScrollContent: child is <TransformNode, vec3>
        // } else if (parent instanceof ui.UiListView) {
        //     // ScrollBar: child is UiSCrollBar
        //     // ListViewItem: use addItem instead of addChild
        // } else if (parent instanceof ui.UiSlider) {
        //     // SliderModel: child is <Node, vec3>
        // } else if (parent instanceof ui.UiRectLayout) {
        //     // Content: child is TransformNode
        // } else if (parent instanceof ui.UiDropDownList) {
        //     // ButtonModel: child is <Node, vec3>
        //     // List: child is array of DropDownListItem(s)
        //     // ListFont: Font2dResource(fontDesc, fontFile, a_absolutePath)
        //     // fontDesc = Font2dDesc(advanceDir, flowDir, tileSize, quality, minAlpha)
        // } else if (parent instanceof ui.UiDialog) {
        //     // DialogContent: child is TransformNode
        // } else if (parent instanceof ui.UiToggle) {
        //     // ToggleModel: child is <Node, vec3>
        // } else if (parent instanceof ui.UiPanel) {
        //     // EdgeTransition: child is <side, UiPanel>
        // } else if (parent instanceof ui.UiPortalIcon) {
        //     // BackgroundModel: child is <Node, vec3>
        //     // IconModel: : child is <Node, vec3>
        // }
    }

    removeChildElement(parent, child) {
        console.log('[FACTORY] removeChildElement.parent: ', parent);
        console.log('[FACTORY] removeChildElement.child: ', child);
        this.componentManager.removeChildNode(child.id, parent.id);
        // if (typeof child === 'string' || typeof child === 'number') {
        //     parent.setText('');
        // } else {
        //     if (this.isController(child) !== undefined) {
        //         if ( !this.isController(parent) ) {
        //             throw new Error('Removing controller from non-controller parent');
        //         }
        //         parent.removeChildController(child);
        //     } else if (this.isController(parent) !== undefined) {
        //         parent.getRoot().removeChild(child);
        //     } else {
        //         parent.removeChild(child);
        //     }
        // }
    }

    appendChildToContainer(container, child) {
        console.log('[FACTORY] appendChildToContainer.container: ', container);
        console.log('[FACTORY] appendChildToContainer.child: ', child);

        this.componentManager.addChildNodeToContainer(child.id);
        // if (this.isController(child)){
        //     container.controller.addChildController(child);
        //     container.parent.addChild(child.getRoot());
        // } else {
        //     container.controller.getRoot().addChild(child);
        // }
    }

    removeChildFromContainer(container, child) {
        console.log('[FACTORY] removeChildFromContainer.container: ', container);
        console.log('[FACTORY] removeChildFromContainer.child: ', child);
        // if (this.isController(child)) {
        //     container.controller.removeChildController(child);
        // } else {
        //     container.controller.getRoot().removeChild(child);
        // }
    }

    createApp(appComponent) {
        // if (typeof appComponent !== 'object') {
        //     throw new TypeError('Invalid argument: PlatformFactory.createContainer expects "component" to be an object');
        // }

        // const appType = appComponent.props.type;

        // let app;

        // if (appType === 'landscape') {
        //     app = new MxsLandscapeApp(appComponent, 0.5);
        // } else if (appType === 'immersive') {
        //     app = new ImmersiveApp(0.5);
        //     app.type = 'immersiveApp';
        // } else {
        //     throw new TypeError(`Invalid argument: Unknown app type: ${appType}`);
        // }

        // return app;
    }
}
