import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'css-component',
  styleUrl: 'bitmap.scss',
  shadow: true,
})
export class MyComponent {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
