import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'css-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Prop() label: string;
  @Prop() type: string = 'button';

  render() {
    return (
      <button type={this.type} class="css-button">
        {this.label}
      </button>
    );
  }
}
