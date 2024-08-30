import { Component, h } from '@stencil/core';

@Component({
  tag: 'css-panel-raised',
  styleUrl: 'panel-raised.scss',
  shadow: true,
})
export class PanelRaised {
  render() {
    return (
      <div class="panel-raised">
        <slot></slot>
      </div>
    );
  }
}
