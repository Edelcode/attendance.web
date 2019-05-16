import {
    Component,
    Event,
    EventEmitter,
    Prop,
    Watch,
    Element,
} from '@stencil/core';
import { MDCSelect } from '@material/select';

@Component({
    tag: 'select-menu',
    styleUrl: 'select.component.scss',
})
export class SelectComponent {
    @Prop() model: any[];
    @Prop() selectedValue: string;
    @Event() selectedChange: EventEmitter<string>;

    @Element() el: HTMLElement;

    public select: any;

    @Watch('selectedValue')
    public SelectedValuesChanged() {
        this.selectChange();
    }

    constructor() {}


    selectChange() {
        if (!this.select) {
            this.select = new MDCSelect(this.el.querySelector('.mdc-select'));
            this.select.listen('MDCSelect:change', () => {
                this.selectedChange.emit(this.select.value);
            });
        }
    }

    render() {
        let options = this.model.map(val => {
            return (
                <option selected={val == this.selectedValue} value={val}>
                    {val}
                </option>
            );
        });

        return (
            <div class="mdc-select custom" onClick={() => this.selectChange()}>
                <select class="mdc-select__native-control custom">{options}</select>
                <div class="mdc-line-ripple custom" />
            </div>
        );
    }
}
