import { Injectable } from '@angular/core';


export interface IToDo {
  status: string,
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  listToDo: Array<IToDo> = []
  visibleList: Array<IToDo> = this.listToDo

  constructor() { }

  addToDo(text: string):void {
    this.listToDo.push({ status: "обычный", text: text })
  }

  deleteToDo(num: number):void {
    this.listToDo = this.listToDo.filter((item: IToDo, index: number) => index !== num)
    this.visibleList = this.listToDo
  }

  statusHandler(num: number, val: string):void {
    this.listToDo[num].status = val
  }

  filterText(filter: string):void {
    this.visibleList = this.listToDo.filter((item: IToDo) => item.text.toLowerCase().includes(filter.toLowerCase()))
  }

  filterStatus(filter: string):void {
    this.visibleList = filter === "все" ? this.listToDo :
    this.listToDo.filter((item: IToDo) => item.status === filter)
  }

  clearFilter():void {
    this.visibleList = this.listToDo
  }
}
