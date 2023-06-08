import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../board-service.service';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {
  board: any;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getBoard(id);
  }

  getBoard(id: number): void {
    this.boardService.getBoard(id)
      .subscribe(board => this.board = board);
  }
}
