import { Component } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <button class="mdc-button">
            <span class="mdc-button__label">Button</span>
          </button>
        </main>
      </div>
    );
  }
}
