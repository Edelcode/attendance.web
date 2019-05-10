import { Component } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss"
})
export class AppRoot {
  render() {
    return (
      <div class="mdc-text-field">
        <input class="mdc-text-field__input" />
        <div class="mdc-line-ripple" />
        <label class="mdc-floating-label">Name</label>
      </div>
    );
  }
}
