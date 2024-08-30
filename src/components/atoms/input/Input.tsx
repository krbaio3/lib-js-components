import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'css-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {
  @Prop() type: string = 'text';
  @Prop() value: string;

  render() {
    return <input type={this.type} value={this.value} class="css-input" />;
  }
}
