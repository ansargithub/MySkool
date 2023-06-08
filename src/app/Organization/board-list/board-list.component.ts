import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board-service.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  boards: any[];

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.getBoards();
  }

  getBoards(): void {
    this.boardService.getBoards()
      .subscribe(boards => this.boards = boards);
  }

  deleteBoard(id: number): void {
    this.boardService.deleteBoard(id)
      .subscribe(() => {
        this.boards = this.boards.filter(board => board.BoardId !== id);
      });
  }
 
}
