import { Directive, HostListener, Input } from '@angular/core';
import { MatMenuTrigger, MatMenuPanel, MatMenu } from '@angular/material';
@Directive({
    selector: '[rightClickTrigger]'
})
export class RightClickTriggerDirective extends MatMenuTrigger {
    @Input('rightClickTrigger')

    set _menuFor(v: MatMenuPanel) {
        this.menu = v;
    }

    get _menuFor(): MatMenuPanel {
        return this.menu;
    }

    @HostListener('click', ['$event'])
    _handleClick(e: any) {
        // consume left click
    }
    @HostListener('contextmenu', ['$event'])
    handleContext(e: any) {
        e.preventDefault(); // prevents the browsers context menu
        super._handleClick(e);
    }
}