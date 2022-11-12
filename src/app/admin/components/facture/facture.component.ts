import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/api-service";
import { State, process } from "@progress/kendo-data-query";
import {GridDataResult} from "@progress/kendo-angular-grid";
import {Observable} from "rxjs";
import {EditService} from "./edit.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent {
  // @ts-ignore
  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10,
  };

  private editService: EditService;
  private editedRowIndex: number =-1;
  private editedProduct: any;

  constructor(@Inject(EditService) editServiceFactory: any) {
    this.editService = editServiceFactory();
  }

  public ngOnInit(): void {
    this.view = this.editService.pipe(
      map((data) => process(data, this.gridState))
    );

    this.editService.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;

    this.editService.read();
  }

  // @ts-ignore
  public addHandler({ sender }, formInstance) {
    formInstance.reset();
    this.closeEditor(sender);

    // sender.addRow(new Product());
  }

  // @ts-ignore
  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedProduct = Object.assign({}, dataItem);

    sender.editRow(rowIndex);
  }

  // @ts-ignore
  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  // @ts-ignore
  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    this.editService.save(dataItem, isNew);

    sender.closeRow(rowIndex);

    // @ts-ignore
    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }

  // @ts-ignore
  public removeHandler({ dataItem }) {
    this.editService.remove(dataItem);
  }

  // @ts-ignore
  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editService.resetItem(this.editedProduct);
    // @ts-ignore
    this.editedRowIndex = undefined;
    this.editedProduct = undefined;
  }
}
