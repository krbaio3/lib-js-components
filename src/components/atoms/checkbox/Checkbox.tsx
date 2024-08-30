import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'css-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
})
export class Checkbox {
  @Prop() label: string;
  @Prop() checked: boolean = false;

  render() {
    return (
      <label class="css-checkbox">
        <input type="checkbox" checked={this.checked} />
        {this.label}
      </label>
    );
  }
}
