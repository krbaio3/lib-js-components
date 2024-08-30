import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'css-bitmap',
  styleUrl: 'bitmap.scss',
  shadow: true,
})
export class Bitmap {
  @Prop() imgSrc: string;
  @Prop() imgAlt: string;

  render() {
    return <img src={this.imgSrc} alt={this.imgAlt} />;
  }
}
