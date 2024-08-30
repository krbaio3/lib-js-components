import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'css-table',
  styleUrl: 'table.scss',
  shadow: true,
})
export class Table {
  @Prop() headers: string[];
  @Prop() rows: string[][];

  render() {
    return (
      <table class="css-table">
        <thead>
          <tr>
            {this.headers.map(header => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.rows.map(row => (
            <tr>
              {row.map(cell => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
