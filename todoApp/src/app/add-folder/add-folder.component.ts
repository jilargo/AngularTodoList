import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { songList } from '../data/songList.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent {
  showForm : boolean = true;
  hide:boolean = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  list: songList[] = [];
  newList: songList = { name: '', description: '' };
  constructor(private http: HttpClient){

  }
  submitForm() {
    this.list.push({ ...this.newList }); // Clone the object to prevent reference issues
    this.saveDataToJsonFile();
     
  }
  saveDataToJsonFile() {
    const jsonData = JSON.stringify(this.list, null, 2);
  
    this.http.post<any>('http://localhost:3000/saveData', this.list)
      .subscribe(
        (response) => {
          console.log('Server response:', response);
          if (response && response.message) {
            console.log('Success:', response.message);
          }
        },
        (error) => {
          console.error('Error sending data to server:', error);
        }
      );
  }
  
  
  
  
  
  
  
  closeForm(){
    this.showForm = false;
  }
}
