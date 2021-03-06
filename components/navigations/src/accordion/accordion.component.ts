import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Accordion } from '@syncfusion/ej2-navigations';
import { AccordionItemsDirective, AccordionItemDirective, AccordionItemsPlugin, AccordionItemPlugin } from './items.directive'


export const properties: string[] = ['animation', 'enablePersistence', 'enableRtl', 'expandMode', 'height', 'items', 'locale', 'width', 'clicked', 'created', 'destroyed', 'expanded', 'expanding'];
export const modelProps: string[] = [];

/**
 * Represents the EJ2 VueJS Accordion Component.
 * ```html
 * <ejs-accordion  :items='accordionItems'></ejs-accordion>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class AccordionComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-accordionitems":"e-accordionitem"};
    public tagNameMapper: Object = {"e-accordionitems":"e-items"};
    
    constructor() {
        super();
        this.ej2Instances = new Accordion({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public addItem(item: Object, index?: number): void {
        return this.ej2Instances.addItem(item, index);
    }

    public enableItem(index: number, isEnable: boolean): void {
        return this.ej2Instances.enableItem(index, isEnable);
    }

    public expandItem(isExpand: boolean, index?: number): void {
        return this.ej2Instances.expandItem(isExpand, index);
    }

    public hideItem(index: number, isHidden?: Object): void {
        return this.ej2Instances.hideItem(index, isHidden);
    }

    public removeItem(index: number): void {
        return this.ej2Instances.removeItem(index);
    }

    public select(index: number): void {
        return this.ej2Instances.select(index);
    }
}

export const AccordionPlugin = {
    name: 'ejs-accordion',
    install(Vue: any) {
        Vue.component(AccordionPlugin.name, AccordionComponent);
        Vue.component(AccordionItemPlugin.name, AccordionItemDirective);
        Vue.component(AccordionItemsPlugin.name, AccordionItemsDirective);

    }
}
