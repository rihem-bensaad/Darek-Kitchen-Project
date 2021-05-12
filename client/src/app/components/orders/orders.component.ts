import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../../services/socketio.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private socketService : SocketioService) { }

  ngOnInit(): void {
    this.connectSocket()
  }

  connectSocket(){
    this.socketService.listen('test event').subscribe(res=>{
      console.log(res);
    })
  }

}
