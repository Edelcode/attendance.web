import { Component } from "@stencil/core";

@Component({
  tag: "employees-page",
  styleUrl: "employees.page.scss"
})
export class EmployeesPage {


  render() {
    return (
      <div>
        <div class=""></div>
        <div class="mdc-text-field-character-counter">0 / 140</div>
      </div>
    );
  }
}
