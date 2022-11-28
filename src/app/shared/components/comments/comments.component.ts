import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Comment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [
    trigger(
      'grow', [
        state(
          'default', style({
            transform: 'scale(1)',
            backgroundColor: 'white',
            zIndex: 1
          })
        ),
        state(
          'hover',
          style({
            transform: 'scale(1.5)',
            backgroundColor: 'purple',
            zIndex: 2
          })
        ),
        transition('default => hover', [
          animate('100ms ease-in-out')
        ]),
        transition('hover => default', [
          animate('200ms ease-in-out')
        ])
      ]
    )
  ]
})
export class CommentsComponent implements OnInit {

  commentCtrl!: FormControl;
  @Input() comments!: Comment[];
  @Output() newComment = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)]);
  }

  onLeaveComment() {
    if(this.commentCtrl.invalid) return;
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }
}
