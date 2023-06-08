import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BoardService } from '../board-service.service';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {
  board: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getBoard(id);
    }
  }

  getBoard(id: number): void {
    this.boardService.getBoard(id)
      .subscribe(board => this.board = board);
  }

  saveBoard(): void {
    if (this.board.boardId) {
      this.boardService.updateBoard(this.board)
        .subscribe(() => this.router.navigate(['/organization/boards']));
    } else {
      this.boardService.addBoard(this.board)
        .subscribe(() => this.router.navigate(['/organization/boards']));
    }
  }
}
